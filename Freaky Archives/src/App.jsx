import Navbar from "./Global/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1 style={{color: 'white', fontSize: '50px'}}>I AM ALIVE</h1>} />
      </Routes>
    </Router>
  );
}
