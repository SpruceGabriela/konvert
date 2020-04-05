import React from 'react';

import './Cotation.css'

export default function Cotation(props) {
    return (
        <div className="cotation-container">
            <h1>Cotação do dia</h1>
            <span>{props.cotation}</span>
        </div>
    );
}