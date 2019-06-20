import React, { Component } from 'react';
import './creditCardView.css'

const CreditCard = (props) => {
    return (
        <div className="card">
            <div className="companyName">
                <h3>Company Name</h3>
            </div>
            <div className="cardPuce">
                <img src={require('./puce.png')} alt="logo puce" />
            </div>
            <div className="cardNumber">
                <p>{props.cardNumber ? props.cardNumber : '•••• •••• •••• ••••'}</p>
            </div>
            <div className="d-flex  bottomSection">
                <div className=" right-bottomSection">
                    <p className="date">{props.date ? props.date : '••/••'}</p>
                    <h5 className="holderName">{props.holderName ? props.holderName : '••••••••••••••••••••'}</h5>
                </div>
            </div>

        </div>
    )
}
export default CreditCard