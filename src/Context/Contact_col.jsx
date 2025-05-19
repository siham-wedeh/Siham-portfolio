import React from 'react';
function Contact_col({title, desc, icon}) {
  
  return (
        <div className="col flex" >
            <div className="icon">
               {icon}
            </div>
            <div>
                <div className="sub-title">{title}</div>
                {desc == 'siham.wedeh@gmail.com' ? <a href={`mailto:${desc}`}> {desc} </a> : <div >{desc}</div>}
                
            </div>
        </div>
  );
}

export default Contact_col;
