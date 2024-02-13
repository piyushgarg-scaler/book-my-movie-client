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
      <Route path="/" element={<h1>Hey {user?.firstName}</h1>} />
      <Route path="/signin" element={<SigninScreen />} />
      <Route path="/signup" element={<h1>Signup</h1>} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/movieById/:id" element={<MovieByIdPage />} />
    </Routes>
  );
}

export default App;
