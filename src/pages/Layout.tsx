import { HStack, VStack } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Layout = () => {
  return (
    <>
      <VStack>
        <Header />
        <HStack>
          <Link to="/">Personagens</Link>
          <Link to="/locations">Lugares</Link>
        </HStack>
        <Outlet />
        <Footer />
      </VStack>
    </>
  );
};

export default Layout;
