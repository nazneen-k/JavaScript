function secondLargest(arr) {
  let largest = arr[0];
  let secondLarge = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLarge = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLarge) {
      secondLarge = arr[i];
    }
  }
  return secondLarge;
}

let result = secondLargest([1, 23, 45, 23, 56, 5, 1]);

console.log(result);
