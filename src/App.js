import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreditCard from './creditCardView'
import CardContain from './creditCardContain'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      holderName: '',
      date: ''
    }
  }
  updateState = (number,name,date) => {
    this.setState({
      cardNumber:number,
      holderName:name,
      date:date
    })
  }
  render() {
    return (
      <div className="d-flex flex-row App">

        <CreditCard cardNumber={this.state.cardNumber} holderName={this.state.holderName} date={this.state.date} />
        <CardContain updateState={this.updateState} />
      </div>
    );
  }
}


export default App;
