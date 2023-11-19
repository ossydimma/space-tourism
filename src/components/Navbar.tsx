import {useEffect, useState }from "react"
import { NavLink } from "react-router-dom"
import logo from '../assets/home/logo (1).svg'

function Navbar() {
  // const [addActive, setAddActive] = useState({
  //   item1: "",
  //   item2: "",
  //   item3: "",
  //   item4: "",
  // });
  // function clickHandle(page: string): void {
  //   if (page === 'homePage') {
  //     setAddActive({item1: "pagi-active", item2: "",item3: "", item4: ""})
  //   }
  //   switch(page) {
  //     case "homePage":
  //       setAddActive({item1: 'active', item2: '',item3: '', item4: ""})
  //       break;
  //     case "destinationPage":
  //       setAddActive({item1: '', item2: 'active',item3: '', item4: ""})
  //       break;
  //     case "crewPage":
  //       setAddActive({item1: '', item2: '',item3: 'active', item4: ""})
  //       break;
  //     case "technologyPage":
  //       setAddActive({item1: '', item2: '',item3: '', item4: "active"})
  //       break;
  // }
  // }
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
          <img src={logo} alt="logo" />
        </div>
        <div className="menu-design"></div>
        {showBar && <div className="menu-bar" onClick={openMenu} >
          <img src="/src/assets/home/icon-menu.svg" alt="menu bar" />
        </div>}
        {showMenu && <ul className="menu-nav">
          {hideMenu && <div className="close-menu" onClick={closeMenu} >
            <img src="/src/assets/home/icon-close.svg" alt="close icon" />
          </div>}
          <li >
            <NavLink to ="/" className="active" >
              <span>00</span> Home
            </NavLink>
          </li>
          <li >
            <NavLink to="/Destination" className="active">
              <span>01</span> Destination
            </NavLink>
          </li>
          <li >
            <NavLink to="/Author" className="active">
              <span>02</span> Crew
            </NavLink>
          </li>
          <li >
            <NavLink to="/Technology" className="active">
              <span>03</span> Technology
            </NavLink>
          </li>
        </ul>}
      </header>
    </nav>
  );
}

export default Navbar;
