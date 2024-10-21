import Project from '../../types/project';
import ProjectItem from './ProjectItem';

export interface ProjectListProps {
  projects: Project[]; // projects가 null일 수 있음
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  if (projects.length === 0) {
    return (
      <div className='container mx-auto my-10'>표시할 내용이 없습니다.</div>
    );
  }

  return (
    <div className='container w-[70%] mx-auto'>
      {projects.map((project: Project, i) => {
        return (<ProjectItem key={i} project={project} />);
      })}
    </div>
  );
};

export default ProjectList;
