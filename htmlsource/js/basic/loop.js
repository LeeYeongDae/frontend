// 반복문

for (let index = 1; index <= 10; index++) {
     if (index == 4)
          continue;
     if (index == 9)
          break;
     console.log(index);
}

let sum = 0;
for (let index = 1; index <= 100; index++) {
     sum += index;
}
console.log(sum);

let i = 1;
while (i <= 10) {
     console.log(i);
     i++;
}

sum = 0;
i = 1;
while (i <= 100) {
     sum += i;
}
console.log(sum);

i = 0;
do {
     i++;
     console.log(i);
} while (i < 3)


// for in : 객체 출력에
const myCar = { make: "BMW", model: "X5", year: 2023 };
let txt = "";
for (const key in myCar) {
     txt += myCar[key] + " ";
}
console.log("myCar ", txt);

const music = { singer: "Adele", time: "15", title: "Hello" };
for (const key in myCar) {
     console.log('${key} : ${music[key]}');
}

