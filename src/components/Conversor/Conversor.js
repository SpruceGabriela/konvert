import React, { useEffect, useState } from 'react';

import './Conversor.css'
import Cotation from '../Cotation/Cotation';
import Form from '../Form/Form';
import Result from '../Result/Result';

import economyService from '../../services/economyService';

export default function Conversor() {
    const [currency, setCurrency] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(function() {
        async function getCurrency(){
            const [cur] = await economyService.getCurrency('usd');
            console.log(cur);

            setCurrency(cur);
            setLoading(false);
        }
        
        getCurrency();
    },[])

    return (
        <div className="conversor-container">
            {loading ? <div>loading...</div> : (
                <>
                    <div className="conversor-content">
                        <Cotation cotation={currency.bid}/>
                        <Form/>
                    </div>
                    <div className="result-container">
                        <Result cotation={currency.bid}/>
                    </div>
                </>
            )}
        </div>
    );
}