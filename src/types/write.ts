export interface WriteProps {
  body: WriteBodyProps;
}

export type WriteBodyProps = {
  title: string;
  amount: string;
  category: string;
  content: string;
  startDate: Date;
  endDate: Date;
  titleImg: string;
};
