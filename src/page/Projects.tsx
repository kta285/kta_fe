
import ProjectMenu from "../components/projectlist/ProjectMenu";
import ProjectList from "../components/projectlist/ProjectList";
import { useEffect, useState } from "react";
import { projectApi } from "../api/requests/projectApi";
import type Project from "../types/project";
import { useParams } from "react-router-dom"; // URL 파라미터를 가져오기 위해 추가


const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { type } = useParams<{ type: string }>();  // URL에서 'type' 파라미터 받아옴

  // 프로젝트 데이터 가져오는 함수
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

  const filteredType = type || "all"

  // selectedType에 따라 필터링된 프로젝트 리스트
  const filteredProjects = filteredType === "all"
    ? projects // 'all'일 때는 모든 프로젝트를 보여줌
    : projects.filter((project) => project.type === type) // 선택된 타입에 따라 필터링

  // console.log(type)
  // console.log(projects);

  return (<>
    <ProjectMenu />
    <ProjectList projects={filteredProjects} />
  </>);
};

export default Projects;