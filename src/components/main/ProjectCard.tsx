import React from 'react';

const ProjectCard = () => {
  return (
    <div className="border-[rgb(220,220,220)] border-2 w-[28%] h-[350px] rounded-md mt-10">
      <div className="border-b-[#dcdcdc] h-[80%] w-full relative">
        <span className="absolute bg-[#dcdcdc] px-2 py-1 top-0 left-0">
          {' '}
          {/* 왼쪽 상단에 위치하도록 수정 */}
          <p>굿즈</p>
        </span>
        <img
          className="w-full h-full object-cover rounded-t"
          src="https://i.namu.wiki/i/oU0avPQmlPv0p13BPnuEqyzmtGl9SoTArdKVYpb1r5CYXrpUjEqtiurvlFDjpXdOMyDXwIFYpz0x3PgtS92_8A.webp"
          alt=""
        />
      </div>
      <div className="h-[20%] w-full text-justify pt-2 px-2">
        <p className="text-h4 font-semibold">프로젝트</p>
        <p className="text-h4 font-semibold">펀딩 달성률 60%</p>
      </div>
    </div>
  );
};

export default ProjectCard;
