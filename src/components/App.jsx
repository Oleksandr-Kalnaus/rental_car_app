import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.js";
import Loader from "./Loader/Loader.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage.jsx"));
const CarDetailsPage = lazy(() =>
  import("../pages/CarDetailsPage/CarDetailsPage.jsx")
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="cars/:id" element={<CarDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
