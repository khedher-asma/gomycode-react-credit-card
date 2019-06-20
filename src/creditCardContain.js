import React, { Component } from 'react';
import './contain.css'
class CardContain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      holderName: '',
      date: ''
    }
  }

  handleNumberChange(e) {
    this.setState({
      cardNumber: e.target.value
    }, () => this.props.updateState(this.state.cardNumber, this.state.holderName, this.state.date)
    )
  }
  handleNameChange(e) {
    this.setState({
      holderName: e.target.value.toUpperCase()
    }, () => this.props.updateState(this.state.cardNumber, this.state.holderName, this.state.date)
    )
  }
  handleDateChange(e) {
    this.setState({
      date: e.target.value
    }, () => this.props.updateState(this.state.cardNumber, this.state.holderName, this.state.date)
    )
  }
  render() {
    return (

      <form className="d-flex flex-column">
        <input type="text" maxLength="19" value={this.state.cardNumber} placeholder="Card Number" onChange={(e) => this.handleNumberChange(e)} />{this.state.cardNumber}
        <input type="text" maxLength="20" value={this.state.holderName} placeholder="Name" onChange={(e) => this.handleNameChange(e)} />{this.state.holderName}
        <input type="text" maxLength="5" value={this.state.date} placeholder="MM/YY" onChange={(e) => this.handleDateChange(e)} />{this.state.date}
      </form>
    )
  }
}
export default CardContain;