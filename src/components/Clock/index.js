import React, { useEffect, useState } from "react";
const Clock = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
 

  const formatTime = (time)=>{
    return time < 10 ? `0${time}` : time;
  }

  const handleDate = ()=>{
    //const { datediff } = props;
    const date = new Date();
    date.setHours(date.getHours());
    let hours = formatTime(date.getHours());
    let minutes = formatTime(date.getMinutes());
    let seconds = formatTime(date.getSeconds());
    setHours(hours)
    setMinutes(minutes)
    setSeconds(seconds)
  }
  useEffect(() => {
    const interVal = setInterval(() => {
      handleDate()
    }, 1000);

    return ()=>{
      clearInterval(interVal)
    }
  }, []);

 
  return (
    <>
      <div>
        <div>Digital Clock</div>
        <div className={"digital-clock"}>
          {hours}:{minutes}:{seconds}
        </div>
      </div>
      <div className="clock" style={{ width: "100%", alignContent: "center", left:'50%' }}>
        <div>Analog Clock</div>

        <div className={"analog-clock"}>
          <div className={"dial seconds"} style={{transform: `rotate(${seconds * 6}deg)`}} />
          <div className={"dial minutes"} style={{transform: `rotate(${minutes * 6}deg)`}} />
          <div className={"dial hours"} style={{transform: `rotate(${hours * 30}deg)`}} />
        </div>
        
      </div>
    </>
  );
};

export default Clock;
