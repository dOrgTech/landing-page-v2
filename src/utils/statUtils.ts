
export const formatStat = (num: number, postfix?: string, formatter?: Intl.NumberFormat): string => {
  const post = postfix ? postfix : ''
  if (formatter) {
    return formatter.format(num) + post;
  } else {
    return num.toString() + post;
  }
}

export const getIncrement = (stat: number): number => {
  if (stat % 1 === 0) {
    return Math.ceil(stat / 50);
  } else {
    return Math.round( 10 * stat / 50) / 10;
  }
}

export const getWildNumber = (stat: number): number => {
  if (stat % 1 === 0) {
    return Math.floor(Math.random() * stat);
  } else {
    return Math.round(Math.random() * stat * 10) / 10;
  }
}

// based on solution found at https://stackoverflow.com/questions/2536379/difference-in-months-between-two-dates-in-javascript
export function getMonthsTogether(endDate: Date, roundUpFractionalMonths=false): number {
  const startDate = new Date('Jan 29, 2019');

  //Calculate the differences between the start and end dates
  const yearsDifference = endDate.getFullYear() - startDate.getFullYear();
  const monthsDifference = endDate.getMonth() - startDate.getMonth();
  const daysDifference = endDate.getDate() - startDate.getDate();

  let monthCorrection = 0;
  //If roundUpFractionalMonths is true, check if an extra month needs to be added from rounding up.
  //The difference is done by ceiling (round up), e.g. 3 months and 1 day will be 4 months.
  if (roundUpFractionalMonths && daysDifference > 0) {
    monthCorrection = 1;
  }
  //If the day difference between the two months is negative, the last month is not a whole month.
  else if (!roundUpFractionalMonths && daysDifference < 0) {
    monthCorrection = -1;
  }

  return yearsDifference * 12 + monthsDifference + monthCorrection;
}