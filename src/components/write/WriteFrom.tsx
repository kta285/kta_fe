import React, { useRef, useState } from 'react';
import CustomEditor from './CustomEditor';
import CustomDatePicker from '../common/datePicker';

const WriteForm = () => {
  const title = useRef(null);
  const targetAmount = useRef(null);
  const [category, setCategory] = useState('');
  // eslint-disable-next-line
  const [content, setContent] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <div className="w-[70%] mx-auto min-h-[650px] p-6">
      <form className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          프로젝트 작성
        </h2>

        <div className="w-full">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            제목
          </label>
          <input
            type="text"
            ref={title}
            className="border border-gray-300 rounded-md p-3  w-[80%]  focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="제목을 입력하세요"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="targetAmount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            목표금액
          </label>
          <input
            type="text"
            ref={targetAmount}
            className="border border-gray-300 rounded-md p-3  w-[80%]  focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="목표금액을 입력하세요"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            카테고리
          </label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="border border-gray-300 rounded-md p-3 w-[80%] focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">카테고리를 선택하세요</option>
            <option value="goods">굿즈</option>
            <option value="event">이벤트</option>
            <option value="promotion">프로모션</option>
            <option value="etc">기타</option>
          </select>
        </div>
        <div className="w-full mx-auto">
          <CustomDatePicker startDate={startDate} setStartDate={setStartDate} />
        </div>
        <CustomEditor />
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            제출하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default WriteForm;
