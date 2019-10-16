import React from 'react';
import './CurrencyConverter.css';
import Input from '../Input/Input';

class CurrencyConverter extends React.Component {
   validate(value) {
      if((value.match(/^\d+[,.]\d{3,}/))) {     // prevents user from typing in more than 2 decimal digits
         return false;
      }
      return true;
   }

   render() {
      const {conversion, onSetConversion} = this.props;

      return (
         <div className="CurrencyConverter">
            <span className="Label"> 1 EUR &nbsp; = </span>
            <Input
               variant="filled"
               type="number"
               min="0"
               step="0.01"
               size="medium"
               value={conversion}
               adornment="PLN"
               onChange={event => {
                  if (this.validate(event.target.value)) {
                     onSetConversion(event.target.value);
                  }
               }}
               onBlur={event => {
                  const value = String(event.target.value);

                  if (value.match(/^[,.][0-9]$/)) {                  // ",5" or ".9"
                     onSetConversion('0' + value + '0');
                  } else if (value.match(/^[,.][0-9]{2}$/)) {        // ",50" or ".91"
                     onSetConversion('0' + value);
                  } else if (value.match(/^[0-9]+[,.][0-9]$/)) {     // "5.9" or "1.0"
                     onSetConversion(value + '0');
                  } else if (value.match(/^[0-9]+$/)) {              // "3" or "15"
                     onSetConversion(value + '.00');
                  } else if (value.length === 0) {                   // "" - empty field
                     onSetConversion('0.00');
                  }
               }}
            />
         </div>
      );
   }
}


export default CurrencyConverter;
