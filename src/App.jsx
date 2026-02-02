import Contain from "./page-welcome/Contain.jsx";
import Circle from "./page-welcome/Circle.jsx";

export default function App() {
  return (
    <div className="bg-black min-h-dvh flex items-center justify-center relative">
      <Circle />
      <Contain />
    </div>
  );
}