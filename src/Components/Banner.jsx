import React, { useEffect, useRef } from 'react';

function Banner() {
  const autoTextRef = useRef(null);
  const AutoText = "SIHAM WEDEH";

  useEffect(() => {
    
    let currentCharIndex = 0;

    function typeEffect() {
      if (!autoTextRef.current) return;

      autoTextRef.current.textContent = AutoText.substring(0, currentCharIndex + 1);

      currentCharIndex++;

      if (currentCharIndex < AutoText.length) {
        setTimeout(typeEffect, 150);
      }
    }

    // Clear any existing content before starting
    if (autoTextRef.current) {
      autoTextRef.current.textContent = "";
    }

    typeEffect();
  }, []);

  return (
    <div className="banner" id="about">
      <div className="img-container" data-aos="zoom-in">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" className="w-6 h-6 text-gray-800 dark:text-white !w-full !h-full text-dark dark:text-light" viewBox="0 0 24 24">
          <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14" />
        </svg>
      </div>
      <div className="text-dec " data-aos="fade-left">
        <div>
          Hi all, I'm
          <br />
          <span ref={autoTextRef} className="color-title"></span>
        </div>
        <div className="description">
          Passionate and results-driven Frontend Developer with 2 years of experience in building responsive and user-friendly websites. Expertise in modern HTML, CSS, JavaScript frameworks, and libraries like React. Adept at collaborating with UI/UX teams to translate designs into interactive, pixel-perfect user interfaces.
        </div>
        <div className="flex-buttons">
          <div className="btn">
            <a href="/pdf/siham_cv.pdf" target="_blank" download>
              <span>My Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-full h-auto !w-6 ml-1">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="none" stroke="#222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5" />
              </svg>
            </a>
          </div>
          <a className="btn_contact" href="#contact">Contact me</a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
