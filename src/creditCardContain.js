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
    let reg = /^[0-9]*$/
    if (reg.test(e.target.value)) {
      let nbr
      if(e.target.value.length <= 4){
        nbr = e.target.value + '•••• •••• •••• ••••'.slice(e.target.value.length)
      }else if(e.target.value.length >=5 && e.target.value.length <=8){
         nbr = e.target.value.slice(0,4) +' '+ e.target.value.slice(4)+'•••• •••• •••• ••••'.slice(e.target.value.length+1)
      }else if(e.target.value.length >=9 && e.target.value.length <=12){
        nbr = e.target.value.slice(0,4) +' '+e.target.value.slice(4,8) +' '+e.target.value.slice(8) +'•••• •••• •••• ••••'.slice(e.target.value.length+2)
      }else if(e.target.value.length >=13 && e.target.value.length <=16){
        nbr = e.target.value.slice(0,4) +' '+e.target.value.slice(4,8) +' '+e.target.value.slice(8,12) +' '+e.target.value.slice(12)+'•••• •••• •••• ••••'.slice(e.target.value.length+3)
      }
      this.setState({
        cardNumber: e.target.value}, () => this.props.updateState(nbr, this.state.holderName, this.state.date)
      )
    }

  }
  handleNameChange(e) {
    let reg = /^[A-Za-z ]*$/
    if (reg.test(e.target.value)) {
      const name=e.target.value.toUpperCase()
      this.setState({
        holderName: e.target.value}, () => this.props.updateState(this.state.cardNumber, name, this.state.date)
    )
    }
  }
  handleDateChange(e) {
    let reg = /^[0-9]*$/
    if(reg.test(e.target.value)){
      if(e.target.value[0]+e.target.value[1] > 12)  e.target.value=e.target.value[0]
      if(e.target.value[0]> 1 ) e.target.value=''
      let date
      if(e.target.value.length === 2){
        date=e.target.value+'/'+'••'
      }else if(e.target.value.length === 3){
        date=e.target.value.slice(0,2)+'/'+e.target.value.slice(2)+'•'
      }else if(e.target.value.length === 4){
        date=e.target.value.slice(0,2)+'/'+e.target.value.slice(2)
      }
      this.setState({
        date: e.target.value
      }, () => this.props.updateState(this.state.cardNumber, this.state.holderName, date)
      )
    }
    
  }
  render() {
    return (

      <form className="d-flex flex-column">
        <input type="text" maxLength="16" value={this.state.cardNumber} placeholder="Card Number" onChange={(e) => this.handleNumberChange(e)} />
        <input type="text" maxLength="20" value={this.state.holderName} placeholder="Name" onChange={(e) => this.handleNameChange(e)} />
        <input type="text" maxLength="4" value={this.state.date} placeholder="MM/YY" onChange={(e) => this.handleDateChange(e)} />
      </form>
    )
  }
}
export default CardContain;