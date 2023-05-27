
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Layout from "./layout/Layout";

function App() {

  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/" element={<Layout />} >
          <Route index path="/" element={<Home />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
