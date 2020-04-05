import React from 'react';

import './RadioButton.css';

export default function RadioButton(props) {
    return (
        <input
            className="radio-button"
            type="radio"
            value={props.value}
            id={props.id}
        />
    );
}