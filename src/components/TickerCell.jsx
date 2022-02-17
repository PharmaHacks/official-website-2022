import React from 'react';
import style from '../styles/TickerCell.css';

export const TickerCell = ({ label, value }) => {
    const formattedValue = value < 10 ? `0${value}`: value.toString();

    return (
        <div className="tickerCell">
            <span className="tickerCellValue">{ formattedValue }</span>
            <span className="style.tickerCellLabel">{ label }</span>
        </div>
    );
}