import { Route } from "react-router";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./components/Layout";


export const AppRoutes = (
  <>
    <Route  path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      {/* Add more routes here */}
      <Route path="*" element={<NotFound />} />
    </Route>
  </>
);