import Navbar from "../components/Navbar";
import data from "../data.json";
import { Dispatch, SetStateAction, useEffect} from "react";

interface propsType {
  addActive: {
    list1: string;
    list2: string;
    list3: string;
    list4: string;
  };
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

function Destination({
  addActive,
  selectedObject,
  setSelectedObject,
  handleClick,
}: propsType) {
  useEffect(() => {
    setSelectedObject(data.destinations[0]);

    return () => {
      setSelectedObject(data.technology[0]);
    };
  }, []);

  return (
    <section className="destination">
      <Navbar />
      <main className="destination-box">
        <p className="destination-header">
          <span>0.1</span> Pick your destination
        </p>
        <div className="destination-content">
          <div className="destination-image">
            <img src={selectedObject.images.webp} alt="destination image" />
          </div>
          <article className="destination-text">
            <nav>
              <ul>
                <li
                  className={addActive.list1}
                  onClick={() => handleClick("moon")}
                >
                  moon
                </li>
                <li
                  className={addActive.list2}
                  onClick={() => handleClick("mars")}
                >
                  mars
                </li>
                <li
                  className={addActive.list3}
                  onClick={() => handleClick("europa")}
                >
                  europa
                </li>
                <li
                  className={addActive.list4}
                  onClick={() => handleClick("titan")}
                >
                  titan
                </li>
              </ul>
            </nav>
            <div className="destination-details">
              <div className="destination-detail">
                <h1>{selectedObject.name}</h1>
                <div className="destination-descri">
                  <p>{selectedObject.description}</p>
                </div>
                <div className="destination-time">
                  <div>
                    <p>avg. distance</p>
                    <p className="destination-dist">
                      {selectedObject.distance}
                    </p>
                  </div>
                  <div>
                    <p>est. travel time</p>
                    <p className="destination-dist">{selectedObject.travel}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </section>
  );
}

export default Destination;
