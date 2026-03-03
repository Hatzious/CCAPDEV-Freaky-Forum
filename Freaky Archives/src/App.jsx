import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import Login from "./login/login";
import Dread from "./Dread/Dread";
import Mainlayout from "./Contain/Mainlayout";
import Forum from "./Forum/Forum";
import PostView from "./PostView/PostView";
import Settings from "./Settings/Settings";
import { AuthProvider } from "./Services/Auth";
import Account from "./Account/Account";
import Register from "./Register/Register";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<Mainlayout />}>
            <Route path="/dread" element={<Dread />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/postview" element={<PostView />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/account" element={<Account />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
