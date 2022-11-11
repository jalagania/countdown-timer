import { useState, useEffect } from "react";
import Attribution from "./components/Attribution";
import SocialIcons from "./components/SocialIcons";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  const [days, setDays] = useState("14");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  function startTimer() {
    // We're Launching In 14 Days

    let time = 14 * 24 * 60 * 60;

    const timer = setInterval(() => {
      const numDays = Math.trunc(time / (24 * 60 * 60));
      const numHours = Math.trunc((time - numDays * 24 * 60 * 60) / (60 * 60));
      const numMinutes = Math.trunc(
        (time - numDays * 24 * 60 * 60 - numHours * 60 * 60) / 60
      );
      const numSeconds =
        time - numDays * 24 * 60 * 60 - numHours * 60 * 60 - numMinutes * 60;

      setDays(String(numDays).padStart(2, "0"));
      setHours(String(numHours).padStart(2, "0"));
      setMinutes(String(numMinutes).padStart(2, "0"));
      setSeconds(String(numSeconds).padStart(2, "0"));

      if (time === 0) {
        clearInterval(timer);
      }

      time--;
    }, 1000);
  }

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>We're launching soon</h1>
      </header>
      <Timer days={days} hours={hours} minutes={minutes} seconds={seconds} />
      <SocialIcons />
      <Attribution />
    </div>
  );
}

export default App;
