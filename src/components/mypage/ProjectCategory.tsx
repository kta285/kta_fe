
import React from 'react';

const ProjectCategory = () => {
    return (<nav className="flex justify-center space-x-10">
        <a href="/" className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">내 프로젝트</a>
        <a href="/" className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">펀딩한 프로젝트</a>
        <a href="/" className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">찜한 프로젝트</a>
        <a href="/" className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">1:1 문의내역</a>
    </nav>)
};


export default ProjectCategory;