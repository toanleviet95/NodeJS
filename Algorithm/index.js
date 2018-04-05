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

// Tìm phần tử lớn thứ 2 trong mảng
function FindSecondElementOfArray(array) {
  var first = array[0];
  var second = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > first) {
      second = first;
      first = array[i];
    }

    if(array[i] > second && array[i] < first) {
      second = array[i];
    }
  }
  return second;
};

console.log('FindSecondElementOfArray([1, 1, 1, 3, 2, 5]):', FindSecondElementOfArray([1, 1, 1, 3, 2, 5]));

// Tìm phần tử lớn thứ K trong mảng
function FindSpecificRankOfArray(rank, array) {
  var pos = 0;
  var mark = 0;
  for (var i = 0; i < array.length - 1; i++) {
    for(var j = i + 1; j < array.length; j++) {
      if(array[i] < array[j]) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp; 
      }
    }
    if(array[i] < array[mark]) {
      rank--;
      if(rank === 1) {
        pos = i;
        break;
      }
      mark = i;
    }
  }
  return array[pos];
};

console.log('FindSpecificRankOfArray(3, [2, 3, 6, 6, 5]):', FindSpecificRankOfArray(3, [2, 3, 6, 6, 5]));

// Tìm phần tử nhỏ thứ K trong mảng
function FindRankSmallestElementOfArray(rank, array) {
  var pos = 0;
  var mark = 0;
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    if (array[mark] < array[i]) {
      rank--;
      if (rank === 1) {
        pos = i;
        break;
      }
      mark = i;
    }
  }
  return array[pos];
}

console.log('FindRankSmallestElementOfArray(3, [2, 3, 6, 6, 5]):', FindRankSmallestElementOfArray(3, [2, 3, 6, 6, 5]));

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

// Xóa những phần tử trùng nhau trong mảng
function UniqeArray(array) {
  var seen = {};
  var out = [];
  var len = array.length;
  var j = 0;
  for(var i = 0; i < len; i++) {
       var item = array[i];
       if(seen[item] !== 1) {
             seen[item] = 1;
             out[j++] = item;
       }
  }
  return out;
}

console.log('UniqeArray([1, 2, 1, 1, 3]):', UniqeArray([1, 2, 1, 1, 3]));

// Tìm những phần tử có trong cả 2 mảng A và B
function CommonElementsOfTwoArrays(arrayA, arrayB) {
  var result = [];
  for(var i = 0; i < arrayA.length; i++) {
    for (var j = 0; j < arrayB.length; j++) {
      if(arrayA[i] === arrayB[j]) {
        result.push(arrayA[i])
      }
    }
  }
  result = UniqeArray(result);
  return result;
}

console.log('CommonElementsOfTwoArrays([1, 2, 4, 5], [1, 2, 2, 4]):', CommonElementsOfTwoArrays([1, 2, 4, 5], [1, 2, 2, 4]));

// Tìm những phần tử có trong mảng A nhưng không có trong mảng B
function DifferElementsOfTwoArrays(arrayA, arrayB) {
  var result = [];
  for(var i = 0; i < arrayA.length; i++) {
    for (var j = 0; j < arrayB.length; j++) {
      if(arrayA[i] === arrayB[j]) {
        break;
      }
      if (j === arrayB.length - 1) {
        result.push(arrayA[i])
      }
    }
  }
  result = UniqeArray(result);
  return result;
}

console.log('DifferElementsOfTwoArrays([1, 5, 4, 4], [1, 2, 2, 4]):', DifferElementsOfTwoArrays([1, 2, 4, 5], [1, 2, 2, 4]));

// Xóa những phần tử có trong mảng A và B
function RemoveSameElementsOfTwoArrays(arrayA, arrayB) {
  var index;
  arrayA = UniqeArray(arrayA);
  arrayB = UniqeArray(arrayB);
  for (var i = 0; i< arrayB.length; i++) {
      index = arrayA.indexOf(arrayB[i]);
      if (index > -1) {
        arrayA.splice(index, 1);
        arrayB.splice(index, 1);
      }
  }
  return {
    arrayA: arrayA,
    arrayB: arrayB
  }
}

console.log('RemoveSameElementsOfTwoArrays([1, 1, 1, 2], [1, 4, 5]):', RemoveSameElementsOfTwoArrays([1, 1, 1, 2], [1, 4, 5]));

// Kiểm tra mảng con tăng
function IsUpperArray(array, from, to) {
  for(var i = from; i < to - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

// Tìm những mảng con tăng
function ListUpperArrays(array) {
  result = [];
  for(var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if(IsUpperArray(array, i, j) === true) {
        var arr = [];
        for(var k = i; k < j; k++) {
          arr.push(array[k])
        }
        if (arr.length > 1) {
          result.push(arr);
        }
      }
    }
  }
  return result;
}

console.log('ListUpperArrays([1, 2, 3, 4, 7, 6]):', ListUpperArrays([1, 2, 3, 4, 7, 6]));

// Tìm mảng con tăng dài nhất
function FindLongestUpperArray(array) {
  var u = 0;
  var v= 0;
  var lengthMax = v - u;
  var result = [];
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if(IsUpperArray(array, i, j) && j - i > lengthMax) {
        lengthMax = j - i;
        u = i;
        v = j;
      }
    }
  }
  for(var k = u; k < v; k++) {
    result.push(array[k]);
  }
  return result;
}

console.log('FindLongestUpperArray([1, 2, 2, 3, 5, 4, 7, 6]):', FindLongestUpperArray([1, 2, 2, 3, 5, 4, 7, 6]));

// Kiểm tra số nguyên tố
function IsPrimeNumber(number) {
  var count = 0;
  if (number < 2) return false;
  for (var i = 2; i <= number/2; i++) {
    if(number % i === 0) {
      count++;
    }
  }
  if (count > 0) {
    return false;
  }
  return true;
}

console.log('IsPrimeNumber(6):', IsPrimeNumber(6));

// Kiểm tra số chính phương
function IsNumberOfPoles(number) {
  for(var i = 1; i <= number/2; i++) {
    if (i * i === number) {
      return true;
    }
  }
  return false;
}

console.log('IsNumberOfPoles(81):', IsNumberOfPoles(81));

// Kiểm tra số hoàn thiện
function IsFinishingNumber(number) {
  var sum = 0;
  for (var i = 1; i < number; i++) {
    if(number % i === 0) {
      sum += i;
    }
  }
  return (number === sum)
}

console.log('IsFinishingNumber(6):', IsFinishingNumber(6));

// Tìm tần suất xuất hiện các phần tử trong mảng
function RateOfElementsInArray(array) {
  var seen = {};
  for(var i = 0; i < array.length; i++) {
    var item = array[i];
    if(seen[item]) {
      seen[item] = seen[item] + 1;
    } else {
      seen[item] = 1;
    }
  }
  return seen;
}

console.log('RateOfElementsInArray([1,2,3,1,1,2,2,4,5,1]):', RateOfElementsInArray([1,2,3,1,1,2,2,4,5,1]));

// Tìm phần tử xuất hiện nhiều nhất trogn mảng
function BestRateElementInArray(array) {
  var seen = RateOfElementsInArray(array);
  var max = seen[array[0]];
  for (var key in seen) {
    if(seen[key] > max) {
      max = seen[key];
    }
  }
  return Object.keys(seen)[Object.values(seen).indexOf(max)];
}

console.log('BestRateElementInArray([1,2,3,1,2,2,4,5,1]):', BestRateElementInArray([1,2,3,1,2,2,4,5,1]));

// Tính lũy thừa bằng đệ quy
function PowerOfNumber(number, n) {
  if (n === 0) return 1;
  return number * PowerOfNumber(number, n - 1);
}

console.log('PowerOfNumber(4, 2):', PowerOfNumber(4, 2));

// Tính giai thừa bằng đệ quy
function FactorOfNumber(number) {
  if (number === 0) return 1;
  return number * FactorOfNumber(number - 1);
}

console.log('FactorOfNumber(3):', FactorOfNumber(3));

// Kiểm tra cặp kí tự '(' và ')'
function checkPairOfChar(input) {
  var result = 0;

  if (input[0] === ')' && input[input.length - 1] === '(') {
    return false;
  }

  for(var i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      result = result - 1;
    }
    if (input[i] === ')') {
      result = result + 1;
    }
  }

  return result === 0 ? true : false;
}

console.log('checkPairOfChar("()()()()(())"):', checkPairOfChar("()()()()(())"));

// Tìm ra mảng con liên tiếp của một mảng có số phần tử K sao cho tổng các phần tử là lớn nhất
function UpperArrayHavingSumMax(array, k) {
  var listArrays = [];
  var result = [];
  var max = 0; 
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (IsUpperArray(array, i, j) && (j - i === k)) {
        var temp = [];
        var sum = 0;
        for (var t = i; t < j; t++) {
          temp.push(array[t]);
          sum += array[t];
        }
        if (sum > max) {
          max = sum;
          result = temp.slice(0);
        }
      }
    }
  }
  return result;
}

console.log('UpperArrayHavingSumMax([1, -5, 4, 3, 6, 8, 2, 4], 3):', UpperArrayHavingSumMax([1, -5, 4, 3, 6, 8, 2, 4], 3));