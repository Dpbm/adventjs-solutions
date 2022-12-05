const {sum} = require('lodash');

function countHours(year, holidays){

  const totalHour = sum(holidays.map((holiday) => {
    const newYearsHoliday = `12/31/${year}`; 

    const dateString = `${holiday}/${year}`;
    const date = new Date(dateString);

    const weekDay = date.getDay(date);

    return weekDay === 0 || weekDay === 6 || dateString === newYearsHoliday ? 0 : 2;

  }));

  return totalHour;
}

module.exports = countHours;

