import React from 'react';

const Button = ({ label, onPress, style }) => {
    return (
        <div className="button" onClick={onPress} style={style}>
            <h4>{label}</h4>
        </div>
    )
}

export default Button