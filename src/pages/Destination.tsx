import Navbar from "../components/Navbar";
import data from "../data.json";
import { MouseEventHandler, useState } from "react";

function Destination() {
  const [selectedObject, setSelectedObject] = useState<{
    name: string;
    images: { png: string; webp: string };
    description: string;
    distance: string;
    travel: string;
  }>(data.destinations[0]);
  console.log(selectedObject.images.png);

  const handleClick: MouseEventHandler<HTMLLIElement> = (event): void => {
    const liElement = event.target as HTMLLIElement;
    const className = liElement.className;

    switch (className) {
      case "moon":
        setSelectedObject(data.destinations[0]);
        break;
      case "mars":
        setSelectedObject(data.destinations[1]);
        break;
      case "europa":
        setSelectedObject(data.destinations[2]);
        break;
      case "titan":
        setSelectedObject(data.destinations[3]);
        break;

      default:
        setSelectedObject(data.destinations[0]);
        break;
    }
  };
  return (
    <section className="destination">
      <Navbar />
      <main className="destination-box">
        <p className="destination-header">
          {" "}
          <span>0.1</span> Pick your destination
        </p>
        <div className="destination-content">
          <div className="destination-image">
            <img src={selectedObject.images.webp} alt="destination image" />
          </div>
          <article className="destination-text">
            <nav>
              <ul>
                {/* fix me add active classlist */}
                <li className="moon" onClick={handleClick}>
                  moon
                </li>
                <li className="mars" onClick={handleClick}>
                  mars
                </li>
                <li className="europa" onClick={handleClick}>
                  europa
                </li>
                <li className="titan" onClick={handleClick}>
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
