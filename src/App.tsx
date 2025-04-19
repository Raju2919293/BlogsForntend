import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoutes";
import Register from "./pages/Register";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
      </Route>

    </Routes> 
  );
}
