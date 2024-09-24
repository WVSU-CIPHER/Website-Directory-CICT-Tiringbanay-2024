// extractors
import moment from "moment";
export const extractHour = (time) => time.slice(0, 2);
export const extractMinutes = (time) => time.slice(3, 5);
export const extractTimeFormat = (time) => time.slice(14, 15);


export default function isTimeMatchedQuery(program) {
    // Day of the event
    const targetDate = moment('2024-09-27', 'YYYY-MM-DD').format("YYYY-MM-DD");
    const now = moment();

    // Current times
    const currentDate = now.format("YYYY-MM-DD");
    const currentTime = now.format("hh:mm");
    const currentTimeFormat = now.format("A"); // to extract AM or PM

    // Time Schedule of program object
    const timeSchedTimeFormat = program.time.slice(14, 16); // to extract AM or PM
    // Extract the first two diit in  time from the schedule
    const timeSchedRange1 = program.time.slice(0, 5); // eg. 07
    const timeSchedRange2 = program.time.slice(8, 13); // eg. 08

    // Fuck u whoever reads this 
    const isTiringbanayDay = targetDate === currentDate;
    const isTimeSchedMatched = currentDate === targetDate && (currentTime >= timeSchedRange1 && currentTime <= timeSchedRange2) && timeSchedTimeFormat === currentTimeFormat
    return isTimeSchedMatched
}
