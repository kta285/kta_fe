import { projectApi } from '../api/requests/projectApi';

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
