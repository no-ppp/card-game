import { useState, useEffect } from "react";

export function Time() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const resetTimer = () => {
    setSeconds(0);
  };
  return (
    <div className="flex justify-center items-center col-span-4 font-frijole">
      <p className="text-2xl">time:</p>
      <p className="text-4xl">{seconds}</p>
      {/*for testing purpose*/}
      <button onClick={resetTimer}>aaaa</button>
    </div>
  );
}
