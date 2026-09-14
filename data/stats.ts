export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export const stats: Stat[] = [
  {
    value: 2400,
    suffix: "+",
    label: "Placements Made",
    icon: "Users",
  },
  {
    value: 180,
    suffix: "+",
    label: "Partner Companies",
    icon: "Building2",
  },
  {
    value: 38,
    suffix: "",
    label: "Countries Served",
    icon: "Globe",
  },
  {
    value: 96,
    suffix: "%",
    label: "Candidate Satisfaction",
    icon: "ThumbsUp",
  },
];
