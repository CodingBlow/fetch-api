import "../src/Style/Contact.scss";
import "../src/Style/Header.scss";
import "../src/Style/Home.scss";
import "../src/Style/Loader.scss";
import "../src/Style/Author.scss";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Author from "./Components/Author";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/author" element={<Author />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
