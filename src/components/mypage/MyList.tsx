import { useEffect, useState } from 'react';
import Project from '../../types/project';
import { getProjects } from '../../util/projectUtils';
import MyProjectItem from './MyProjectItem';

const MyList = () => {
  const [projects, setProjects] = useState([]); // 초기값을 props로 설정

  useEffect(() => {
    getProjects().then(setProjects).catch(console.error);
  }, []);

  if (projects.length === 0) {
    return (
      <div className='container mx-auto my-10'>표시할 내용이 없습니다.</div>
    );
  }

  return (
    <div className='container w-[70%] mx-auto'>
      {projects.map((project: Project, i) => {
        return (<MyProjectItem key={i} project={project} />);
      })}
    </div>
  );
};

export default MyList;
