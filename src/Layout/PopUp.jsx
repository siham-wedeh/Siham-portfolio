import React from 'react';
import Social_icons from './Social_icons';
import Links from './Links';
import Theme_switch from './Theme_switch';

function PopUP({isDarkMode , switchTheme, isPopupOpen, closePopup }) {
  return (
    <div className={`popup-mobile ${isPopupOpen ? 'open' : ''}`}>
        <div className="content">
            <Links closePopup={closePopup}/>
            <div className="links social-links">
                <Social_icons />   
                <Theme_switch isDarkMode ={isDarkMode} switchTheme={switchTheme}/>
               
            </div>

        </div>
        
    </div>
  );
}

export default PopUP;
