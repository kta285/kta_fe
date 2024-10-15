
import ProjectMenu from "../components/projectlist/ProjectMenu";
import ProjectList from "../components/projectlist/ProjectList";
import { useEffect, useState } from "react";
import { projectApi } from "../api/requests/projectApi";

const Project = () => {
  const [projects, setProjects] = useState([]);
  // 이미지 데이터 가져오는 함수
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await projectApi(); // 이미지 데이터를 서버에서 가져옴
        setProjects(data); // 가져온 데이터로 상태 업데이트
      } catch (error) {
        console.error("Error fetching data:", error); // 오류 처리
      }
    };
    fetchData(); // 함수 호출
  }, []);

  console.log(projects);

  return (<>
    <ProjectMenu />
    <ProjectList
      projects={projects}
    />
  </>);
};

export default Project;

