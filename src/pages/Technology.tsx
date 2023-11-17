import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import type { propsType } from "./Author"
import data from "../data.json"


function Technology({selectedObject, setSelectedObject, handleClick}: propsType) {
  const [changeImage, setChangeImage] = useState(window.innerWidth > 480 ? selectedObject.images.portrait : selectedObject.images.landscape);
  useEffect(() => {
    // setSelectedObject(data.technology[0])
    window.addEventListener('resize', ()=> {
      window.innerWidth > 480 ? setChangeImage(selectedObject.images.portrait) : setChangeImage(selectedObject.images.portrait)
    })
  
    // return ()=> {
    //   setSelectedObject(data.destinations[0])
    // }
  }, )
  
  return (
    <>
      <section className="technology">
        <Navbar />
        <main className="technology-box">
        <p className="destination-header">
          <span>0.2</span> space launch 101
        </p>
        <div className="technology-content">
          <div className="navigators">
            <div className="navigator" onClick={()=> handleClick("vehicle")}>1</div>
            <div className="navigator" onClick={()=> handleClick("spaceport")}>2</div>
            <div className="navigator" onClick={()=> handleClick("capsule")}>3</div>
          </div>
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
          <div className="technology-image">
            <img src={changeImage} alt="technology image" />
          </div>
        </div>
        </main>
      </section>
    </>
  )
}

export default Technology