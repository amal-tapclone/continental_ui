import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Index from "./Pages/Index";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Index />} path="/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
