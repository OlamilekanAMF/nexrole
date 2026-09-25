import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// HTML entity sanitization to prevent Email HTML Injection & XSS
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// RFC 5322 compliant simplified email validator
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export async function POST(req: Request) {
  try {
    // 1. Parse JSON safely
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const { fullName, email, subject, message, hp } = body;

    // 2. Anti-bot honeypot defense (if hidden honeypot is filled, silently discard)
    if (hp && typeof hp === "string" && hp.trim().length > 0) {
      return NextResponse.json({ success: true });
    }

    // 3. Strict type & presence checks
    if (
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "Invalid field format." },
        { status: 400 }
      );
    }

    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = typeof subject === "string" ? subject.trim() : "General Inquiry";
    const trimmedMessage = message.trim();

    // 4. Input boundary & length validation (Anti-DoS & Anti-Buffer Abuse)
    if (trimmedName.length < 2 || trimmedName.length > 100) {
      return NextResponse.json(
        { error: "Name must be between 2 and 100 characters." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(trimmedEmail) || trimmedEmail.length > 255) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (trimmedSubject.length > 150) {
      return NextResponse.json(
        { error: "Subject must not exceed 150 characters." },
        { status: 400 }
      );
    }

    if (trimmedMessage.length < 5 || trimmedMessage.length > 4000) {
      return NextResponse.json(
        { error: "Message must be between 5 and 4,000 characters." },
        { status: 400 }
      );
    }

    // 5. Sanitize all user-controlled values before embedding in HTML email
    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safeSubject = escapeHtml(trimmedSubject);
    const safeMessage = escapeHtml(trimmedMessage);

    const fromAddress = process.env.RESEND_FROM_EMAIL || "NexRole Inquiries <onboarding@resend.dev>";
    const toAddress = process.env.CONTACT_RECIPIENT_EMAIL || "delivered@resend.dev";

    // 6. Dispatch via Resend
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: trimmedEmail,
      subject: `[NexRole Inquiry] ${safeSubject} from ${safeName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0F172A; border-bottom: 2px solid #2563EB; padding-bottom: 10px; margin-top: 0; font-size: 20px;">New Executive Inquiry Received</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #64748B; width: 140px; font-weight: 600;">Full Name:</td>
              <td style="padding: 8px 0; color: #0F172A; font-weight: 700;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Direct Email:</td>
              <td style="padding: 8px 0; color: #2563EB;"><a href="mailto:${safeEmail}" style="color: #2563EB; text-decoration: none;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Department / Tier:</td>
              <td style="padding: 8px 0; color: #0F172A;">${safeSubject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 18px; background-color: #F8FAFC; border-radius: 8px; border-left: 4px solid #2563EB;">
            <p style="margin: 0; font-weight: 700; color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message Details</p>
            <p style="margin-top: 8px; color: #1E293B; white-space: pre-line; line-height: 1.6; font-size: 14px;">${safeMessage}</p>
          </div>
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #E2E8F0; font-size: 12px; color: #94A3B8; display: flex; justify-content: space-between;">
            <span>Source: NexRole Executive Portal</span>
            <span>Security: Sanitized & TLS Encrypted</span>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error.message);
      return NextResponse.json(
        { 
          success: false, 
          error: "Unable to process email delivery. Please contact support@nexroleagency.com directly." 
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Internal Server Error in /api/contact:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
