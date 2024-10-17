import { projectApi } from '../api/requests/projectApi';
import Project from '../types/project';

// 모든 프로젝트 데이터 가져오는 함수
export const getProjects = async () => {
  try {
    const data = await projectApi(); // 프로젝트 데이터를 가져옴
    return data; // Project[] 반환
  } catch (error) {
    console.error('Error fetching data:', error); // 오류 처리
    return []; // 에러가 발생할 경우 빈 배열 반환
  }
};

export const getProgress = (project: Project) => {
  const { current_amount, goal_amount } = project;
  return parseFloat(((Number(current_amount) / Number(goal_amount)) * 100).toFixed(2));
};

export const getFundingState = (state: 'ongoing' | 'completed' | 'pending') => {
  const statusValue = {
    ongoing: '진행중',
    completed: '종료됨',
    pending: '심사중',
  };
  return statusValue[state];
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}