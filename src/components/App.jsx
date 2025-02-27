import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import Layout from "./Layout/Layout.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage.jsx"));
const CarDetailsPage = lazy(() =>
  import("../pages/CarDetailsPage/CarDetailsPage.jsx")
);

function App() {
  return (
    <Suspense fallback={<CircleLoader color="#e3b800" />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="cars/:id" element={<CarDetailsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
