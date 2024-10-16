import React from 'react';
import Project from '../../types/project';

export interface ProjectListProps {
  projects: Project[];
}

function formatDate(dateString: string) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
  const day = String(date.getDate()).padStart(2, '0');

  // 시, 분 필요 시
  // const hours = String(date.getHours()).padStart(2, '0');
  // const minutes = String(date.getMinutes()).padStart(2, '0');
  // return `${year}-${month}-${day} ${hours}:${minutes}`;
  return `${year}-${month}-${day}`;
}

const getProgress = (project: Project) => {
  const { current_amount, goal_amount } = project;
  return Number((Number(current_amount) / Number(goal_amount)) * 100);
};

// 펀딩 상태 한글로 변환
const getFundingState = (state: 'ongoing' | 'completed' | 'pending') => {
  const statusValue = {
    ongoing: '진행중',
    completed: '종료됨',
    pending: '심사중',
  };
  return statusValue[state];
};

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <>
      <div className='container mx-auto'>
        {projects.map((project: Project) => {
          const progress = getProgress(project);

          return (
            <div
              key={project.project_id}
              className='border border-gray-200 rounded-lg shadow-lg mb-6 p-4 flex cursor-pointer'
              // 항목 클릭 시 상세 페이지로 이동
            >
              <div className='flex-shrink-0 mr-6'>
                <h2 className='text-md font-bold'>{project.created_by}</h2>
                <img
                  src={
                    'http://picsum.photos/100/' +
                    Math.floor(90 + Math.random() * 10)
                  }
                  alt={project.title}
                  className='w-30 h-30 rounded-full object-cover'
                />
              </div>
              <div className='flex-grow'>
                <h3 className='text-2xl mt-4 font-semibold'>
                  {project.title}{' '}
                </h3>
                <p className='text-gray-600 mt-2 my-2'>
                  {/* {project.description.length > 50
                            ? `${project.description.substring(0, 50)}...`
                            : project.description} */}
                  {project.type}
                </p>
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
                {/* 태그 관련 로직(실험) */}
                {/* <div className="flex flex-wrap mt-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs text-green-600 bg-green-100 rounded-full px-2 py-1 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectList;
