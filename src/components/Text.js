import React, { useState, useEffect } from 'react'

export default function Text(props) {
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    useEffect(() => {
        setMin(props.min);
        setSec(props.sec);
    }, [])

    const timeIsRemaining = () => {
        if(min <= 0 && sec <= 0){
            return false;
        }
        return true;
    }

    useEffect(() => {
            const timer = setInterval(() => {
                if(sec > 0 || min > 0) {
                    if(sec === 0 && min > 0) {
                        setSec(59);
                        setMin(min-1);
                    } else {
                        setSec(sec-1);
                    }
                }
                clearInterval(timer);
            }, 1000);
    }, [min, sec]);

    return (
        <h2>
            <span>{timeIsRemaining ? min : 0}:</span>
            <span>{timeIsRemaining ? sec : 0}</span>
        </h2>
    )
}
