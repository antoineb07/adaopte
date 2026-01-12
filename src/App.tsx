import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Volunteering from "./pages/Volunteering";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/research" element={<Research />} />
      <Route path="/volunteering" element={<Volunteering />} />
    </Routes>
  );
}

export default App;
