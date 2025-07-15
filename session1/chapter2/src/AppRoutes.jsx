import { Route } from "react-router";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";

export const AppRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact/:email" element={<Contact />} />
    <Route path="projects" element={<Projects />} />
  </>
);

/* Another way 

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";

export const appRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact/:email",
    element: <Contact />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
];

import { useRoutes } from "react-router-dom";
import { appRoutes } from "./AppRoutes";

function App() {
  const routes = useRoutes(appRoutes);
  return routes;
}


*/
