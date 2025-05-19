import React from 'react';
function Main_title({title, sub_title}) {
  
  return (
    <div className="title flex-col" >
          <div className="color-title">{title}</div>
          <div>{sub_title}</div>
    </div>
  );
}

export default Main_title;
