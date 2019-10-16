import React from 'react';
import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function ListItem({conversion, item, onClick}) {
   return (
      <li className="ListItem">
         <div className="ListItem__Col">{item.name}</div>
         <div className="ListItem__Col">{item.amount.toFixed(2)}</div>
         <div className="ListItem__Col">{(item.amount * conversion).toFixed(2)}</div>
         <div className="ListItem__Col" onClick={onClick} title="Delete transaction"><FontAwesomeIcon icon={faTrash}/></div>
      </li>
   );
}

export default ListItem;
