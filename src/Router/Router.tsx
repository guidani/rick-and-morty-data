import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import Layout from "../pages/Layout";
import { Search } from "../pages/Search";
export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search/:name" element={<Search />} />
      </Route>
    </Routes>
  );
};
