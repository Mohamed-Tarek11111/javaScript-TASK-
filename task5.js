//..........المسالة 1.........
function factorial(x) {
  var result = 1;
  for (var i = x; i > 0; i--) {
    result *= i;
  }

  return result;
}
console.log(factorial(5));
console.log(factorial(3));

//........المسالة2........
function getMinMax(array) {
  if (array == "" || array == null) {
    let max = 0;
    let min = 0;
    return [min, max];
  } else {
    let min = array[0];
    let max = 0;
    let n = array.length;
    for (let i = 0; i < n; i++) {
      if (min > array[i]) {
        min = array[i];
      }
      if (max < array[i]) {
        max = array[i];
      }
    }
    return [min, max];
  }
}
console.log(getMinMax([4, 5, 2, 3, 7]));
console.log(getMinMax([10, 3, 55, 23, 55]));
console.log(getMinMax([5]));
console.log(getMinMax([]));




//---------------------------
// طريقه التانية

// // factorial (easy)

// function factorial(num) {
//   if (typeof num != "number") return "Invalid type";

//   let total = 1;
//   for (let i = 1; i <= num; i++) {
//     total *= i;
//   }

//   return total;
// }

// console.log(factorial(5));


//---------------------------
// طريقه التانية

// getMinMax (hard)

// function getMinMax(arr) {
//   if (!Array.isArray(arr)) return "Invalid type";

//   if (arr.length < 1) return [0, 0];

//   let min = arr[0];
//   let max = arr[0];

//   for (const number of arr) {
//     if (min > number) min = number;

//     if (max < number) max = number;
//   }

//   return [min, max];
// }

// console.log(getMinMax([0, 1, 2, 3, 4, 5]));
// console.log(getMinMax([]));
// console.log(getMinMax([5]));




