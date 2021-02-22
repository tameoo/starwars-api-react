import React from 'react';
import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
    return(
        <div className="error-indicator">
            <div className="error-icon">
                <img className="error-icon-inner" src={icon} alt="error icon"/>
            </div>
            <span className="boom">Boom!</span>
            <span>Something has gone terribly wrong</span>
            <span>(but we alredy sent droids to fix it)</span>
        </div>
    );
}

export default ErrorIndicator;