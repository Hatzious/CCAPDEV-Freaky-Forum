import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import Dread from "./Dread/Dread";
import Mainlayout from "./Contain/Mainlayout";
import Forum from "./Forum/Forum";
import PostView from "./PostView/PostView";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route element={<Mainlayout />}>
          <Route path="/dread" element={<Dread />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/postview" element={<PostView />} />
        </Route>
      </Routes>
    </Router>
  );
}
