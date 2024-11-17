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
    return `${hours}:${minutes}:${seconds} ${regular}`
  }
  return (
    <div className="clock-container">
      <div className="clock">
        <span>00:00:00</span>
      </div>
    </div>
  );
}
export default DigitalClock;
