import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Destination from "./pages/Destination";
import Author from "./pages/Author";
import Technology from "./pages/Technology";
import Mistake from "./pages/Mistake";
import data from "../src/data.json";
import { useState } from "react";
import moonImage from "./assets/destination/image-moon.webp"
import marsImage from "./assets/destination/image-mars.webp"
import europaImage from "./assets/destination/image-europa.webp"
import titanImage from "./assets/destination/image-titan.webp"
import douglasImage from "./assets/author/image-douglas-hurley.webp"
import markImage from "./assets/author/image-mark-shuttleworth.webp"
import missionImage from "./assets/author/image-victor-glover.webp"
import victorImage from "./assets/author/image-anousheh-ansari.webp"




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

function App() {
  const [addActive, setAddActive] = useState({
    list1: "active",
    list2: "",
    list3: "",
    list4: "",
  });
  const [selectedObject, setSelectedObject] = useState<selectedObjectType>(
    data.destinations[0]
  );
  const [getImage, setGetImage] = useState(moonImage)
  const handleClick = (type: string): void => {
    switch (type) {
      // destination cases
      case "moon":
        setSelectedObject(data.destinations[0]);
        setGetImage(moonImage)
        setAddActive({ list1: "active", list2: "", list3: "", list4: "" });
        break;
      case "mars":
        setSelectedObject(data.destinations[1]);
        setGetImage(marsImage)
        setAddActive({ list1: "", list2: "active", list3: "", list4: "" });

        break;
      case "europa":
        setSelectedObject(data.destinations[2]);
        setGetImage(europaImage)
        setAddActive({ list1: "", list2: "", list3: "active", list4: "" });
        break;
      case "titan":
        setSelectedObject(data.destinations[3]);
        setGetImage(titanImage)
        setAddActive({ list1: "", list2: "", list3: "", list4: "active" });
        break;
        // crew cases
      case "douglas":
        setSelectedObject(data.crew[0]);
        setGetImage(douglasImage)
        break;
      case "mark":
        setSelectedObject(data.crew[1]);
        setGetImage(markImage)
        break;
      case "mission":
        setSelectedObject(data.crew[2]);
        setGetImage(missionImage)
        break;
      case "victor":
        setSelectedObject(data.crew[3]);
        setGetImage(victorImage)
        break;
        // technology case
      case "vehicle":
        setSelectedObject(data.technology[0]);
        break;
      case "spaceport":
        setSelectedObject(data.technology[1]);
        break;
      case "capsule":
        setSelectedObject(data.technology[2]);
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
        <Route path="/" element={<Home />} />
        <Route
          path="/Destination"
          element={
            <Destination
              getImage={getImage}
              setGetImage={setGetImage}
              addActive={addActive}
              setAddActive={setAddActive}
              selectedObject={selectedObject}
              setSelectedObject={setSelectedObject}
              handleClick={(type: string) => handleClick(type)}
            />
          }
        />
        <Route
          path="/Author"
          element={
            <Author
              getImage={getImage}
              setGetImage={setGetImage}
              selectedObject={selectedObject}
              setSelectedObject={setSelectedObject}
              handleClick={(type: string) => handleClick(type)}
            />
          }
        />
        <Route
          path="/Technology"
          element={
            <Technology
              selectedObject={selectedObject}
              setSelectedObject={setSelectedObject}
              handleClick={(type: string) => handleClick(type)}
            />
          }
        />
        <Route path="/*" element={<Mistake />} />
      </Routes>
    </>
  );
}

export default App;
