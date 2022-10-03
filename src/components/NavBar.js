import "../styles/navbar.css"
import {Link} from "react-router-dom"

const NavBar = () => {
  return(
  <div>
    <ul className="navbar">
      <li className="contact"> <Link className="link" to="/contact">Contact</Link> </li>
      <li className="main"> <Link className="link" to="/">To-Do</Link> </li>
      <li className="help-right contact link" onClick={event=>{
          document.querySelector(".help-container").classList.remove("hidden")
        }}>HELP</li>
    </ul>
    <div className="help-container hidden">
      <h1>Hilfe</h1>
      <div className="close-help" onClick={()=>{
        document.querySelector(".help-container").classList.add("hidden")
      }}>X</div>
      <p>1. Schreibe deinen Task in das erste Inputfeld.</p>
      <p>2. Definiere den Zeitpunkt wann dein Task erledigt sein soll in dem Datum-Inputfeld.</p>  
      <p>3. Klicke auf Add Todo um deinen Task zu erstellen.</p>
      <p>4. Wenn du den Task erledigt hast klicke auf den Namen des Task um ihn als erledigt zu markieren (er wird jetzt rot dargestellt)</p>
      <p>5. Mit einem Klick auf das X in der oberern rechten Ecke deines Tasks wir der Task entfernt. </p>      
    </div>
  </div>
  )

}

export default NavBar