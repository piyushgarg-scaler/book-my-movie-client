import { Routes, Route } from "react-router-dom";
import "./App.css";

import SigninScreen from "./screens/signin";
import { useCurrentUser } from "./hooks/query/user";
import AdminPage from "./screens/admin";
import HomePage from "./screens/HomePage";
import MovieByIdPage from "./screens/HomePage/MovieByIdPage";

function App() {
  const { user } = useCurrentUser();

  console.log("Current user", user?.firstName);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieByIdPage />} />
      <Route path="/signin" element={<SigninScreen />} />
      <Route path="/signup" element={<h1>Signup</h1>} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
