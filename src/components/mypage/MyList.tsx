import { useEffect, useState } from 'react';
import Project from '../../types/project';
import { getProjects } from '../../util/getProjects';
import { Link } from 'react-router-dom';

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const getProgress = (project: Project) => {
  const { current_amount, goal_amount } = project;
  return Number((Number(current_amount) / Number(goal_amount)) * 100);
};

const getFundingState = (state: 'ongoing' | 'completed' | 'pending') => {
  const statusValue = {
    ongoing: '진행중',
    completed: '종료됨',
    pending: '심사중',
  };
  return statusValue[state];
};

const MyList = () => {

  const [projects, setProjects] = useState([]); // 초기값을 props로 설정

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch(console.error);
  }, []);

  if (projects.length === 0) {
    return <div className='container mx-auto my-10'>표시할 내용이 없습니다.</div>
  }

  return (
    <div className='container mx-auto'>
      {projects.map((project: Project) => {
        const progress = getProgress(project);

        return (
          <Link
            to={`/project/${project.project_id}`} // 클릭 시 /project/project_id로 이동
            key={project.project_id}
            className='border border-gray-200 rounded-lg shadow-lg mb-6 p-4 flex cursor-pointer'
          >
            <div className='flex-shrink-0 mr-6'>
              <h2 className='text-md font-bold'>{project.created_by}</h2>
              <img
                src={
                  // 'http://picsum.photos/100/' +
                  // Math.floor(90 + Math.random() * 10)
                  project.title_img
                }
                alt={project.title}
                className='object-cover'
                style={{ width: '150px', height: '150px' }}
              />
            </div>
            <div className='flex-grow'>
              <h3 className='text-2xl mt-4 font-semibold'>
                {project.title}
              </h3>
              <p className='text-gray-600 mt-2 my-2'>{project.type}</p>
              <p className='my-2'>
                <strong>{formatDate(project.start_date)}</strong> 부터{' '}
                <strong>{formatDate(project.end_date)}</strong> 까지
              </p>
              <p className='my-2 text-lg font-bold'>
                {getFundingState(project.status)}
              </p>

              {/* progress bar */}
              <div className='w-full bg-gray-300 rounded-full h-5 relative'>
                <div
                  className='bg-blue-500 h-5 rounded-full'
                  style={{ width: `${Math.min(progress, 100)}%` }}
                ></div>
                <span className='absolute inset-0 text-center text-white text-sm font-bold'>
                  {progress}%
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MyList;
