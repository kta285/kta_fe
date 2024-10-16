import React, { useRef, useState } from 'react';
import CustomEditor from './CustomEditor';
import { projectWriteApi } from '../../api/requests/projectApi';
import { useNavigate } from 'react-router-dom';
import CustomDatePicker from '../common/datePicker';

const WriteForm = () => {
  const title = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const targetAmount = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState('');
  // eslint-disable-next-line
  const [content, setContent] = useState('');
  const [endDate, setEndDate] = useState(new Date());
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      title: title.current?.value || '',
      amount: targetAmount.current?.value || '',
      category: category,
      content: content,
      startDate: new Date(),
      endDate: endDate,
    };
    try {
      const res = await projectWriteApi({ body: body });
      // res가 배열인지 체크
      if (Array.isArray(res)) {
        console.error('API 요청 중 에러가 발생했습니다.');
      } else if (res.status === 200) {
        // res.data.message가 존재할 때 처리할 로직
        console.log(res.data.message);
        navigate('/project');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='w-[70%] mx-auto min-h-[650px] p-6'>
      <form
        className='bg-white rounded-lg shadow-md p-8 space-y-6'
        onSubmit={(e) => submit(e)}
      >
        <h2 className='text-2xl font-bold text-gray-800 text-center mb-4'>
          프로젝트 작성
        </h2>

        <div className='w-full'>
          <label
            htmlFor='title'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            제목
          </label>
          <input
            type='text'
            ref={title}
            className='border border-gray-300 rounded-md p-3  w-[80%]  focus:outline-none focus:ring-2 focus:ring-blue-400'
            placeholder='제목을 입력하세요'
          />
        </div>

        <div className='w-full'>
          <label
            htmlFor='targetAmount'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            목표금액
          </label>
          <input
            type='text'
            ref={targetAmount}
            className='border border-gray-300 rounded-md p-3  w-[80%]  focus:outline-none focus:ring-2 focus:ring-blue-400'
            placeholder='목표금액을 입력하세요'
          />
        </div>

        <div className='w-full'>
          <label
            htmlFor='category'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            카테고리
          </label>
          <select
            id='category'
            value={category}
            onChange={handleCategoryChange}
            className='border border-gray-300 rounded-md p-3 w-[80%] focus:outline-none focus:ring-2 focus:ring-blue-400'
          >
            <option value=''>카테고리를 선택하세요</option>
            <option value='goods'>굿즈</option>
            <option value='event'>이벤트</option>
            <option value='promotion'>프로모션</option>
            <option value='etc'>기타</option>
          </select>
        </div>
        <div className='w-full mx-auto'>
          <label
            htmlFor='endDate'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            마감일
          </label>
          <CustomDatePicker startDate={endDate} setStartDate={setEndDate} />
        </div>
        <CustomEditor content={content} setContent={setContent} />
        <div className='text-center'>
          <button
            type='submit'
            className='bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200'
          >
            제출하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default WriteForm;
