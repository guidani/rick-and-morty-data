import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LargeNavigation } from "../components/LargeNavigation";

// TODO: Adicionar Drawer para a navegação mobile.
const Layout = () => {
  return (
    <>
      <Header />
      <LargeNavigation/>
      
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
