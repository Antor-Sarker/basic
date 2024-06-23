//Switch Statements
function getDayName(day) {
  switch (day) {
    case 1:
      return "Sunday";
      break;

    case 2:
      return "Monday";
      break;

    case 3:
      return "Tuesday";
      break;

    case 4:
      return "Wednessday";
      break;

    case 5:
      return "Thursday";
      break;

    case 6:
      return "Friday";
      break;

    case 7:
      return "Saturday";
      break;

    default:
      return "please input 1-7";
      break;
  }
}

console.log(getDayName(3)); // Tuesday
console.log(getDayName(7)); // Saturday
