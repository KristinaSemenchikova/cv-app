import React from "react";
import "./Footer.css";
import fb from '../Images/fb.png';
import ln from '../Images/ln.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      Find me at:
      <div>
        <a href="https://www.facebook.com/profile.php?id=100002147140009">
        <img alt = 'fb' src = {fb}/>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/%D0%BA%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%BD%D0%B0-%D1%81%D0%B5%D0%BC%D0%B5%D0%BD%D1%87%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0-240876145">
        <img alt = 'ln' src = {ln}/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
