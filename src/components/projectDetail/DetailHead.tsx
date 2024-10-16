import Button from '../common/Button';
import { DetailProps } from '../../types/project';
import { calculateDaysLeft } from '../../util/calculateDaysLeft';
import { formatAmount } from '../../util/formatAmount';

interface detailProps {
  data: DetailProps;
  percentage: number;
}

const DetailHead = ({ data, percentage }: detailProps) => {
  const handleCopy = async () => {
    const url = window.location.href; // 현재 페이지의 URL을 가져옴
    try {
      await navigator.clipboard.writeText(url); // URL을 클립보드에 복사
      console.log('URL이 클립보드에 복사되었습니다.');
      alert('링크가 클립보드에 복사되었습니다!'); // 사용자에게 알림
    } catch (error) {
      console.error('복사 중 오류 발생:', error);
    }
  };
  const dDay = calculateDaysLeft(data.start_date, data.end_date);
  const goalAmount = formatAmount(data.goal_amount);

  return (
    <div className='w-full bg-[#fcfcfc] h-[400px] pt-3'>
      <div className='w-[70%]  mx-auto h-[350px] flex'>
        <div className='w-[50%] h-[200px] p-[20px] '>
          <div className='border w-[700px] h-[350px] mx-auto rounded-md'></div>
        </div>
        <div className='w-[50%] h-[200px] py-[20px] flex flex-col pl-[80px]'>
          <div className='flex flex-row justify-start mb-[10px]'>
            <span className='px-[10px] py-10px bg-gray400 text-[#ffffff] font-semibold'>
              {data.type}
            </span>
          </div>
          <div className='border-b text-start pb-[10px]'>
            <p className='text-h1 font-bold'>{data.title}</p>
          </div>
          <div className='text-start mt-[20px]'>
            <p className='text-h2 font-medium'>
              목표금액: {goalAmount}원
              <span className='bg-[#062E54] text-[#ffffff] text-h4 mx-[3px]  px-[8px] rounded-lg relative bottom-[2px]'>
                50%
              </span>
            </p>
          </div>
          <div className='text-start mt-[30px]'>
            <p className='text-h2 font-medium'>
              종료일:{' '}
              {data.end_date &&
                new Date(data.end_date).toISOString().split('T')[0]}
              <span className='bg-[#E8B605] text-[#ffffff] text-h4 mx-[4px]  px-[8px] rounded-lg relative bottom-[2px]'>
                D-{dDay <= 1 ? 'Day' : dDay}
              </span>
            </p>
          </div>
          <div className='flex justify-start mt-[30px]'>
            <button
              className='border-2 w-[60px] h-[50px] relative top-[20px] rounded-lg mr-[20px]'
              onClick={handleCopy}
            >
              <svg
                aria-hidden='true'
                fill='currentColor'
                focusable='false'
                height='30'
                preserveAspectRatio='xMidYMid meet'
                viewBox='0 0 24 24'
                width='30'
                className='mx-auto'
              >
                <path
                  d='M18 9.35278C19.6569 9.35278 21 8.00964 21 6.35278C21 4.69593 19.6569 3.35278 18 3.35278C16.3431 3.35278 15 4.69593 15 6.35278C15 6.51444 15.0128 6.6731 15.0374 6.82783L8.15718 10.2679C7.6117 9.70365 6.84683 9.35278 6 9.35278C4.34315 9.35278 3 10.6959 3 12.3528C3 14.0096 4.34315 15.3528 6 15.3528C6.84683 15.3528 7.61171 15.0019 8.1572 14.4376L15.0374 17.8777C15.0128 18.0324 15 18.1911 15 18.3528C15 20.0096 16.3431 21.3528 18 21.3528C19.6569 21.3528 21 20.0096 21 18.3528C21 16.6959 19.6569 15.3528 18 15.3528C17.1532 15.3528 16.3883 15.7037 15.8428 16.268L8.9626 12.8279C8.98721 12.6731 9 12.5144 9 12.3528C9 12.1911 8.98721 12.0324 8.96259 11.8777L15.8428 8.4376C16.3883 9.0019 17.1532 9.35278 18 9.35278Z'
                  xmlns='http://www.w3.org/2000/svg'
                ></path>
              </svg>
            </button>

            <Button
              text={'Support'}
              styles={
                'rounded-lg bg-[#000] text-[#ffffff] h-[50px] mt-[20px] w-[140px]'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHead;
