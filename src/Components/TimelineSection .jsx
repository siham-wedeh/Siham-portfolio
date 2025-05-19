import React, { useEffect, useRef } from 'react';
function TimelineSection ({id, data}) {
  const containerRef  = useRef(null);
  const timelineLineRef =useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const timelineLine = timelineLineRef.current;

      if (!container || !timelineLine) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      const visibleTop = rect.top;
      const visibleHeight = Math.min(windowHeight, containerHeight + visibleTop);

      if (visibleTop < windowHeight && visibleHeight > 0) {
        let scrollProgress = (windowHeight - visibleTop) / containerHeight;
        if (scrollProgress > 1) scrollProgress = 1;
        timelineLine.style.height = `${scrollProgress * containerHeight + 40}px`;
      } else {
        timelineLine.style.height = `0px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="timeline_container " id={id} ref={containerRef} data-aos="fade-up">
        <div className="timeline">
            <div className="timeline-top-circle"></div>
                {data.map((item, index) => (
                   
                    <div className="timeline-item" key={index}>
                        {index !== 0 && <div className="timeline-circle"></div>}
                        <div className="timeline-content">
                        <h3>{item.title}</h3>
                        <p>{item.date}</p>
                        <p className="desc">{item.description}</p>
                        </div>
                    </div>
            ))}
            <div className="timeline-line" ref={timelineLineRef}></div>
            <div className="timeline-bottom-circle"></div>
        </div>
    </div>
  );
}

export default TimelineSection ;
