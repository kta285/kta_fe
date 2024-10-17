import LoginForm from "../components/login/LoginForm";
import axios from "axios";
import { useState } from "react";

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const url = "http://localhost:3333";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const response = await axios.post(`${url}/user/login`, {
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      console.error("로그인 중 오류 발생", error);
    }
  };

  return (
    <div>
      <LoginForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
