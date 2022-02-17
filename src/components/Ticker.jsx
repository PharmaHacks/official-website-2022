import React from 'react';
import { TickerCell } from '../components/TickerCell';
import { TickerSeparator } from '../components/TickerSeparator';
import { useTicker } from '../components/useTicker';

import style from '../styles/Ticker.css';

export const Ticker = ({ futureDate }) => {
    const { days, hours, minutes, seconds, isTimeUp } = useTicker(futureDate);
    const tickerContents = isTimeUp ? (
        <div className="timeIsUp">Applications are now closed</div>
    ) : (
        <>
            <TickerCell value={days} label="Days" />
            <TickerSeparator />
            <TickerCell value={hours} label="Hours" />
            <TickerSeparator />
            <TickerCell value={minutes} label="Minutes" />
            <TickerSeparator />
            <TickerCell value={seconds} label="Seconds" />
        </>
    );

    return (
        <div className="tickerShell">
            { tickerContents }           
        </div>              
    );
}