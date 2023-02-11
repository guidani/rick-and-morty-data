import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../app/Layout";
import { NotFound } from "../components/UI/NotFound";

const Characters = lazy(() => import("../app/characters/page"));
const Episodes = lazy(() => import("../app/episodes/page"));
const Locations = lazy(() => import("../app/locations/page"));
const Location = lazy(() => import("../app/location/page"));
const Search = lazy(() => import("../app/search_character/page"));
const Statistics = lazy(() => import("../app/statistics/page"));

// !TODO: atualizar imports para lazy loading
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index={true}
          element={
            <Suspense>
              <Characters />
            </Suspense>
          }
        />
        <Route
          path="search/:name"
          element={
            <Suspense>
              <Search />
            </Suspense>
          }
        />
        <Route
          path="locations"
          element={
            <Suspense>
              <Locations />
            </Suspense>
          }
        />

        <Route
          path="location/:id"
          element={
            <Suspense>
              <Location />
            </Suspense>
          }
        />
        <Route
          path="episodes"
          element={
            <Suspense>
              <Episodes />
            </Suspense>
          }
        />
        <Route
          path="statistics"
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
