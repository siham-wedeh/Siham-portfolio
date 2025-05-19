import React, { useEffect, useState } from 'react';

function useEffectTheme() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const togglePopup =()=>{
        setIsPopupOpen(!isPopupOpen);
        document.body.classList.toggle('menu-open', !isPopupOpen);
    }
    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark'){
            document.documentElement.setAttribute('data-theme', 'dark');
            setIsDarkMode(true);
        }else{
            document.documentElement.setAttribute('data-theme', 'light');
            setIsDarkMode(false);
        }
    },[]);
    const switchTheme = (e)=>{
        if(e.target.checked){
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
        else{
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);

        }

    };
  return {
    isDarkMode,
    isPopupOpen,
    switchTheme,
    togglePopup,


}
}

export default useEffectTheme;