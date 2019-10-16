import React from 'react';
import './Input.css';

function Input(props) {
   return (
      <div className={"Input " + props.size}>

         {props.title &&
            <div className="Input__Title">{props.title}</div>
         }

         <input
            className={"Input__Box--" + props.variant}
            name={props.name}
            type={props.type}
            min={props.min}
            step={props.step}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onBlur={props.onBlur}
         />

         {props.adornment &&
            <div className={"Input__Adornment--" + props.variant}>{props.adornment}</div>
         }

         {props.error &&
            <p className="Input__Error">{props.error}</p>
         }

      </div>
   );
}

export default Input;
