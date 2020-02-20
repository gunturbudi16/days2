function cariMean(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return Math.round(sum / arr.length);
  // you can only write your code here!
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7

function cariMedian(arr) {
  var median = arr.length / 2;
  for (var i = 0; i < arr.length; i++) {
    if (arr.length % 2 === 0) {
      return (arr[median] + arr[median - 1]) / 2;
    } else {
      return arr[median - 0.5];
    }
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

function cariModus(arr) {
  var frekuensi = 0;
  var greaterFrekuensi = 0;
  var modus = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        frekuensi++;
      }
      if (frekuensi > greaterFrekuensi) {
        greaterFrekuensi = frekuensi;
        modus = i;
      }
    }
  }

  if (modus === 0) {
    return "Tidak Ada Angka yang sama";
  }

  var angkaSama = 0;
  for (var k = 0; k < arr.length; k++) {
    angkaSama += arr[k];
    if (angkaSama / arr.length === arr[k]) {
      return "Semua Angka Sama";
    }
  }
  return arr[modus];
  // you can only write your code here!
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

//cara kedua cari modus dengan object

function modusBanyak(angka) {
  var obj = {};
  for (var i = 0; i < angka.length - 1; i++) {
    if (!obj[angka[i]]) {
      obj[angka[i]] = 1;
    } else {
      obj[angka[i]]++;
    }
  }

  var max = null;
  for (var key in obj) {
    if (obj[key] > max) {
      max = obj[key];
    }
  }
  var hasil = [];
  for (var key in obj) {
    if (obj[key] == max) {
      hasil.push(key);
    }
  }
  return hasil;
}
console.log(modusBanyak([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])); // [ 9, 3, 3, 4, 2, 5, 5, 5 ]
console.log(modusBanyak([22, 22, 100, 100, 100, 2000])); // [ 22, 22, 2000 ]
console.log(modusBanyak([2, 2])); // []
console.log(modusBanyak([4, 4, 4, 1, 1, 1, 2, 2])); // [ 1, 1, 1, 2, 2 ]
