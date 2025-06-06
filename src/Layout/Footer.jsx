import React from 'react';
import Social_icons from './Social_icons';

function Footer() {
  return (
        <div className="footer">
            <div className="content grid">
                <div className="col">2025 © All Rights Reserved</div>
                <div className="col name">Siham Wedeh</div>
                <div className="col flex">
                <Social_icons />
                </div>
            </div>
        </div>
    
  );
}

export default Footer;
