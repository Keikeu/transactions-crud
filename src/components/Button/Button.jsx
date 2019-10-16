import React from 'react';
import './Button.css';

function Button(props) {
   return (
      <div className="Button" onClick={() => {props.onClick("hejka", 9.33)}}>
         {props.children}
      </div>
   );
}

export default Button;
