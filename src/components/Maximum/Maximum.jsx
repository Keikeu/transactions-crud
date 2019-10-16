import React from 'react';
import './Maximum.css';
import Card from '../Card/Card';

function Maximum ({conversion, transactions}) {
   const max = Math.max.apply(Math, transactions.map((obj) => { return obj.amount; }));

   if(!transactions.length) {
      return null;
   } else {
      return (
         <Card display="inline-block">
            <h4 className="Max__Title">Highest Transaction</h4>
            <div className="Max__Amount--EUR">{max.toFixed(2)} EUR</div>
            <div className="Max__Amount--PLN">{(max * conversion).toFixed(2)} PLN</div>
         </Card>
      );
   }
}

export default Maximum;
