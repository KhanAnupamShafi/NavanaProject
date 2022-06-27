import "./App.css";
import Navigations from "./components/Navigations/Navigations";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout1 from "./components/Layout1/Layout1";
import Layout2 from "./components/Layout2/Layout2";
import Layout3 from "./components/Layout3/Layout3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigations />}>
        <Route index element={<Layout1 />} />
        <Route path="layout1" element={<Layout1 />} />
        <Route path="layout2" element={<Layout2 />} />
        <Route path="layout3" element={<Layout3 />} />
      </Route>
      {/* <Navigations /> */}
    </Routes>
  );
}

export default App;
