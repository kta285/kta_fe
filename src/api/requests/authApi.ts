import axios from "../client";
interface LoginData {
  email: string;
  password: string;
}

interface SignupData {
  username: string;
  email: string;
  password: string;
}

export const login = async (loginData: LoginData) => {
  try {
    const response = await axios.post("/user/login", loginData);
    return response.data;
  } catch (error) {
    throw new Error("로그인 중 오류 발생");
  }
};

// 회원가입 API 호출 함수
export const signup = async (signupData: SignupData) => {
  try {
    const response = await axios.post("/user/signup", signupData);
    return response.data;
  } catch (error) {
    throw new Error("회원가입 중 오류 발생");
  }
};
