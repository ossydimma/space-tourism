import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Destination from "./pages/Destination";
import Author from "./pages/Author";
import Technology from "./pages/Technology";
import Mistake from "./pages/Mistake";

function App() {
  return (
    <>
     <Routes>
          <Route path="/"  element= { <Home/>}/>
          <Route path="/Destination" element={<Destination /> }/>
          <Route path="/Author" element={<Author/>}/>
          <Route path="/Technology" element={<Technology /> }/>
          <Route path="/*" element={<Mistake/> }/>
      </Routes>
    </>
  )
}

export default App
