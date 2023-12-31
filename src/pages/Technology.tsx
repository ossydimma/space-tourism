import { useEffect, Dispatch, SetStateAction, useState } from "react";
import Navbar from "../components/Navbar";
import data from "../data.json";
import vichleImage2 from "../assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleImage2 from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceportImage2 from "../assets/technology/image-spaceport-portrait.jpg";

interface propsType {
  selectedObject: {
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
  };
  setSelectedObject: Dispatch<
    SetStateAction<{
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
    }>
  >;
  handleClick: (type: string) => void;
}

function Technology({
  selectedObject,
  setSelectedObject,
  handleClick,
}: propsType) {
  const [addActive, setAddActive] = useState({
    item1: "navigator-active",
    item2: "",
    item3: "",
  });
  const [getImage, setGetImage] = useState(vichleImage2);
  function clickHandle(page: string): void {
    switch (page) {
      case "vehicle":
        setAddActive({ item1: "navigator-active", item2: "", item3: "" });
        handleClick("vehicle");
        setGetImage(vichleImage2);
        break;
      case "spaceport":
        setAddActive({ item1: "", item2: "navigator-active", item3: "" });
        handleClick("spaceport");
        setGetImage(spaceportImage2);
        break;
      case "capsule":
        setAddActive({ item1: "", item2: "", item3: "navigator-active" });
        handleClick("capsule");
        setGetImage(capsuleImage2);
        break;
    }
  }

  useEffect(() => {
    // window.addEventListener('resize', ()=> {
    //   window.innerWidth > 820 ? setGetImage(vichleImage2) : setGetImage(vichleImage)
    // })
    // // setGetImage(window.innerWidth > 820 ? vichleImage2 : vichleImage)
    setSelectedObject(data.technology[0]);
    return () => {
      setSelectedObject(data.destinations[0]);
    };
  }, []);
  return (
    <>
      <section className="technology">
        <Navbar />
        <main className="technology-box">
          <p className="destination-header">
            <span>0.2</span> space launch 101
          </p>
          <div className="technology-content">
            <div className="technology-content-box">
              <article className="technology-details">
                <div className="technology-detail-header">
                  <p>the technology</p>
                </div>
                <div className="technology-name">
                  <h1>{selectedObject.name}</h1>
                </div>
                <div className="technology-descri">
                  <p>{selectedObject.description}</p>
                </div>
              </article>
              <div className="technology-navigators">
                <div
                  className={`navigator ${addActive.item1}`}
                  onClick={() => clickHandle("vehicle")}
                >
                  1
                </div>
                <div
                  className={`navigator ${addActive.item2}`}
                  onClick={() => clickHandle("spaceport")}
                >
                  2
                </div>
                <div
                  className={`navigator ${addActive.item3}`}
                  onClick={() => clickHandle("capsule")}
                >
                  3
                </div>
              </div>
            </div>
            <div className="technology-image">
              <img src={getImage} alt="technology image" />
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Technology;
