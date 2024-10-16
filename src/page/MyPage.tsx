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

  // const projects = [
  //   {
  //     project_id: 1,
  //     title: 'ABCD 팬 사인회',
  //     description: '강남구 Alphabet 카페에서 ABCD 멤버들과 함께 사인회',
  //     created_by: '히라가나',
  //     imageUrl: 'http://picsum.photos/100/100',
  //     goal_amount: 5000,
  //     current_amount: 2500,
  //     status: 'ongoing',
  //     start_date: '2024-02-01',
  //     end_date: '2024-08-31',
  //   },
  //   {
  //     project_id: 2,
  //     title: '굿즈 제작',
  //     description: '김여시 굿즈 공동구매 하실분',
  //     created_by: '(주)팍스',
  //     imageUrl: 'http://picsum.photos/99/100',
  //     goal_amount: 10000,
  //     current_amount: 72500,
  //     status: 'completed',
  //     start_date: '2024-02-01',
  //     end_date: '2024-01-31',
  //   },
  // ];

  return (
    <>
      <MyInfo />
      <ProjectCategory />
      <ProjectList projects={projects} />
    </>
  );
};

export default MyPage;
