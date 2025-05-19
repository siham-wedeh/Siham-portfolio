import React from 'react';

function Statistic_col({ data }) {
  return (
    <div className="grid" data-aos="fade-up">
      {data.map((item, index) => (
        <div className="col flex" key={index}>
          <div className="number" data-target={item.number}>0+</div>
          <div className="challenges-number">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
export default Statistic_col;