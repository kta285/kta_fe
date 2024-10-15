
// import React, { useEffect, useState } from "react";
// import axios from "axios";

const MyInfo = () => {
    const userInfo =
    {
        username: "까미",
        email: "dog@bow.wow",
        password: 1234,
        user_type: "fan",
        created_at: "2024-10-11 15:10:01"
    };

    const userTypeToKor = (userType: "fan" | "influencer" | "admin") => {
        const types = { fan: "팬", influencer: "인플루언서", admin: "관리자" };

        return types[userType];
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더함
        const day = String(date.getDate()).padStart(2, '0'); // 일자가 한 자리일 때 앞에 0을 붙임
        return `${year}-${month}-${day}`;
    };
    //   const [userInfo, setUserInfo] = useState(null);

    //   useEffect(() => {
    //     // 서버에서 유저 정보를 가져오는 부분 (비밀번호 제외)
    //     axios.get("/api/user-info") // 실제 서버 엔드포인트로 교체 필요
    //       .then(response => {
    //         setUserInfo(response.data); // 유저 정보를 상태에 저장
    //       })
    //       .catch(error => {
    //         console.error("Error fetching user info:", error);
    //       });
    //   }, []);

    if (!userInfo) {
        return <div>Loading...</div>; // 데이터가 아직 없을 때 로딩 메시지
    }

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10 mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-3">{userInfo.username}님, 반가워요!</h1>
            <p><strong>{userInfo.username}</strong>님은 저희의 소중한 <strong>{userTypeToKor(userInfo.user_type as "fan" | "influencer" | "admin")}</strong>입니다.</p>
            <div className="space-y-2">
                <p className="my-4">{userInfo.email}</p>
                <p><strong>{formatDate(userInfo.created_at)}</strong>부터 함께 하고 있어요.</p>
            </div>
            <div className="space-y-4 mt-3">
                <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded hover:bg-blue-600 transition duration-300">
                    회원정보 수정
                </button>
                <button className="bg-green-500 text-white px-4 py-2 mx-2 rounded hover:bg-green-600 transition duration-300">
                    로그아웃
                </button>
            </div>
        </div>
    );
};

export default MyInfo;