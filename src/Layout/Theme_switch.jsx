import React from 'react';

function Theme_switch({isDarkMode, switchTheme}) {
  return (
        <div className="theme-switch-wrapper">
            <i className="fas fa-sun"></i>
            <label className="theme-switch" htmlFor="checkbox">
                <input 
                    type="checkbox" 
                    id="checkbox" 
                    checked={isDarkMode}
                    onChange={switchTheme}
                />
                <div className="slider round"></div>
            </label>
             <i className="fas fa-moon"></i>
        </div>
  );
}

export default Theme_switch;
