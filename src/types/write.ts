export interface WriteProps {
  body: WriteBodyPorps;
}

export type WriteBodyProps = {
  title: string;
  amount: string;
  category: string;
  content: string;
  startDate: Date;
  endDate: Date;
};
