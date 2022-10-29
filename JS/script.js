console.warn("Homework №1");

let arr = [1, [2, [3, 4]], 5, [[6, 7, [8]]]];
let arr_filter = [];

for (let item of arr) {
  if (typeof item !== "number") {
    for (let item2 of item) {
      if (typeof item2 !== "number") {
        for (let item3 of item2) {
          if (typeof item3 !== "number") {
            for (let item4 of item3) {
              arr_filter.push(item4);
            }
          } else arr_filter.push(item3);
        }
      } else arr_filter.push(item2);
    }
  } else arr_filter.push(item);
}
console.log(arr_filter);

console.warn("Homework №2");

let zvezda = "*";

for (let result = zvezda; result.length != 5; ) {
  console.log(result);
  document.write(`<h1>${result}</h1>`);
  result += zvezda;
}
