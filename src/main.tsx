import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout />
    {/* <createRoot></createRoot> */}
  </BrowserRouter>,
);
