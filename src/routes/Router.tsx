import Layout from '../components/common/Layout';
import Index from '../page';
import NotFound from '../page/NotFound';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Index />, index: true },
      { path: '*', element: <NotFound /> },
    ],
  },
];
