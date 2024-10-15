export interface WriteProps {
  body: WriteBodyPorps;
}

export type WriteBodyPorps = {
  title: string;
  amount: string;
  category: string;
  content: string;
  startDate: Date;
  endDate: Date;
};
