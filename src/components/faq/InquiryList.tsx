import React, { useEffect, useState } from 'react';

interface Inquiry {
  title: string;
  content: string;
  date: string;
  reply?: string;
}

function InquiryList() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  useEffect(() => {
    const storedInquiries: Inquiry[] = JSON.parse(localStorage.getItem('inquiries') || '[]');
    setInquiries(storedInquiries);
  }, []);

  const addReply = (index: number, reply: string) => {
    const updatedInquiries = [...inquiries];
    updatedInquiries[index].reply = reply;
    setInquiries(updatedInquiries);
    localStorage.setItem('inquiries', JSON.stringify(updatedInquiries));
  };

  const editReply = (index: number, newReply: string) => {
    const updatedInquiries = [...inquiries];
    updatedInquiries[index].reply = newReply;
    setInquiries(updatedInquiries);
    localStorage.setItem('inquiries', JSON.stringify(updatedInquiries));
  };

  const deleteReply = (index: number) => {
    const updatedInquiries = [...inquiries];
    delete updatedInquiries[index].reply;
    setInquiries(updatedInquiries);
    localStorage.setItem('inquiries', JSON.stringify(updatedInquiries));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">문의 목록</h2>
      {inquiries.map((inquiry, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">{index + 1}. {inquiry.title}</h3>
          <p className="text-gray-600">{inquiry.content}</p>
          <small className="text-gray-500 block">{new Date(inquiry.date).toLocaleString()}</small>
          
          {inquiry.reply ? (
            <div className="bg-blue-50 p-4 rounded-md space-y-2">
              <h4 className="font-semibold text-blue-800">답변:</h4>
              <p className="text-blue-700">{inquiry.reply}</p>
              <div className="space-x-2">
                <button onClick={() => editReply(index, prompt('답변을 수정하세요:', inquiry.reply) || '')} className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300">수정</button>
                <button onClick={() => deleteReply(index)} className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300">삭제</button>
              </div>
            </div>
          ) : (
            <button onClick={() => addReply(index, prompt('답변을 입력하세요:') || '')} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">답변하기</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default InquiryList;