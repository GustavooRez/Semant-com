import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import React, { useRef, useState } from "react";
import "./styles.css"

const renderTime = ({ remainingTime }: any) => {

  const currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);
  const [, setOneLastRerender] = useState(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  // force one last re-render when the time is over to tirgger the last animation
  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender((val) => val + 1);
    }, 20);
  }

  const isTimeUp = isNewTimeFirstTick.current;

  return (
    <div className="time-wrapper">
      <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
        {remainingTime}
      </div>
      {prevTime.current !== null && (
        <div
          key={prevTime.current}
          className={`time ${!isTimeUp ? "down" : ""}`}
        >
          {prevTime.current}
        </div>
      )}
    </div>
  );
};

const Countdown = () => {

  const [isPlaying, setIsPlaying] = useState(true);

  const reloadPage = () => {
    window.location.reload()
  }

  const changeIsPlaying = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className='countdown' onClick={changeIsPlaying}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={60}
        size={50}
        strokeWidth={5}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[50, 25, 10, 5]}
        onComplete={reloadPage}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  )
}

export default Countdown;