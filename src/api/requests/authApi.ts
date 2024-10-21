import axios from '../client';
interface LoginData {
  email: string;
  password: string;
}

interface SignupData {
  username: string;
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  user_id: number;
  user: {
    user_id: number;
    username: string;
    email: string;
  };
}

export const login = async (loginData: LoginData): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>('/user/login', loginData);
    const { user_id, user } = response.data;
    console.log(user_id, typeof user_id, user);
    sessionStorage.setItem('user_id', user_id.toString()); // 토큰을 문자열로 변환 후 저장
    console.log(sessionStorage.getItem('user_id'));
    // 사용자가 로그인하면 Authorization 헤더 설정
    axios.defaults.headers.common['Authorization'] = user_id.toString();
    console.log('저장된 user_id:', user_id);
    console.log('사용자 정보:', user);

    return response.data;
  } catch (error: any) {
    console.error(error.response ? error.response.data : error.message);

    throw new Error('로그인 중 오류 발생');
  }
};

export const signup = async (signupData: SignupData) => {
  try {
    const response = await axios.post('/user/signup', signupData);
    return response.data;
  } catch (error) {
    throw new Error('회원가입 중 오류 발생');
  }
};
