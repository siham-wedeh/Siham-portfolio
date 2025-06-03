import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PopUP from './PopUp';
import Social_icons from './Social_icons';
import Links from './Links';
import Theme_switch from './Theme_switch';
import useEffectTheme from './useEffectTheme';

function Header() {
    const { isDarkMode, isPopupOpen, switchTheme, togglePopup} = useEffectTheme();
    return (
        <>
            <div className='header desktop'>
                <div className='content'>
                    <Links />
                    <div className="links social-links">
                    <Social_icons />
                    <Theme_switch isDarkMode={isDarkMode} switchTheme={switchTheme}/>
                    
                    </div>
                </div>
            </div>
            <div className="header mobile nav-wrapper">
                <div className="hamb-icon"  onClick={togglePopup}>
                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>   
                </div>
            </div>
            <PopUP isDarkMode={isDarkMode} switchTheme ={switchTheme} isPopupOpen={isPopupOpen} closePopup={togglePopup}/>
        </>

      
    );
  }
  
  export default Header;