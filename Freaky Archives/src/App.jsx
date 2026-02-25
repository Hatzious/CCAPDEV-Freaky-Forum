import Navbar from "./Global/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import Dread from "./Dread/Dread";
import Mainlayout from "./Contain/Mainlayout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route element={<Mainlayout />}>
          <Route path="/dread" element={<Dread />} />
        </Route>
      </Routes>
    </Router>
  );
}
