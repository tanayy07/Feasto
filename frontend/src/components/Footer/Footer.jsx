import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Logo className="logo" />
          <p class="footer-tagline">
          Curated eats. <strong>Unbeatable savings.</strong> No extra fees, ever.
         </p>
          <p>
          Why waste time endlessly scrolling and hunting for discount codes?
           With Feasto, get instant access to top local restaurants, exclusive member offers, and real-time delivery.
         </p>
        <p class="footer-membership">
         <em>One smart membership. Many tasty benefits.</em>
        </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+91-7385989270</li>
            <li>tanayy07@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 @ Feasto.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
