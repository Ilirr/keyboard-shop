import { Route, Routes } from "react-router-dom";

import { RoutePaths } from "./RoutePaths.jsx";
import { Home } from "../home/Home.jsx";
import { NotFound } from "./NotFound.jsx";
import { Layout } from "./Layout.jsx";
import { ProductPage } from "../components/ProductPage.jsx";
import { About } from "../components/About.jsx";



export const Router = () => (
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
  </Routes>
);
