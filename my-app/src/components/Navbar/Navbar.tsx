import React from 'react';
import { NavLink} from "react-router-dom";
import about from '../Images/about.png';
import work from '../Images/work.png';
import contact from '../Images/contact.png';
import "./Navbar.css";

const Nav: React.FC = () => {
  return (
    <aside className="nav">
   <NavLink to = '/about'><img src = {about} alt = 'about'/></NavLink>
   <NavLink to = '/work'><img src = {work} alt = 'work' /></NavLink>
   <NavLink to = '/contact'><img src = {contact} alt = 'contact'/></NavLink>
    </aside>
  );
}

export default Nav;
