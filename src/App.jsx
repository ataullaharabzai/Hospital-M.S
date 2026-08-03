import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Dashboard from "./pages/Dashboard";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
