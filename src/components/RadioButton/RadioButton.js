import React from 'react';

import './RadioButton.css';

export default function RadioButton(props) {
    return (
        <input
            type="radio"
            className="radio-button"
            value={props.value}
            id={props.id}
            name={props.name}
            onChange={props.onChange}
        />
    );
}