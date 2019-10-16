import React from 'react';
import './Form.css';
import Card from '../Card/Card';
import Input from '../Input/Input';
import Button from '../Button/Button';

class Form extends React.Component {
   constructor({onAddTransaction}) {
      super();
      this.state = {
         name: '',
         amount: '',
         nameError: '',
         amountError: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.validate = this.validate.bind(this);
      this.onAddTransaction = onAddTransaction;
   }

   handleChange({ target }) {
      if (target.name === 'amount' && String(target.value).match(/^\d+[,.]\d{3,}/)) { }   // prevents user from typing in more than 2 decimal digits
      else {
         this.setState({
            [target.name]: target.name === 'name' ? target.value : parseFloat(target.value)
         }, () => {
            if (this.state.nameError || this.state.amountError) {    // removes error message if value was corrected
               this.validate();
            }
         });
      }
   }

   validate() {
      let isValid = true;

      // validate name
      if (this.state.name === '') {
         this.setState({
            nameError: "Please enter a value"
         });
         isValid = false;
      } else {
         this.setState({
            nameError: ''
         });
      }

      // validate amount
      if (this.state.amount === '' || isNaN(this.state.amount)) {
         this.setState({
            amountError: "Please enter a value"
         });
         isValid = false;
      } else if (this.state.amount === '0.00' || this.state.amount === 0.00 || this.state.amount < 0) {
         this.setState({
            amountError: "Value has to be greater than zero"
         });
         isValid = false;
      } else {
         this.setState({
            amountError: ''
         });
      }

      return isValid;
   }

   render() {
      return(
         <form className="Form">
            <Card display="flex">
               <Input
                  title="transaction name"
                  name="name"
                  variant="outlined"
                  size="large"
                  type="text"
                  value={this.state.name}
                  placeholder=""
                  onChange={this.handleChange}
                  error={this.state.nameError}
               />
               <Input
                  title="amount"
                  name="amount"
                  variant="outlined"
                  size="small"
                  type="number"
                  min="0"
                  step="0.01"
                  value={!this.state.amount && this.state.amount !== 0 ? '' : this.state.amount}
                  placeholder="0,00"
                  adornment="EUR"
                  onChange={this.handleChange}
                  error={this.state.amountError}
               />
               <Button
                  onClick={() => {
                     if(this.validate()) {
                        this.onAddTransaction(this.state.name, this.state.amount)
                     }
                  }}
               >
                  Add Transaction
               </Button>
            </Card>
         </form>
      )
   }
};


export default Form;
