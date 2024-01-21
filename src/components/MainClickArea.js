import React from 'react';

const MainClickArea = ({ onNavigate }) => {
    return (
        <div className="main-click-area" onClick={onNavigate}>
            <h2>Find Your Ideal Credit Card</h2>
            <p>Click here to explore the best credit card options for you!</p>
        </div>
    );
};

export default MainClickArea;
