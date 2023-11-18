import { MouseEventHandler, useState } from "react";
import data from "../data.json"
// this file is for educational purpose 
interface addActiveType {
    moon: string
    mars: string
    europa: string
    titan: string
} 
interface selectedObjectType {
    name: string;
    images: { png: string; webp: string };
    description: string;
    distance?: string;
    travel?: string;
}

const [addActive, setAddActive] = useState<addActiveType>({
    moon: 'active',
    mars: '',
    europa: '',
    titan: '',
  })
  const [selectedObject, setSelectedObject] = useState<selectedObjectType>(data.destinations[0]);
export interface handleClickType {
    addActive: addActiveType ;
    setAddActive: React.Dispatch<React.SetStateAction<addActiveType>>;
    selectedObject: selectedObjectType;
    setSelectedObject: React.Dispatch<React.SetStateAction<selectedObjectType>>}

const handleClick: MouseEventHandler<HTMLLIElement> = (event): handleClickType => {
    const liElement = event.target as HTMLLIElement;
    const innerHTML = liElement.innerHTML;

    switch (innerHTML) {
      case "moon":
        setSelectedObject(data.destinations[0]);
        setAddActive({moon: 'active', mars: '',europa: '', titan: ""})
        break;
      case "mars":
        setSelectedObject(data.destinations[1]);
        setAddActive({moon: '', mars: 'active',europa: '', titan: ""})
        console.log(event);
        break;
      case "europa":
        setSelectedObject(data.destinations[2]);
        setAddActive({moon: '', mars: '',europa: 'active', titan: ""})
        break;
      case "titan":
        setSelectedObject(data.destinations[3]);
        setAddActive({moon: '', mars: '',europa: '', titan: "active"})
        break;

      default:
        setSelectedObject(data.destinations[0]);
        break;
    }
    
    console.log(event);
    return {addActive, setAddActive, selectedObject, setSelectedObject}
    
  };

  export default handleClick ;
