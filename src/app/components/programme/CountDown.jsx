import { useEffect, useState } from "react";
import moment from "moment";

import { chopsic } from "@/app/layout";
import { poppins } from "@/app/layout";

export default function Countdown() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
    };

    // Update countdown every second
    const intervalId = setInterval(updateCountdown, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`w-full text-white  text-lg text-center text-transparent bg-clip-text bg-gradient-to-br from-[#81ECDE] to-[#59958480] drop-shadow`}
    >
      <h1
        className={`font-normal ${chopsic.className} text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-br text-white`}
      >
        Countdown to September 27
      </h1>
      <p
        className={` text-transparent bg-clip-text bg-gradient-to-br text-white text-lg md:text-xl lg:text-2xl font-medium uppercase`}
      >
        {timeRemaining.days} days, {timeRemaining.hours} hours,{" "}
        {timeRemaining.minutes} minutes, {timeRemaining.seconds} seconds
      </p>
    </div>
  );
}
