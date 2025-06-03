import React from 'react';

function Links({ closePopup }) {
  const handleClick = () => {
    if (closePopup) closePopup();
  };
  return (
       <>
           <div className="links">
              
                <a href='#about' onClick={handleClick}>About</a>
                
                <a href="#statistics" onClick={handleClick}>Statistics </a>
                <a href='#Qualification' onClick={handleClick}>Qualification</a>
                <a href="#skills" onClick={handleClick}>Skills</a>
                <a href="#projects" onClick={handleClick}>Projects</a>
            </div>
        </>
  );
}

export default Links;
