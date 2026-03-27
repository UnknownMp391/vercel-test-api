import { Time } from "../../types/time";


export function parseTimeFromYMDString(str: string): Time {
  const dates = str.trim().split('-')

  return {
    year: parseInt(dates[0] || (() => { throw new TypeError('Error when parse year') })()),
    month: parseInt(dates[1] || (() => { throw new TypeError('Error when parse month') })()),
    date: parseInt(dates[2] || (() => { throw new TypeError('Error when parse date') })())
  }
}
