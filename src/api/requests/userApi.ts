import axios from '../client';
const baseDirectory = '/user';

export const userInfoApi = async (userId: string) => {

    try {
        const res = await axios.get(baseDirectory + "/info", {
            // userId가 있으면 헤더에 추가
            headers: userId ? { 'user_id': userId } : {}
        });
        return res.data; // 데이터 반환
    } catch (error) {
        console.error('Error fetching images:', error);
        return []; // 에러 시 빈 배열 반환
    }
};