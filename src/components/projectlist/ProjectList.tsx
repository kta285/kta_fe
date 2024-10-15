
import React from 'react';

// 프로젝트의 타입 정의
interface Project {
    project_id: number;
    title: string;
    description: string;
    created_by: string;
    imageUrl: string;
    goal_amount: number;
    current_amount: number;
    status: any;
    start_date: string;
    end_date: string;
}

interface ProjectListProps {
    projects: Project[];
}

const getGoalPercent = (goal: any, current: any) => {
    return Number((Number(current) / Number(goal)) * 100) + "%"
}


const getFundingState = (state: "ongoing" | "completed" | "pending") => {
    const statusValue = {
        ongoing: "진행중",
        completed: "종료됨",
        pending: "심사중",
    };
    return statusValue[state];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {

    return (<div className="container mx-auto p-6">
        {projects.map((project: any) => (
            <div
                key={project.project_id}
                className="border border-gray-200 rounded-lg shadow-lg mb-6 p-4 flex cursor-pointer"
            // 항목 클릭 시 상세 페이지로 이동
            >
                <div className="flex-shrink-0 mr-6">
                    <h2 className="text-md font-bold">{project.created_by}</h2>
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-30 h-30 rounded-full object-cover"
                    />
                </div>
                <div className="flex-grow">
                    <h3 className="text-2xl mt-4 font-semibold">
                        {project.title}{" "}

                    </h3>
                    <p className="text-gray-600 mt-2 my-2">
                        {project.description.length > 50
                            ? `${project.description.substring(0, 50)}...`
                            : project.description}
                    </p>
                    <p>
                        <strong>{project.start_date}</strong> 부터 <strong>{project.end_date}</strong> 까지
                    </p>
                    <p>
                        <h2 className="text-md font-bold">
                            달성률 {getGoalPercent(project.goal_amount, project.current_amount)}
                        </h2>
                            ({getFundingState(project.status as "ongoing" | "completed" | "pending")})
                    </p>

                    {/* 태그 관련 로직(실험) */}
                    {/* <div className="flex flex-wrap mt-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs text-green-600 bg-green-100 rounded-full px-2 py-1 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div> */}
                </div>
            </div>
        ))}
    </div>)
}

export default ProjectList;