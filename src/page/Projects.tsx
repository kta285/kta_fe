<<<<<<< Updated upstream
import ProjectMenu from "../components/projectlist/ProjectMenu";
import ProjectList from "../components/projectlist/ProjectList";
import { useEffect, useState } from "react";
import { getProjects } from "../util/getProjects"
import type Project from "../types/project";
import { useParams } from "react-router-dom"; // URL 파라미터를 가져오기 위해 추가
=======
import ProjectMenu from '../components/projectlist/ProjectMenu';
import ProjectList from '../components/projectlist/ProjectList';
import { useEffect, useState } from 'react';
import { getProjects } from '../util/getProjects';
import type Project from '../types/project';
import { useParams } from 'react-router-dom'; // URL 파라미터를 가져오기 위해 추가
>>>>>>> Stashed changes

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { type } = useParams<{ type: string }>(); // URL에서 'type' 파라미터 받아옴

  useEffect(() => {
<<<<<<< Updated upstream
    getProjects()
      .then(setProjects);
=======
    getProjects().then(setProjects); // 데이터를 상태로 설정
>>>>>>> Stashed changes
  }, []);

  const filteredType = type || 'all';

  // selectedType에 따라 필터링된 프로젝트 리스트
<<<<<<< Updated upstream
  const filteredProjects = filteredType === "all"
    ? projects // 'all'일 때는 모든 프로젝트를 보여줌
    : projects.filter(project => project.type === type) // 선택된 타입에 따라 필터링
=======
  const filteredProjects =
    filteredType === 'all'
      ? projects // 'all'일 때는 모든 프로젝트를 보여줌
      : projects.filter((project) => project.type === type); // 선택된 타입에 따라 필터링

  // console.log(type)
  // console.log(projects);
>>>>>>> Stashed changes

  return (
    <>
      <ProjectMenu />
      <ProjectList projects={filteredProjects} />
    </>
  );
};

export default Projects;
