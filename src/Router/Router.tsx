import { Route, Routes } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Episodes } from "../pages/Episodes";
import { Home } from "../pages/Home";
import Layout from "../pages/Layout";
import { Locations } from "../pages/Locations";
import { Search } from "../pages/Search";

// !TODO: atualizar imports para lazy loading
export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
