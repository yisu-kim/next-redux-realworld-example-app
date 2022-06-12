import Header from './header';
import Footer from './footer';
import { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
