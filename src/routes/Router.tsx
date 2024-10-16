import Layout from '../components/common/Layout';
import Index from '../page';
import Faq from '../page/Faq';
import MyPage from '../page/MyPage';
import NotFound from '../page/NotFound';
import Signup from '../page/Signup';
import Projects from '../page/Projects';

import Write from '../page/Write';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Index />, index: true },
      { path: '/signup', element: <Signup /> },
      { path: '/project', element: <Projects /> },
      { path: '/write', element: <Write /> },
      { path: '/signup', element: <Signup /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/faq', element: <Faq /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
