// 파일 이름 수정
import { AxiosResponse } from 'axios';
import { WriteProps } from '../../types/write';
import axios from '../client';
const baseDirectory = '/project/';

export const projectApi = async () => {
  try {
    const res = await axios.get(baseDirectory + 'all');
    return res.data; // 데이터 반환
  } catch (error) {
    console.error('Error fetching images:', error);
    return []; // 에러 시 빈 배열 반환
  }
};

export const projectWriteApi = async ({
  body,
}: WriteProps): Promise<AxiosResponse | []> => {
  try {
    const res = await axios.post(baseDirectory + '/write', { body });
    return res; // 정상적인 응답 반환
  } catch (error) {
    console.error('Error fetching images:', error);
    return []; // 에러 시 빈 배열 반환
  }
};
export const projectDetailApi = async (id: string) => {
  try {
    const ids = Number(id);
    const res = await axios.get(baseDirectory + `${ids}`);
    return res.data; // 데이터 반환
  } catch (error) {
    console.error('Error fetching images:', error);
    return []; // 에러 시 빈 배열 반환
  }
};
