import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import useDark from "../hooks/useDark";

export default function App() {
  const [isDark, setIsDark] = useDark();
  return (
    <div className={`${isDark === true ? "dark" : ""}`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Outlet />
    </div>
  );
}
