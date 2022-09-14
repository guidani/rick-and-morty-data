import { VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

const Layout = () => {
  return (
    <>
    <VStack>
      <Header />
      <Outlet />
    </VStack>
    </>
  );
};

export default Layout;
