import SignupForm from "../components/signup/SignupForm";
import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [username, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");

  const url = "http://localhost:3333";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !email || !password || !checkPassword) {
      return alert("모든 필드를 입력해주세요.");
    }

    if (password !== checkPassword) {
      return alert("입력한 비밀번호를 다시 확인해주세요.");
    }
    if (!email.includes("@")) {
      return alert("유효한 이메일 주소를 입력해 주세요.");
    }
    if (password.length < 6) {
      return alert("비밀번호는 최소 6자리 이상이어야 합니다.");
    }
    try {
      const response = await axios.post(`${url}/user/signup`, {
        username,
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      console.error("회원가입 중 오류 발생", error);
      alert("회원가입 중 오류 발생");
    }
  };

  return (
    <div>
      <SignupForm
        username={username}
        setUserName={setUserName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        checkPassword={checkPassword}
        setCheckPassword={setCheckPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Signup;
