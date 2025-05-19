import React, { useEffect, useRef, useState } from 'react';

function Skill({ lable, progress, rate, isVisible }) {
    const progressRef = useRef(null);
    const rateRef = useRef(null);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        if (isVisible) {
            const target = parseInt(progress);
            let current = 0;

            const interval = setInterval(() => {
                if (current >= target) {
                    clearInterval(interval);
                } else {
                    current++;
                    setPercent(current);
                    if (progressRef.current) {
                        progressRef.current.style.width = `${current}%`;
                    }
                    if (rateRef.current) {
                        rateRef.current.textContent = `${current}%`;
                    }
                }
            }, 10);

            return () => clearInterval(interval); // Cleanup on unmount
        }
    }, [isVisible, progress]);

    return (
        <div className="skill">
            <h3>{lable}</h3>
            <div className="skill-level">
                <div
                    className="skill-progress"
                    ref={progressRef}
                    data-skill={progress}
                    style={{ width: isVisible ? `${percent}%` : '0%' }}
                ></div>
                <span className="skill-rate" ref={rateRef}>0%</span>
            </div>
        </div>
    );
}

export default Skill;
