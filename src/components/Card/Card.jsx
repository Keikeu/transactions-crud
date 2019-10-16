import React from 'react';
import './Card.css';

function Card(props) {
   return (
      <div className={"Card " + props.display}>
         {props.children}
      </div>
   );
}

export default Card;
