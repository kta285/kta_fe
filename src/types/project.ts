// 프로젝트의 타입 정의
export default interface Project {
  project_id: number;
  title: string;
  description: string;
  created_by: string;
  imageUrl?: string;
  goal_amount: number;
  current_amount: number;
  status: any;
  start_date: string;
  end_date: string;
  type: string;
}
