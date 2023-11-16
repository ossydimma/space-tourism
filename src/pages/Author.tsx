import Navbar from "../components/Navbar";
interface propsType {
  selectedObject: {
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
  };
  handleClick : (type: string, location: string)=> void
};
function Author ({ selectedObject, handleClick}: propsType) {
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
                  <p>Flight Engineer</p>
                </div>
                <div className="crew-name">
                  <h1>Anousheh Ansari</h1>
                </div>
                <div className="crew-bio">
                  <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
                </div>
              </div>
              <div className="crew-pagination">
                <div className= "pagi {}"></div>
                <div className="pagi"></div>
                <div className="pagi"></div>
                <div className="pagi pagi-active"></div>
              </div>
            </article>
            <div className="crew-image">
              <img
                src="/src/assets/author/image-anousheh-ansari.webp"
                alt="crew image"
              />
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Author;
