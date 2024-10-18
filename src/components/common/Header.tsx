import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const user_id = sessionStorage.getItem("user_id");
    setIsLoggedIn(!!user_id);
  }, []);

  return (
    <nav className="flex w-[100%] m-auto border-b h-[80px]">
      <div className="w-[70%] flex m-auto">
        <div className="w-[50%] flex ">
          <img src="/img/user-solid.png" alt="logo" className="h-[30px] mx-1" />
          <Link className="text-h3 hover:text-[#dcdcdc]" to="/">
            펀딩펀 - Crowdfunding Platform
          </Link>
        </div>
        <div className="w-[50%] flex justify-end">
          <ul className="flex w-[70%] justify-around ">
            <li className="hover:text-[#dcdcdc]">
              <Link className="text-h3" to="/projects">
                모든 프로젝트
              </Link>
            </li>
            <li className="hover:text-[#dcdcdc]">
              <Link className="text-h3" to="/write">
                프로젝트 등록
              </Link>
            </li>
            <li className="hover:text-[#dcdcdc]">
              <Link className="text-h3" to="/faq">
                고객지원
              </Link>
            </li>
            {isLoggedIn ? (
              <li className="hover:text-[#dcdcdc]">
                <Link className="text-h3" to="/mypage">
                  마이페이지
                </Link>
              </li>
            ) : (
              <li className="hover:text-[#dcdcdc]">
                <Link className="text-h3" to="/login">
                  로그인
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
