import React from 'react';

import './Conversor.css'
import Cotation from '../Cotation/Cotation';
import Form from '../Form/Form';

export default function Conversor() {
    return (
        <div className="conversor-container">
            <div className="conversor-content">
                <Cotation cotation="teste"/>
                <Form/>
            </div>
            <div className="result-container">

            </div>
        </div>
    );
}