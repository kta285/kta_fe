import React from 'react';

const ProjectMenu = () => {
    return (<nav className="flex justify-center space-x-10">
        <a href="/" className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">콘서트</a>
        <a href="/" className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">사인회</a>
        <a href="/" className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">굿즈</a>
        <a href="/" className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">기타</a>
    </nav>)
};

export default ProjectMenu;
