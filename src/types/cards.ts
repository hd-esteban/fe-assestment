export type CardProps = {
  icon?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
};

export type CardSectionProps = {
  children?: React.ReactNode;
};

export type CardRowVariation = "detail" | "total";

export type CardRowProps = {
  variation?: CardRowVariation;
  color?: number;
  label?: string;
  value?: string;
  withProgressBar?: boolean
};

export type CardRow = { id: number } & CardRowProps;

export type Cards = {
  id: number;
  icon?: React.ReactNode;
  title?: string;
  details?: CardRow[];
  totals?: CardRow[];
}[];
