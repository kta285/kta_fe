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
      { path: '/projects', element: <Projects /> },
      { path: '/projects/:type', element: <Projects /> },
      { path: '/write', element: <Write /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/faq', element: <Faq /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
