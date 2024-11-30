import React from "react";
const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-menu">
        <li><a href="#accueil" className="navigation-link">Accueil</a></li>
        <li><a href="#profil" className="navigation-link">Profil</a></li>
        <li><a href="#contact" className="navigation-link">Contact</a></li>
      </ul>
    </nav>
  );
};
export default Navigation;
