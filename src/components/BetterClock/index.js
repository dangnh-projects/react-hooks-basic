import React from 'react';
import useClock from '../../hooks/useClock';
import './BetterStyle.scss';

const BetterClock = () => {
    const {timeString} = useClock();

    return (
        <div className="better-clock">
            <p className="better-clock__time" style={{fontSize: "42px"}}>{timeString}</p>
        </div>
    )
}

export default BetterClock;