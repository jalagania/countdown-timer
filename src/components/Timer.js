import "./Timer.css";

function Timer(props) {
  return (
    <div className="timer">
      <div className="timer-box">
        <p className="days">{props.days}</p>
        <div className="overlay"></div>
      </div>
      <div className="timer-box">
        <p className="hours">{props.hours}</p>
        <div className="overlay"></div>
      </div>
      <div className="timer-box">
        <p className="minutes">{props.minutes}</p>
        <div className="overlay"></div>
      </div>
      <div className="timer-box">
        <p className="seconds">{props.seconds}</p>
        <div className="overlay"></div>
      </div>
      <p className="box-title">Days</p>
      <p className="box-title">Hours</p>
      <p className="box-title">Minutes</p>
      <p className="box-title">Seconds</p>
    </div>
  );
}

export default Timer;
