import React from 'react';
import { Link } from 'react-router-dom';


function Menu() {
  return (
    <div 
      class="menu" 
      role="navigation" 
      aria-label="Main Navigation Menu"
      itemScope
      itemType="https://schema.org/SiteNavigationElement">
    <ul>
        
        <li><Link to="/" aria-current="page" itemProp="url">Homepage</Link></li>
        <li><Link to="/about" itemProp="url">About</Link></li>
        <li><Link to="/login" itemProp="url">Login</Link></li>
        <li><a href="https://google.com">Google</a></li>
    </ul>
  </div>
  );
}

export default Menu;
