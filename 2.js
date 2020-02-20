function check(array, index) {
  var hasil = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < index.length; j++) {
      if (i == j && index[j] == true) {
        hasil.push(array[i]);
      }
    }
  }
  return `${hasil}`;
}
console.log(
  check(["Guntur", "Budi", "Asshole", "Individu"], [true, false, true, false])
);
