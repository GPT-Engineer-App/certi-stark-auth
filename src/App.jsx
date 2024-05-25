import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Lore from "./pages/Lore.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/lore" element={<Lore />} />
      </Routes>
    </Router>
  );
}

export default App;
