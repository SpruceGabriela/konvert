import React, { useEffect, useState } from 'react';

import './Conversor.css'
import Cotation from '../Cotation/Cotation';
import Form from '../Form/Form';
import Result from '../Result/Result';

import economyService from '../../services/economyService';
import Input from '../Input/Input';
import RadioButton from '../RadioButton/RadioButton';
import Button from '../Button/Button';
import Usa from '../../assets/usa.png';
import Percent from '../../assets/percent.png'

export default function Conversor() {
    const [currency, setCurrency] = useState(null);
    const [loading, setLoading] = useState(true);
    const [tax, setTax] = useState(0);
    const [amount, setAmount] = useState(0);
    const [stateTax, setStateTax] = useState(0);

    useEffect(function() {
        async function getCurrency(){
            const [cur] = await economyService.getCurrency('usd');
            console.log(cur);

            setCurrency(cur);
            setLoading(false);
        }
        
        getCurrency();
    },[])

    const amountChangedHandler = e => {
        setAmount(e.target.value);
    }

    const iofChangedHandler = e => {
        setStateTax(e.target.value);
    }

    return (
        <div className="conversor-container">
            {loading ? <div>loading...</div> : (
                <>
                    <div className="conversor-content">
                        <Cotation cotation={currency.bid}/>
                        <Form>
                            <div className="input-text">
                                <img src={Usa} alt="Bandeira dos Estados Unidos"/>
                                <Input placeholder="Valor em Dólar" onChange={amountChangedHandler}/>
                            </div>
                            <div className="input-text">
                                <img src={Percent} alt="Taxa de estado"/>
                                <Input placeholder="Taxa de estado" onChange={iofChangedHandler}/>
                            </div>
                            <div className="input-group">
                                <RadioButton name="payment" value="1.1" id="money" onChange={e => setTax(e.target.value)}/>
                                <label htmlFor="money">Dinheiro</label>
                                <RadioButton name="payment" value="6.4" id="card" onChange={e => setTax(e.target.value)}/>
                                <label htmlFor="card">Cartão</label>
                            </div>
                        </Form>
                    </div>
                    <div className="result-container">
                        <Result
                            cotation={+currency.bid}
                            tax={+tax}
                            amount={+amount}
                            stateTax={+stateTax}
                            />
                    </div>
                </>
            )}
        </div>
    );
}