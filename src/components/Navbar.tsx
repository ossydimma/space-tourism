import {useEffect, useState }from "react"
import { Link } from "react-router-dom"

function Navbar() {

  const [showMenu, setShowMenu ]= useState<boolean>(window.innerWidth > 480 ? true : false)
  const [hideMenu, setHideMenu ]= useState<boolean>(window.innerWidth > 480 ? false : true)
  const [showBar, setShowBar ]= useState<boolean>(window.innerWidth > 480 ? false : true)
  useEffect(() => {
    window.addEventListener('resize', ()=> { 
      if (window.innerWidth > 480) {
      setShowBar(false)
      setShowMenu(true)
      setHideMenu(false)
    } else {
      setShowBar(true)
      setShowMenu(false)
      setHideMenu(true)
    }
   })
}, [])

  function openMenu(): void{
    setShowMenu(true)
  }
  function closeMenu(): void{
    setShowMenu(false)
  }
  return (
    <nav>
      <header className="menu">
        <div className="logo">
          <img src="/src/assets/logo (1).svg" alt="logo" />
        </div>
        <div className="menu-design"></div>
        {showBar && <div className="menu-bar" onClick={openMenu} >
          <img src="/src/assets/icon-menu.svg" alt="menu bar" />
        </div>}
        {showMenu && <ul className="menu-nav">
          {hideMenu && <div className="close-menu" onClick={closeMenu} >
            <img src="/src/assets/icon-close.svg" alt="" />
          </div>}
          <li>
            <Link to ="/">
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link to="/Destination">
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/Authour">
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link to="/Technology">
              <span>03</span> Technology
            </Link>
          </li>
        </ul>}
      </header>
    </nav>
  );
}

export default Navbar;
