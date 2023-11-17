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
      png?: string;
      webp?: string;
      portrait?: string;
      landscape?: string;

    };
    description?: string;
    distance?: string;
    travel?: string;
    role?: string;
    bio?: string;

  }
  // setSelectedObject: Dispatch<SetStateAction<{
  //    name: string;
  //    images: {
  //      png: string;
  //      webp: string;
  //    };
  //    description?: string;
  //    distance?: string;
  //    travel?: string;
  //    role?: string;
  //    bio?: string;
  //  }>>;
 
  

function App() {
  const [addActive, setAddActive] = useState({
    list1: "active",
    list2: "",
    list3: "",
    list4: "",
   });
const [selectedObject, setSelectedObject] = useState<selectedObjectType>(data.destinations[0])

  const handleClick = (type: string): void => {

    switch (type) {
      case "moon":
        // fix here 
        setSelectedObject(data.destinations[0])
        setAddActive({list1: 'active', list2: '',list3: '', list4: ""})
        break;
      case "mars":
        setSelectedObject(data.destinations[1])
        setAddActive({list1: '', list2: 'active',list3: '', list4: ""})
        
        break;
      case "europa":
        setSelectedObject(data.destinations[2])
        setAddActive({list1: '', list2: '',list3: 'active', list4: ""})
        break;
      case "titan":
        setSelectedObject(data.destinations[3])
        setAddActive({list1: '', list2: '',list3: '', list4: "active"})
        break;
      case "douglas":
          setSelectedObject(data.crew[0])
        break;
      case "mark":
          setSelectedObject(data.crew[1])
        break;
      case "mission":
          setSelectedObject(data.crew[2])
        break;
      case "victor":
          setSelectedObject(data.crew[3])
        break;
      case "vehicle":
          setSelectedObject(data.technology[0])
        break;
      case "spaceport":
          setSelectedObject(data.technology[1])
        break;
      case "capsule":
          setSelectedObject(data.technology[2])
        break;

      default:
        console.log("data not found");
        
        break;
    }
    
    // console.log(event);
    
  };
  return (
    <>
     <Routes>
          <Route path="/"  element= {<Home/>}/>
          <Route path="/Destination" element={<Destination addActive={addActive} selectedObject= {selectedObject} setSelectedObject={setSelectedObject}  handleClick={(type: string, ) =>handleClick(type)}/> }/>
          <Route path="/Author" element={<Author  selectedObject= {selectedObject} setSelectedObject={setSelectedObject}  handleClick={(type: string, ) =>handleClick(type)}/>}/>
          <Route path="/Technology" element={<Technology selectedObject= {selectedObject} setSelectedObject={setSelectedObject}  handleClick={(type: string, ) =>handleClick(type)}/> }/>
          <Route path="/*" element={<Mistake/> }/>
      </Routes>
    </>
  )
}

export default App
