import React from 'react';
import { getProgress } from '../../util/projectUtils';
import Project from '../../types/project';
import { Link } from 'react-router-dom';

interface ProjectProps {
  project: Project;  // project라는 이름의 prop
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Link to={`/projects/detail/${project.project_id}`}
      key={project.project_id}
      className="border-[rgb(220,220,220)] border-2 w-[28%] h-[350px] rounded-md mt-10">
      <div className="border-b-[#dcdcdc] h-[80%] w-full relative">
        <span className="absolute bg-[#dcdcdc] px-2 py-1 top-0 left-0">
          {' '}
          {/* 왼쪽 상단에 위치하도록 수정 */}
          <p>{project.type}</p>
        </span>
        <img
          className="w-full h-full object-cover rounded-t"
          // src="https://i.namu.wiki/i/oU0avPQmlPv0p13BPnuEqyzmtGl9SoTArdKVYpb1r5CYXrpUjEqtiurvlFDjpXdOMyDXwIFYpz0x3PgtS92_8A.webp"
          src={project.title_img || "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fsolid-part-6%2F128%2Fimage_icon-512.png&type=sc960_832"}
          alt={project.title}
        />
      </div>
      <div className="h-[20%] w-full text-justify pt-2 px-2">
        <p className="text-h4 font-semibold">{project.title}</p>
        <p className="text-h4 font-semibold">{getProgress(project)}%</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
