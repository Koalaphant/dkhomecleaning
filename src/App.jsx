import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import NavBar from "./Components/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
