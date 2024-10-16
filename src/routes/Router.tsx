import Layout from '../components/common/Layout';
import Index from '../page';
import Faq from '../page/Faq';
import MyPage from '../page/MyPage';
import NotFound from '../page/NotFound';
import ProjectDetail from '../page/ProjectDetail';
import Projects from '../page/Projects';
import Write from '../page/Write';
import InquiryList from '../components/faq/InquiryList';
import MyList from '../components/mypage/MyList';
import Signup from '../page/Signup';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Index />, index: true },
      { path: '/signup', element: <Signup /> },
      { path: '/projects', element: <Projects /> },
      { path: '/projects/:type', element: <Projects /> },
      { path: '/project/:id', element: <ProjectDetail /> },
      { path: '/write', element: <Write /> },
      {
        path: '/mypage',
        element: <MyPage />,
        children: [
          { path: '', element: <MyList />, index: true },
          { path: 'my', element: <MyList /> },
          { path: 'funding', element: <MyList /> },
          { path: 'inquiry', element: <InquiryList /> },
        ],
      },
      { path: '/faq', element: <Faq /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
