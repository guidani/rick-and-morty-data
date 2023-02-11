import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import Layout from "../pages/Layout";

const Characters = lazy(() => import("../pages/Characters"));
const Episodes = lazy(() => import("../pages/Episodes"));
const Locations = lazy(() => import("../pages/Locations"));
const Search = lazy(() => import("../pages/Search"));
const Statistics = lazy(() => import("../pages/Statistics"));

// !TODO: atualizar imports para lazy loading
export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <Suspense>
              <Characters />
            </Suspense>
          }
        />
        <Route
          path="/search/:name"
          element={
            <Suspense>
              <Search />
            </Suspense>
          }
        />
        <Route
          path="/locations"
          element={
            <Suspense>
              <Locations />
            </Suspense>
          }
        />
        <Route
          path="/episodes"
          element={
            <Suspense>
              <Episodes />
            </Suspense>
          }
        />
        <Route
          path="/statistics"
          element={
            <Suspense>
              <Statistics />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
