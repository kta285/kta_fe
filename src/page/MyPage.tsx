import MyInfo from '../components/mypage/MyInfo';
import ProjectCategory from '../components/mypage/ProjectCategory';
import ProjectList from '../components/projectlist/ProjectList';
import { projectApi } from '../api/requests/projectApi';
import { useEffect, useState } from 'react';

const MyPage = () => {
  const [projects, setProjects] = useState([]);

  // 프로젝트 데이터 가져오는 함수
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await projectApi(); // 프로젝트 데이터를 서버에서 가져옴
        setProjects(data); // 가져온 데이터로 상태 업데이트
      } catch (error) {
        console.error('Error fetching data:', error); // 오류 처리
      }
    };
    fetchData(); // 함수 호출
  }, []);

  console.log(projects);

  return (
    <>
      <MyInfo />
      <ProjectCategory />
      <ProjectList projects={projects} />

    </>
  );
};

export default MyPage;
