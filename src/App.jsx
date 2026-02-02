import Contain from "./page-welcome/Contain.jsx";
import Circle from "./page-welcome/Circle.jsx";
import Background from "./page-welcome/Background.jsx";

export default function App() {
  return (
    <div className="min-h-dvh flex items-center justify-center relative">
      <Background />
      <Circle />
      <Contain />
    </div>
  );
}