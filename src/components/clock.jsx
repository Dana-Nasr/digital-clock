import { useEffect } from "react";
import { useState } from "react";
import "../styles/clock.css";
function DigitalClock() {
  const [time, setTime] = useState(new Date()); //current date
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000); //repeat every 1s
    return () => {
      clearInterval(intervalID); //free up resources if we unmount the clock comp
    };
  }, []); //start only on mount

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const regular = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${regular}`;
  }
  function padZero(number) {
    return (number < 10 ? "0" : "" ) + number;
  }
  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}
export default DigitalClock;
