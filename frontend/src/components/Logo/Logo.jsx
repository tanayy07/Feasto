
import React from 'react';
import './Logo.css';

const Logo = ({ className = "" }) => {
  return (
    <div className={`logo-text ${className}`}>
      Feasto
    </div>
  );
};

export default Logo;