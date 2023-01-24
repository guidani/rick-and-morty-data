import { Route, Routes } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Home } from "../pages/Home";
import Layout from "../pages/Layout";
import { Locations } from "../pages/Locations";
import { Search } from "../pages/Search";
export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
