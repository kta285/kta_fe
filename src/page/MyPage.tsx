import { getProjects } from '../util/getProjects';
import MyInfo from '../components/mypage/MyInfo';
import ProjectCategory from '../components/mypage/ProjectCategory';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const MyPage = () => {

  // eslint-disable-next-line
  const [projects, setProjects] = useState([]);

  // 프로젝트 데이터 가져오는 함수
  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch(console.error);
  }, []);

  return (
    <>
      <MyInfo />
      <ProjectCategory />
      <Outlet />
    </>
  );
};

export default MyPage;
