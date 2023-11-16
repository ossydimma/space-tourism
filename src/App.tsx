import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Destination from "./pages/Destination";
import Author from "./pages/Author";
import Technology from "./pages/Technology";
import Mistake from "./pages/Mistake";
import data from "../src/data.json";
import { useState, Dispatch, SetStateAction } from "react";
interface addActiveType {
  list1: string
  list2: string
  list3: string
  list4?: string
} 
interface selectedObjectType {
  
    name: string;
    images: {
      png: string;
      webp: string;
    };
    description?: string;
    distance?: string;
    travel?: string;
    role?: string;
    bio?: string;
  }
//   setSelectedObject: Dispatch<SetStateAction<{
//     name: string;
//     images: {
//       png: string;
//       webp: string;
//     };
//     description?: string;
//     distance?: string;
//     travel?: string;
//     role?: string;
//     bio?: string;
//   }>>;
// }

function App() {
  const [addActive, setAddActive] = useState({
    list1: "active",
    list2: "",
    list3: "",
    list4: "",
   });
const [selectedObject, setSelectedObject] = useState<selectedObjectType>(data.destinations[0])

  const handleClick = (type: string, location: string): void => {

    switch (type) {
      case "moon":
        // fix here 
        location === "distination" ? setSelectedObject(data.destinations[0]): setSelectedObject(data.crew[0])
        setAddActive({list1: 'active', list2: '',list3: '', list4: ""})
        break;
      case "mars":
        location === "distination" ? setSelectedObject(data.destinations[1]): setSelectedObject(data.crew[1])
        setAddActive({list1: '', list2: 'active',list3: '', list4: ""})
        
        break;
      case "europa":
        location === "distination" ? setSelectedObject(data.destinations[2]): setSelectedObject(data.crew[2])
        setAddActive({list1: '', list2: '',list3: 'active', list4: ""})
        break;
      case "titan":
        location === "distination" ? setSelectedObject(data.destinations[3]): setSelectedObject(data.crew[3])
        setAddActive({list1: '', list2: '',list3: '', list4: "active"})
        break;

      default:
        setSelectedObject(data.destinations[0]);
        break;
    }
    
    // console.log(event);
    
  };
  return (
    <>
     <Routes>
          <Route path="/"  element= {<Home/>}/>
          <Route path="/Destination" element={<Destination addActive={addActive} selectedObject= {selectedObject}  handleClick={(type: string, location: string) =>handleClick(type, location)}/> }/>
          <Route path="/Author" element={<Author selectedObject= {selectedObject}  handleClick={(type: string, location: string) =>handleClick(type, location)}/>}/>
          <Route path="/Technology" element={<Technology /> }/>
          <Route path="/*" element={<Mistake/> }/>
      </Routes>
    </>
  )
}

export default App
