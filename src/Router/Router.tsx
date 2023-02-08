import { Route, Routes } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Characters } from "../pages/Characters";
import { Episodes } from "../pages/Episodes";
import Layout from "../pages/Layout";
import { Locations } from "../pages/Locations";
import { Search } from "../pages/Search";
import { Statistics } from "../pages/Statistics";

// !TODO: atualizar imports para lazy loading
export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Characters />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
