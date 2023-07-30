import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Index from "./Pages/Index";
import About from "./Pages/About";
import Migrate from "./Pages/Migrate";
import Contact from "./Pages/Contact";
import Countries from "./Pages/Countries";
import Blogs from "./Pages/Blogs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Index />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Migrate />} path="/migrate" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Countries />} path="/country/:countryName" />
          <Route element={<Blogs />} path="/blogs" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
