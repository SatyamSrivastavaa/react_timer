import React, {useState, useContext} from 'react';

// context
import { TimerContext } from '../context/TimerContext.js';

const Timer = () => {
    const {setMinutes, setSeconds, setStartTimer} = useContext(TimerContext);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    const handleChange = ({target: {value, name}}) => {
        if(value <= 60) {
            if(name === 'minutes') {
                setMin(value);
            } else {
                setSec(value);
            }
        }
    }

    const startTimer = () => {
        setSeconds(sec)
        setMinutes(min);
        setStartTimer(true);
    }

    const resetTimer = () => {
        setMin(0);
        setSec(0);
        setStartTimer(false);
    }

    return (
        <>
            <input type="number" name="minutes" value={min} onChange={handleChange} placeholder="minutes" />
            <input type="number" name="seconds" value={sec} onChange={handleChange} placeholder="seconds" />
            <br />
            <button onClick={startTimer}>Start</button>
            <button onClick={resetTimer}>Reset</button>
        </>
    )
}

export default Timer;