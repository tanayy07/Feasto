import React from "react";
import "./Header.css";
import { assets } from "../../assets/frontend_assets/assets";


const Header = () => {
  const scrollToMenu = () => {
    const menu = document.getElementById("explore-menu");
    menu.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="header">
      <video className="header-video" autoPlay muted loop >
        <source src={assets.FoodHeroVideo} type="video/mp4" />
      </video>
      <div className="header-contents">
        <h2>Fast food, <br />not fast-food.</h2>
        <p>
          Discover exceptional flavors crafted with passion and precision.
        </p>
        <p>
        Where every bite tells a story
        </p>
        <p>
        Taste the difference • Feel the passion
        </p>
    
        <a href="#explore-menu" className="header-button">View Menu</a>
      </div>
    </div>
  );
};

export default Header;
