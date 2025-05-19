import React from 'react';
function CustomButton({id, Label, active, icon, handleClickBtn}) {
   
  return (
 
    <div className={`btn ${active ? "active" : ""}`} id={id} onClick={handleClickBtn}>
        <div>
            {icon}
        </div>
        <div>{Label}</div>
    </div>
  );
}

export default CustomButton;
