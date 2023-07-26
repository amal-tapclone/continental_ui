import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Index from "./Pages/Index";
import About from "./Pages/About";
import Migrate from "./Pages/Migrate";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Index />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Migrate />} path="/migrate" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
