import React from 'react';

import './Result.css';

import Usa from '../../assets/usa.png';
import Brl from '../../assets/brazil.png';
import Arrow from '../../assets/change.png';
import MoneyUtil from '../../utils/moneyUtil';

export default function Result(props) {
    const {amount, stateTax, cotation, tax} = props;
    
    return (
        <div className="info-container">
            <section className="information-group">
                <h1>IOF: {tax}%</h1>
                <div className="information-total">
                   <div className="currency-title">
                    <img src={Usa} alt="Bandeira dos Estados Unidos"/>
                    <p>Total em USD:</p>
                   </div>

                   <div className="totals">
                        <p>Valor sem imposto: {MoneyUtil.formatUSDValue(amount)}</p>
                        <p>Valor com imposto: {MoneyUtil.formatUSDValue(MoneyUtil.getDollarWithTax(amount, stateTax))}</p>
                    </div>
                </div>
                <img src={Arrow} alt="Conversão"/>
                <div className="information-total">
                   <div className="currency-title">
                    <img src={Brl} alt="Bandeira do Brasil"/>
                    <p>Total em BRL:</p>
                   </div>
                   <div className="totals">
                        <p>Valor sem imposto: {MoneyUtil.formatBRLValue(MoneyUtil.getRealWithoutTax(amount, cotation))}</p>
                        <p>Valor com imposto: {MoneyUtil.formatBRLValue(MoneyUtil.getRealWithTax(amount, tax, cotation))}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}