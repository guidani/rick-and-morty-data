import { VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Layout = () => {
  return (
    <>
    <VStack>
      <Header />
      <Outlet />
      <Footer/>
    </VStack>
    </>
  );
};

export default Layout;
