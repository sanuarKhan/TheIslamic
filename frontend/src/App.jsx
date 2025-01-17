import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Quran from "./pages/Quran";
import Admin from "./pages/Admin";
import AddVerse from "./pages/AddVerse";
import Recite from "./pages/Recite";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { handleRegister } from "./utils/handleRegister";
import { handleLogin } from "./utils/handleLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/quran" element={<Quran />} />
          <Route path="/quran/add" element={<AddVerse />} />
          <Route path="/quran/recite" element={<Recite />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="register"
            element={<Register onRegister={handleRegister} />}
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
