import React from 'react';

// components
import Timer from './components/Timer';
import ViewTimer from './components/ViewTimer';
import TimerContextProvider from './context/TimerContext.js';

function App() {
  return (
    <div className="App">
      <h1>Timer</h1>
      <TimerContextProvider>
        <Timer />
        <ViewTimer />
      </TimerContextProvider>
    </div>
  );
}

export default App;
