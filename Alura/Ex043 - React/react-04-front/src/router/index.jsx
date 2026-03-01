import { BrowserRouter, Route, Routes } from "react-router";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { AppLayout } from "../layouts/App";
import { AuthLayout } from "../layouts/Auth";
import { BlogPost } from "../pages/BlogPost";
import { Feed } from "../pages/Feed";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { NotFound } from "../pages/NotFound";
import { Register } from "../pages/Register";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={<Feed />} />
          <Route
            path="blog-post/:slug"
            element={
              <ProtectedRoute>
                <BlogPost />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
