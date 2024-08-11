import { useState, useEffect } from 'react';

export default function Timer({ reset }) {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (reset) {
            setSeconds(0); 
        }

        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [reset]);

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;

    return (
        <div className="seconds-counter">
            <h1 className="text-3xl font-bold">{formattedTime}</h1>
        </div>
    );
}
