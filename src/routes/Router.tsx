import Layout from '../components/common/Layout';
import Index from '../page';
import Login from '../page/Login';
import NotFound from '../page/NotFound';
import Signup from '../page/Signup';
import Project from '../page/Project';
import MyPage from '../page/MyPage';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Index />, index: true },
      { path: '/signup', element: <Signup /> },
      { path: '/login', element: <Login /> },
      { path: '/project', element: <Project /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
