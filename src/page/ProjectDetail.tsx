import { useEffect, useState } from 'react';
import Detail from '../components/projectDetail/Detail';
import { projectDetailApi } from '../api/requests/projectApi';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const [detail, setDetail] = useState<any>([]);
  const { id } = useParams();
  // 이미지 데이터 가져오는 함수
  useEffect(() => {
    const fetchData = async () => {
      const data = await projectDetailApi(id as string); // 이미지 데이터 가져오기
      setDetail(data[0]); // 상태 업데이트
    };
    fetchData();
  }, [id]);

  return <Detail data={detail} />;
};

export default ProjectDetail;
