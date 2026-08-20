import "./App.css";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <AppRoutes />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;
