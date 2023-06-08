
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Hotel from "./pages/Hotel";
import Agency from "./pages/Agency";
import Branches from "./pages/Branches";

function App() {

  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/" element={<Layout />} >
          <Route index path="/" element={<Home />} />
          <Route index path="/hotel" element={<Hotel />} />
          <Route index path="/agency" element={<Agency />} />
          <Route index path="/branches" element={<Branches />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
