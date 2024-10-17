import MyInfo from '../components/mypage/MyInfo';
import ProjectCategory from '../components/mypage/MyMenu';
import { Outlet } from 'react-router-dom';

const MyPage = () => {

  return (<>
    <MyInfo />
    <ProjectCategory />
    <Outlet />
  </>);
};

export default MyPage;
