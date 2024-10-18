// 파일 이름 수정
import axios from '../client';
const baseDirectory = '/inquiries/';

export const inquiryApi = async () => {
  try {
    const res = await axios.get(baseDirectory + 'all');
    return res.data; // 데이터 반환
  } catch (error) {
    console.error('Error fetching images:', error);
    return []; // 에러 시 빈 배열 반환
  }
};