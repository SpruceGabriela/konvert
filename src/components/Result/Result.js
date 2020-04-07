import React from 'react';

import './Result.css';

import Usa from '../../assets/usa.png';
import Brl from '../../assets/brazil.png';
import Arrow from '../../assets/change.png';

export default function Result(props) {
    const {amount, stateTax, cotation, tax} = props;

    function getDollarWithTax(){
        return amount + (amount * stateTax)/100;
    }

    function getRealWithoutTax(){
        return amount * cotation;
    }

    function getRealWithTax(){
        return (amount + (amount * tax)/100) * (cotation +(cotation * tax)/100)
    }
    
    return (
        <div className="info-container">
            <section className="information-group">
                <h1>IOF</h1>
                <div className="information-total">
                   <div className="currency-title">
                    <img src={Usa} alt="Bandeira dos Estados Unidos"/>
                    <p>Total em USD:</p>
                   </div>

                   <div className="totals">
                        <p>Valor sem imposto: {amount}</p>
                        <p>Valor com imposto: {getDollarWithTax()}</p>
                    </div>
                </div>
                <img src={Arrow} alt="Conversão"/>
                <div className="information-total">
                   <div className="currency-title">
                    <img src={Brl} alt="Bandeira do Brasil"/>
                    <p>Total em BRL:</p>
                   </div>
                   <div className="totals">
                        <p>Valor sem imposto: {getRealWithoutTax()}</p>
                        <p>Valor com imposto: {getRealWithTax()}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}