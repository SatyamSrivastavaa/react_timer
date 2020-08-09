import React, { useState, useContext, useEffect } from 'react';

// context
import {TimerContext} from '../context/TimerContext.js';

// components
import Text from './Text.js';

const ViewTimer = () => {
    const {minutes, seconds, startTimer} = useContext(TimerContext);

    return (
        <>
        {startTimer && <Text min={minutes} sec={seconds}/>}
        </>
    )
}

export default ViewTimer;
