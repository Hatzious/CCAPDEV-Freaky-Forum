import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import Login from "./Login/Login";
import NewPassword from "./Login/NewPassword";
import Dread from "./Dread/Dread";
import Mainlayout from "./Contain/Mainlayout";
import Forum from "./Forum/Forum";
import Search from "./Search/Search";
import About from "./About/About";
import PostView from "./PostView/PostView";
import Settings from "./Settings/Settings";
import Account from "./Account/Account";
import Register from "./Register/Register";
import Post from "./Post/CreatePost";
import Music from "./Global/Music";
import EyesBackground from "./Global/EyesBackground";
import Cursor from "./Global/Cursor";

export default function App() {
  return ( 
    <>
      <Cursor />
      <Music />
      <Router>
        <EyesBackground />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/dread" element={<Dread />} />

          <Route element={<Mainlayout />}>        
            <Route path="/forum" element={<Forum />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/postview/:id" element={<PostView />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/account/:username" element={<Account />} />
            <Route path="/createpost" element={<Post />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
