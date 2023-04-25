Array.prototype.myUniq = function () {
  let unique = [];
  this.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
};

// let test = [1, 2, 3, 4, 1, 3, 5];
// console.log(test.myUniq());

Array.prototype.twoSum = function () {
  // let result = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        return [i, j];
      }
    }
  }
};

let test2 = [-1, 4, 1, 0];
console.log(test2.twoSum());
