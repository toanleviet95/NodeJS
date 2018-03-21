// Đếm số chữ số chẵn và lẻ của một số N

function CountOddAndEvenOfNum(number) {
  var absNum = Math.abs(number);
  var countOdd = 0;
  var countEven = 0;
  var lengthOfNum = 0;
  var element = 0;
  while(number > 0) {
    number = Math.floor(number / 10);
    lengthOfNum++;
  }
  for (var j = 1; j <= lengthOfNum; j++) {
      element = absNum % 10;
      absNum =  Math.floor(absNum / 10);
      if (element % 2 == 0) {
        countEven++;
      } else {
        countOdd++;
      }
  }
  return {
      countEven: countEven,
      countOdd: countOdd
  };
};

console.log('CountOddAndEvenOfNum(1456232):',CountOddAndEvenOfNum(1456232));

// Tìm phần tử lớn thứ K trong mảng

function FindSpecificRankOfArray(rank, array) {
  var pos = 0;
  var temp = 0;
  var copyArr = array.slice();
  for (var i = 0; i < array.length; i++) {
    for(var j = i + 1; j < array.length; j++) {
      if(array[i] < array[j]) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp; 
      }
    }
    
    if(array[i] < array[temp]) {
      rank--;
      if(rank == 1) {
        pos = i;
        break;
      }
      temp = i;
    }
  }
  return copyArr[pos];
};

console.log('FindSpecificRankOfArray(5, [1, 1, 2, 3, 4]):', FindSpecificRankOfArray(5, [1, 1, 2, 3, 4]));

// Tìm ước chung lớn nhất của 2 số
function GreatestCommonDivisor(numA, numB) {
  if(numB === 0) {
    return numA;
  }
  if(numA % numB === 0) {
    return numB;
  }
  return GreatestCommonDivisor(numB, numA%numB);
}

console.log('GreatestCommonDivisor(3, 9):', GreatestCommonDivisor(3, 9));