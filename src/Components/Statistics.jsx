import React, { useEffect, useState, useRef } from 'react';
import Main_title from '../Context/Main_title';
import Data_statistics from '../Context/Data_statistics';
import Statistic_col from '../Context/Statistic_col';
function Statistics() {
  const hasAnimated = useRef(false);

  const handleScroll = ()=>{
    const statsSection = document.querySelector('#statistics');
    const numbers = document.querySelectorAll('.number');

    const rect = statsSection.getBoundingClientRect();
    const inView =
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);

    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;

      numbers.forEach((number) => {
        const target = +number.getAttribute('data-target');
        const increment = target / 100;
        let currentValue = 0;

        const updateNumber = () => {
          currentValue += increment;
          if (currentValue < target) {
            number.textContent = `${Math.ceil(currentValue)}+`;
            requestAnimationFrame(updateNumber);
          } else {
            number.textContent = `${target}+`;
          }
        };

        updateNumber();
      });

      window.removeEventListener('scroll', handleScroll);
    }
  }

  // This acts like useEffect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  return (
    <div className="statistics" id="statistics">
      <div className="content"data-aos="fade-up">
        <Main_title title="Statistics" sub_title="My Numbers"/>
        
        <Statistic_col data={Data_statistics} />
      </div>
    </div>
  );
}

export default Statistics;
