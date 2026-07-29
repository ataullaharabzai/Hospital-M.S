import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Dashboard from "./pages/Dashboard";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="flex gap-5">
        <Dashboard />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
