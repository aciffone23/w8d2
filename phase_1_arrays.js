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
  let result = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

// let test2 = [-1, 4, 1, 0, -4];
// console.log(test2.twoSum());

Array.prototype.transpose = function() {
  let result = [];
  let numColLength = this[0].length; 
  let numRowLength = this.length;

  for (let col = 0; col < numColLength; col++ ){
    let newRow = [];
    for (let row = 0; row < numRowLength; row++) {
      newRow.push(this[row][col]);
    } 
    result.push(newRow);
  }
  return result;
}

// let test3 = [[1 , 2 , 3],[4, 5, 6], [7, 8, 9]];
// console.log(test3.transpose());

Array.prototype.myEach = function(callback){
  for (let i = 0; i < this.length; i++){
   callback(this[i]);
  };
}



function double(num) {
   console.log(num * 2);
}

function triple(num) {
  console.log(num * 3);
}

Array.prototype.myMap = function(callback) {
  // take in a callback 
  // use my each to iterate through callback (myEach.callback)
  // push result into a new array 
}
  

let test4 = [1,2,3];
test4.myEach(double);
test4.myEach(triple);
