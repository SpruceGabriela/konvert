import React from 'react';
import Input from '../Input/Input';

import './Form.css';
import Usa from '../../assets/usa.png';
import Percent from '../../assets/percent.png'
import Button from '../Button/Button';
import RadioButton from '../RadioButton/RadioButton';

export default function Form() {
    return(
        <form>
            <div className="input-text">
                <img src={Usa}/>
                <Input placeholder="Valor em Dólar"/>
            </div>
            <div className="input-text">
                <img src={Percent}/>
                <Input placeholder="Taxa de estado"/>
            </div>
            <div className="input-group">
                <RadioButton value="money" id="money"/>
                <label htmlFor="money">Dinheiro</label>
                <RadioButton value="card" id="card"/>
                <label htmlFor="card">Cartão</label>
            </div>
            <Button name="Calcular"/>
        </form>
    );
}