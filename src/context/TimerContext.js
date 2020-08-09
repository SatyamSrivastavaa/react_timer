import React, {createContext, useState} from 'react';

export const TimerContext = createContext();

const TimerContextProvider = (props) => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [startTimer, setStartTimer] = useState(false);

    return (
        <TimerContext.Provider value={{
            minutes,
            seconds,
            startTimer,
            setMinutes,
            setSeconds,
            setStartTimer
        }}>
            {props.children}
        </TimerContext.Provider>
    )
}

export default TimerContextProvider;