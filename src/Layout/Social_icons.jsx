import React from 'react';
import facebook_icon from '../assets/images/facebook-icon.png';
import whatsapp_icon from '../assets/images/whatsapp-icon.png';
import linkedin_icon from '../assets/images/linkedin-icon.png';
import telegram_icon from '../assets/images/telegram-icon.png';
function Social_icons() {
  return (
       <>
            <a href="https://www.facebook.com/siham.wedeh">
                <img src={facebook_icon} alt="facebook" />
                
            </a>
            <a
                href="https://wa.me/963999690562"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={whatsapp_icon} alt="WhatsApp" />
            </a>
            <a href="https://linkedin.com/in/siham-wedeh-114a23298">
                <img src={linkedin_icon} alt="linkedin" />
            
            </a>
            <a href="https://t.me/siham_wedeh">
                <img src={telegram_icon} alt="telegram" />
            </a>
        </>
  );
}

export default Social_icons;
