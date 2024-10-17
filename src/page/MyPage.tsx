import MyInfo from '../components/mypage/MyInfo';
import ProjectCategory from '../components/mypage/ProjectCategory';
import { Outlet } from 'react-router-dom';

const MyPage = () => {

  return (
    <div>
      <MyInfo />
      <ProjectCategory />
      <Outlet />
    </div>
  );
};

export default MyPage;
