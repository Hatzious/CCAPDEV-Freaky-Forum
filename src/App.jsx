import Contain from "./welcome/Contain.jsx";
import Circle from "./welcome/Circle.jsx";

export default function App() {
  return (
    <div className="bg-black min-h-dvh flex items-center justify-center relative">
      <Circle />
      <Contain />
    </div>
  );
}