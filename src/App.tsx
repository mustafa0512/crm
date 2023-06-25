
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Hotel from "./pages/Hotel";
import Agency from "./pages/Agency";
import Branches from "./pages/Branches";
import AddClient from "./pages/AddClient";
import AddHotel from "./pages/AddHotel";
import AddAgency from "./pages/AddAgency";
import AddBranch from "./pages/AddBranch";
import Map from "./pages/Map";
import BLog from "./pages/BLog";
import ColumnHome from "./pages/ColumnHome";
import EditClient from "./pages/EditClient";
import EditHotel from "./pages/EditHotel";

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
          <Route index path="/addclient" element={<AddClient />} />
          <Route index path="/addhotel" element={<AddHotel />} />
          <Route index path="/addagency" element={<AddAgency />} />
          <Route index path="/addbranches" element={<AddBranch />} />
          <Route index path="/map" element={<Map />} />
          <Route index path="/blog" element={<BLog />} />
          <Route index path="/column" element={<ColumnHome />} />
          <Route index path="/editclient/:id" element={<EditClient />} />
          <Route index path="/edithotel/:id" element={<EditHotel />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
