// 조건문
// true : true 자료들, 0 제외 숫자, '문자', [], ()
// false : false 자료들, 0, '', null, undefined, NaN

const date = new Date();
console.log(date);
const hour = date.getHours();

if (hour < 12) {
     console.log("오전")
} else {
     console.log("오후")
}

// NaN(Not a Number)
console.log(isNaN("12"));
console.log(isNaN("abc"));

switch (date.getDay()) {
     case 1:
          day = "Monday";
          break;
     case 2:
          day = "Tuesday";
          break;
     case 3:
          day = "Wednesday";
          break;
     case 4:
          day = "Thursday";
          break;
     case 5:
          day = "Friday";
          break;
     case 6:
          day = "Saturday";
          break;
     case 7:
          day = "Sunday";
          break;
}
console.log("오늘은 " + day);