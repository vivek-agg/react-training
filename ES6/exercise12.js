/* Parse the day, month and year from the date (’2025-09-26’) */

function parseDate(dateArray) {
  [year, month, day] = dateArray;
  console.log(year, month, day);
}

parseDate("2025-09-26".split("-"));
