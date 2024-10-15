// 파일 이름 수정
import { WriteProps } from '../../types/write';
import axios from '../client';

export const writeApi = async ({ body }: WriteProps) => {
  try {
    const res = await axios.post('/write', { body });
    return res; // 데이터 반환
  } catch (error) {
    console.error('Error fetching images:', error);
    return []; // 에러 시 빈 배열 반환
  }
};
