import Layout from '../components/common/Layout';
import Index from '../page';
import NotFound from '../page/NotFound';
import Signup from '../page/Signup';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Index />, index: true },
      { path: '/signup', element: <Signup/> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
