import { ProjectDetail } from '../../types/project';
import { calculatePercentage } from '../../util/calculatePercentage';
import ProgressBar from '../common/ProgressBar';
import DetailHead from './DetailHead';

const Detail = ({ data }: ProjectDetail) => {
  const percentage = calculatePercentage(
    Number(data && data.goal_amount),
    data && data.current_amount
  );

  return (
    <div className='min-h-[600px] w-full'>
      {data && <DetailHead data={data} percentage={percentage} />}

      <div className='flex  w-[70%] mx-auto min-h-[500px] justify-between'>
        <div className='w-[63%]   min-h-[500px] h-auto'>
          <div
            dangerouslySetInnerHTML={{ __html: data && data.description }}
            className='pb-7 [&_img]:w-full'
          />
        </div>
        <div className='w-[35%]  relative'>
          <div className='fixed top-[500px] left-1/5 border w-[24%] h-[150px] rounded-md py-[10px] px-[15px] text-start'>
            <p className='text-h2 font-bold'>펀딩 달성률</p>
            <ProgressBar width={percentage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
