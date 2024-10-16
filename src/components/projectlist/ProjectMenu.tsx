interface ProjectMenuProps {
    setSelectedType: (type: string) => void; // 타입 정의
}

const ProjectMenu = ({ setSelectedType }: ProjectMenuProps) => {
    return (<nav className="flex justify-center space-x-10">
        <a onClick={() => setSelectedType("all")} className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">all</a>
        <a onClick={() => setSelectedType("promotion")} className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">promotion</a>
        <a onClick={() => setSelectedType("event")} className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">event</a>
        <a onClick={() => setSelectedType("goods")} className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">goods</a>
    </nav>)
};

export default ProjectMenu;

