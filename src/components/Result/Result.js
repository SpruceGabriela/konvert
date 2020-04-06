import React from 'react';

import './Result.css';

import Usa from '../../assets/usa.png';
import Brl from '../../assets/brazil.png';
import Arrow from '../../assets/change.png';

export default function Result(props) {
    return (
        <div className="info-container">
            <section className="information-group">
                <h1>IOF</h1>
                <div className="information-total">
                   <div className="currency-title">
                    <img src={Usa}/>
                    <p>Total em USD:</p>
                   </div>

                   <div className="totals">
                        <p>Valor sem imposto</p>
                        <p>Valor com imposto</p>
                    </div>
                </div>
                <img src={Arrow}/>
                <div className="information-total">
                   <div className="currency-title">
                    <img src={Brl}/>
                    <p>Total em BRL:</p>
                   </div>
                   <div className="totals">
                        <p>Valor sem imposto</p>
                        <p>Valor com imposto</p>
                    </div>
                </div>
            </section>
        </div>
    );
}