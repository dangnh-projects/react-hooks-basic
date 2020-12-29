import { useEffect, useState } from 'react';

const getTimeNow = (date) => {
    if(!date) return '';
    
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return(`${hours}:${minutes}:${seconds}`)
}

const useClock = () => {
    const [timeString, setTimeString] = useState('');
    useEffect(() => {
        const ClockInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = getTimeNow(now);
            console.log(newTimeString);
            
            setTimeString(newTimeString);
        }, 1000)

        return () => {
            console.log('Clear Interval');
            clearInterval(ClockInterval);
        }
    }, [])
    return {timeString};
}

export default useClock;