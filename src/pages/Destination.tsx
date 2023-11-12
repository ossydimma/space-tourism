import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"


function Destination() {
  return (
      <section className="destination">
        <Navbar />
        <main className="destination-box">
          <p className="destination-header">Pick your destination</p>
          <div className="destination-content">
            <div className="destination-image">

            </div>
            <article className="destination-text">
              <nav>
                <ul>
                  <li><Link to="/">moon</Link></li>
                  <li><Link to="/">mars</Link></li>
                  <li><Link to="/">europa</Link></li>
                  <li><Link to="/">titan</Link></li>
                </ul>
              </nav>

            </article>
          </div>
        </main>
        
      </section>
  )
}

export default Destination