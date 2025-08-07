import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This renders the matched child route */}
      </main>
      <Footer />
    </>
  );
};
