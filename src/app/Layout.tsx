import { Outlet } from "react-router-dom";
import { LargeNavigation } from "../components/UI/LargeNavigation";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <LargeNavigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
