function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  for (i = 0; i < arr.length; i++) {
    
   sum = sum + arr[i];

   if (min > arr[i]) {
    min = arr[i];
   } else if (max < arr[i]) {
    max = arr[i];
   } else {
    continue;
   }
  }

  avg = sum / arr.length;
  avg = Number(avg.toFixed(2));
  return { min: min, max: max, avg: avg };
}



function summElementsWorker(...arr) {
  let summElements = 0;
  for (i = 0; i < arr.length; i++) {
    summElements = summElements + arr[i];
  }
    return summElements;
}



  function differenceMaxMinWorker(...arr) {
    let minArr = arr[0];
    let maxArr = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (arr === undefined) {
        arr[i] = 0;
        
      } else if (arr.length === 0) {
        arr[i] = 0;
      } 
      
      else if (minArr > arr[i]) {
        minArr = arr[i];

      } else if (maxArr < arr[i]) {
        maxArr = arr[i];

      } else {
        continue;
      }
  } 

    let difference = maxArr - minArr;
    if (isNaN(difference)) {
      difference = 0;
    }
    console.log (difference);
    return difference;
}

  

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr === undefined) {
      arr[i] = 0;
      
    } else if (arr.length === 0) {
      arr[i] = 0;

    } else if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];

    } else {
      sumOddElement = sumOddElement + arr[i];
    }
  } 

  difference = sumEvenElement - sumOddElement;
  console.log(difference);
  console.log (sumEvenElement);
  console.log (sumOddElement);
  return sumOddElement, sumEvenElement, difference;
}


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let quantityEvenElements = 0;
  let avarage = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr === undefined) {
      arr[i] = 0;
      
    } else if (arr.length === 0) {
      arr[i] = 0;

    } else if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
      quantityEvenElements = quantityEvenElements + 1;

    } else {
      continue;
    }
  } 

  avarage = sumEvenElement / quantityEvenElements;
  if (isNaN(avarage)) {
    avarage = 0;
  }
  console.log(avarage);
  console.log (sumEvenElement);
  console.log (quantityEvenElements);
  return avarage;
}


function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let arr;
  for(let i = 0; i < arrOfArr.length; i++) {
    arr = arrOfArr[i];
    const result = func(...arr);
    if(result > maxWorkerResult) maxWorkerResult = result;
  }
  return maxWorkerResult;
}



  

