import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import Questions from "./pages/Questions/index.tsx";
import { Mypage } from "./pages/Mypage/index.tsx";
import { Login } from "./pages/Login/index.tsx";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
