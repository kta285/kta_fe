import React from 'react';
import ProjectCard from './ProjectCard';
import Button from '../common/Button';


const MainProject = () => {
  return (
    <div className="h-[900px] w-[70%] mx-auto ">
      <div className="flex justify-between w-full flex-wrap h-[800px]">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <React.Fragment key={item}>
              <ProjectCard />
            </React.Fragment>
          );
        })}
      </div>
      <Button
        text={'모든프로젝트보기'}
        styles={
          'rounded-md bg-[#000] text-[#ffffff] h-[50px] mt-[20px] w-[140px]'
        }
      />
    </div>
  );
};

export default MainProject;
