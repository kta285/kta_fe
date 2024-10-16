import React from 'react';

interface ProgressBarProps {
  width: number; // 진행률을 퍼센트로 설정
}

const ProgressBar: React.FC<ProgressBarProps> = ({ width }) => {
  return (
    <div className='flex flex-col items-center mt-5'>
      <div className='w-full h-[30px] bg-[#5a92c6] rounded-lg relative'>
        <div
          className='h-full bg-[#1F5587] rounded-lg transition-all duration-300 ease-in-out'
          style={{ width: `${width}%` }} // width에 따라 진행률 표시
        />
        <span
          className='absolute top-[28%] transform -translate-x-1/2 text-xs text-white'
          style={{ left: `${width - 5}%` }} // width에 따라 위치 조정
        >
          {width}%
        </span>
      </div>
      <div className='flex justify-between w-full mt-1'>
        <span className='text-xs text-[#1F5587]'>0%</span>
        <span className='text-xs text-[#1F5587]'>100%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
