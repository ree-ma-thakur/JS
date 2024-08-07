const subArr = (arr) => {
  let maxSum = arr[0];
  let currentSum = 0;
  let start = 0,
    end = 0,
    tempStart = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
    if (currentSum < 0) {
      currentSum = 0;
      tempStart = i + 1;
    }
  }
  return arr.slice(start, end + 1);
};

console.log(subArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
