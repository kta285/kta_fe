import { Link } from 'react-router-dom';

const Header = () => {
  const jwt = false;

  return (
    <nav className="flex w-[100%] m-auto border-b h-[80px]">
      <div className="w-[70%] flex m-auto">
        <div className="w-[50%] flex ">
          <img
            src="/imgs/user-solid.png"
            alt="logo"
            className="h-[30px] mx-1"
          />
          <Link className="text-h3 hover:text-[#dcdcdc]" to="/">
            펀딩펀 - Crowdfunding Platform
          </Link>
        </div>
        <div className="w-[50%] flex justify-end">
          <ul className="flex w-[70%] justify-around ">
            <li className="hover:text-[#dcdcdc]">
              <Link className="text-h3" to="/">
                카테고리
              </Link>
            </li>
            <li className="hover:text-[#dcdcdc]">
              <Link className="text-h3" to="/">
                프로젝트 등록
              </Link>
            </li>
            {jwt ? (
              <li className="hover:text-[#dcdcdc]">
                <Link className="text-h3" to="/">
                  마이페이지
                </Link>
              </li>
            ) : (
              <li className="hover:text-[#dcdcdc]">
                <Link className="text-h3" to="/">
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