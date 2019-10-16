import React from 'react';
import './List.css';
import ListItem from './ListItem/ListItem';
import Card from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

function List ({conversion, transactions, onDeleteTransaction}){

   const total = transactions.reduce((a, b) => a + b.amount, 0);

   if(!transactions.length) {
      return (
         <div className="EmptyState">
            <FontAwesomeIcon className="EmptyState__Icon" icon={faBoxOpen}/>
            <h2 className="EmptyState__Header">No transactions</h2>
            <p className="EmptyState__Paragraph">Create a new transaction by using the form above</p>
         </div>
      )
   } else {
      return (
         <div>
            <h3 className="ListTitle">Transactions</h3>
            <Card display="block">
               <ul className="List">
                  <li className="List__Header">
                     <div className="Header__Item">Name</div>
                     <div className="Header__Item">Value (EUR)</div>
                     <div className="Header__Item">Value (PLN)</div>
                     <div className="Header__Item"></div>
                  </li>

                  {transactions.map((item, i) => (
                     <ListItem key={i} item={item} conversion={conversion} onClick={() => {onDeleteTransaction(item.id)}}/>
                  ))}

                  <li className="List__Footer">
                     <div className="Footer__Item">Total</div>
                     <div className="Footer__Item">{total.toFixed(2)}</div>
                     <div className="Footer__Item">{(total * conversion).toFixed(2)}</div>
                     <div className="Footer__Item"></div>
                  </li>
               </ul>
            </Card>
         </div>
      );
   }

}

export default List;
