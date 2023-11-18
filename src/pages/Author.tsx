import Navbar from "../components/Navbar";
import { useEffect, Dispatch, SetStateAction, useState } from "react";
import data from "../data.json";
export interface propsType {
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
function Author({ selectedObject, setSelectedObject, handleClick }: propsType) {
  useEffect(() => {
    setSelectedObject(data.crew[0]);

    return () => {
      setSelectedObject(data.destinations[0]);
    };
  }, []);
  const [addActive, setAddActive] = useState({
    item1: "pagi-active",
    item2: "",
    item3: "",
    item4: "",
  });
  function clickHandle(page: string): void {
    switch (page) {
      case "douglas":
        setAddActive({ item1: "pagi-active", item2: "", item3: "", item4: "" });
        handleClick("douglas");
        break;
      case "mark":
        setAddActive({ item1: "", item2: "pagi-active", item3: "", item4: "" });
        handleClick("mark");
        break;
      case "mission":
        setAddActive({ item1: "", item2: "", item3: "pagi-active", item4: "" });
        handleClick("mission");
        break;
      case "victor":
        setAddActive({ item1: "", item2: "", item3: "", item4: "pagi-active" });
        handleClick("victor");
        break;
    }
  }
  return (
    <>
      <section className="crew">
        <Navbar />
        <main className="crew-box">
          <p className="destination-header">
            <span>0.2</span> meet your Crew
          </p>
          <div className="crew-content">
            <article>
              <div className="crew-details">
                <div className="crew-role">
                  <p>{selectedObject.role}</p>
                </div>
                <div className="crew-name">
                  <h1>{selectedObject.name}</h1>
                </div>
                <div className="crew-bio">
                  <p>{selectedObject.bio}</p>
                </div>
              </div>
              <div className="crew-pagination">
                <div
                  className={`pagi ${addActive.item1}`}
                  onClick={() => clickHandle("douglas")}
                ></div>
                <div
                  className={`pagi ${addActive.item2}`}
                  onClick={() => clickHandle("mark")}
                ></div>
                <div
                  className={`pagi ${addActive.item3}`}
                  onClick={() => clickHandle("mission")}
                ></div>
                <div
                  className={`pagi ${addActive.item4}`}
                  onClick={() => clickHandle("victor")}
                ></div>
              </div>
            </article>
            <div className="crew-image">
              <img src={selectedObject.images.webp} alt="crew image" />
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Author;
