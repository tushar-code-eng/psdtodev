import { useState, useEffect } from "react";
import HeroBlockSub1 from "./subComponents/HeroBlockSub1";
import HeroBlockSub2 from "./subComponents/HeroBlockSub2";
import HeroBlockSub3 from "./subComponents/HeroBlockSub3";

const HeroBlock = () => {
  const [number, setNumber] = useState(1);

  const calculateTimeLeft = () => {
    const difference = +new Date("2025-01-17T00:00:00") - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  const timerComponents: JSX.Element[] = [];

  if (Object.keys(timeLeft).length) {
    timerComponents.push(
      <span key="hours">{formatTime(timeLeft.hours)}</span>,
      <span key="separator1"> : </span>,
      <span key="minutes">{formatTime(timeLeft.minutes)}</span>,
      <span key="separator2"> : </span>,
      <span key="seconds">{formatTime(timeLeft.seconds)}</span>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <div className="text-xl md:text-sm lg:text-base xl:text-xl text-center font-bold text-[#14336d]">
        OFFERTA LIMITATA SCADE TRA
        <span className=" inline-block ml-1">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </span>
      </div>
      <div className="text-xl md:text-sm lg:text-base xl:text-xl text-center w-full font-extrabold text-[#00bd0e] py-1 xl:px-3 ">
        Richiedi un preventivo GRATUITO Compila il modulo ora
      </div>
      <div className="flex gap-1 items-center justify-center mt-2">
        <div className="px-4 py-1 rounded-[50%] bg-[#00bd0e] text-white flex items-center justify-center text-3xl md:text-2xl lg:text-3xl xl:text-4xl ">
          1
        </div>
        <div
          className={`bg-slate-800 h-[5px] transform transition-all duration-300 ease-out ${
            number >= 2 ? "w-10" : "w-0"
          } `}
        ></div>
        <div
          className={`bg-[#bfbfbf] h-[5px] transform transition-all duration-300 ease-out ${
            number >= 2 ? "w-0" : "w-10"
          } `}
        ></div>
        <div
          className={`px-4 py-1 rounded-[50%] border transform transition-all duration-500 delay-200 ease-in-out flex items-center justify-center text-3xl md:text-2xl lg:text-3xl xl:text-4xl ${
            number >= 2
              ? "bg-[#00bd0e] text-white"
              : "border-[#bfbfbf] text-[#838383]"
          } `}
        >
          2
        </div>
        <div
          className={`bg-slate-800 h-[5px] transform transition-all duration-300 ease-out ${
            number == 3 ? "w-10" : "w-0"
          } `}
        ></div>
        <div
          className={`bg-[#bfbfbf] h-[5px] transform transition-all duration-300 ease-out ${
            number == 3 ? "w-0" : "w-10"
          } `}
        ></div>
        <div
          className={`px-4 py-1 rounded-[50%] border transform transition-all duration-500 delay-200 ease-in-out flex items-center justify-center text-3xl md:text-2xl lg:text-3xl xl:text-4xl ${
            number == 3
              ? "bg-[#00bd0e] text-white"
              : "border-[#bfbfbf] text-[#838383]"
          } `}
        >
          3
        </div>
      </div>
      <div className={`w-full ${number == 1 ? "block" : "hidden"} xl:my-3`}>
        <HeroBlockSub1 number={number} setNumber={setNumber} />
      </div>
      <div className={` xl:w-3/4 ${number == 2 ? "block" : "hidden"}`}>
        <HeroBlockSub2 number={number} setNumber={setNumber} />
      </div>
      <div className={`w-full xl:w-3/4 ${number == 3 ? "block" : "hidden"}`}>
        <HeroBlockSub3 number={number} setNumber={setNumber} />
      </div>
    </div>
  );
};

export default HeroBlock;
