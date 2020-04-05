import React from 'react';

import './Input.css'

export default function Input(props) {
    return (
        <input
            className="input-text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    );
}