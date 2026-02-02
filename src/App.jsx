import WelcomePage from "./page-welcome/WelcomePage.jsx";
import LoginPage from "./page-login/LoginPage.jsx";

export default function App() {
  return (
    // <WelcomePage />
    <LoginPage />

    // Routing DOESNT WORK yet so ill commenting this out
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<WelcomePage />} />
    //     <Route path="/login" element={<LoginPage />} />
    //   </Routes>
    // </Router>
  );
}