import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<>로딩중...</>}>
        <Header />

        <Outlet />

        <Footer />
      </Suspense>
    </div>
  );
};

export default Layout;
