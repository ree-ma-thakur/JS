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

const findIntersection = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  const intersectionArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else {
      if (
        intersectionArr.length === 0 ||
        intersectionArr[intersectionArr.length - 1] !== arr1[i]
      ) {
        intersectionArr.push(arr1[i]);
      }
      i++;
      j++;
    }
  }
  return intersectionArr;
};
const arrA = [1, 2, 2, 3, 5];
const arrB = [2, 3, 3, 5, 7];
console.log("Intersection:", findIntersection(arrA, arrB));
