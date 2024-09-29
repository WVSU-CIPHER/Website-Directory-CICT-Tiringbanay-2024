import { useEffect, useState } from "react";
import moment from "moment";

import { chopsic } from "@/app/layout";

export default function Countdown() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isTiringbanayDay, setIsTiringbanayDay] = useState(false);

  useEffect(() => {
    const targetDate = moment("2024-09-27 00:00:00", "YYYY-MM-DD HH:mm:ss");

    const updateCountdown = () => {
      const now = moment();
      const diffDays = targetDate.diff(now, "days");
      const diffHours = targetDate.diff(now, "hours") % 24;
      const diffMinutes = targetDate.diff(now, "minutes") % 60;
      const diffSeconds = targetDate.diff(now, "seconds") % 60;

      setTimeRemaining({
        days: diffDays,
        hours: diffHours,
        minutes: diffMinutes,
        seconds: diffSeconds,
      });

      // Check if today is between September 27 and 28
      const currentDate = now.format("YYYY-MM-DD");
      const eventStartDate = targetDate.format("YYYY-MM-DD");

      if (currentDate >= eventStartDate) {
        setIsTiringbanayDay(true);
      } else {
        setIsTiringbanayDay(false);
      }
    };

    // Update countdown every second
    const intervalId = setInterval(updateCountdown, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`w-full text-white text-center `}>
      {isTiringbanayDay ? (
        <div className="text-white font-semibold uppercase">game on!</div>
      ) : (
        <>
          <h1
            className={`font-normal ${chopsic.className} text-lg md:text-xl lg:text-2xl tracking-widest text-white`}
          >
            Countdown to September 27
          </h1>
          <p className={` text-transparent text-white text-lg font-semibold`}>
            {timeRemaining.days} D, {timeRemaining.hours} H,{" "}
            {timeRemaining.minutes} M, {timeRemaining.seconds} S
          </p>
        </>
      )}
    </div>
  );
}
