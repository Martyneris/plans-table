import React from 'react';
import arrowIcon from '../assets/icons/arrow.png'

const TextLine = ({ text, style }) => {
    return (
        <div className="text-line" style={style}>
            <img src={arrowIcon} />
            <p style={{ marginLeft: '5px'}}>{text}</p>
        </div>
    )
}

export default TextLine