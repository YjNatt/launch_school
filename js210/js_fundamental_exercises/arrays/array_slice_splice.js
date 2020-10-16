let slice = function(array, beginIndex, endIndex) {
  if (beginIndex > array.length) beginIndex = array.length;
  if (endIndex > array.length) endIndex = array.length;

  let slicedArray = [];

  for (let index = beginIndex; index < endIndex; index += 1) {
    slicedArray.push(array[index]);
  }

  return slicedArray;
};

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]
// 
// const arr1 = [1, 2, 3]
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

 let splice = function(array, start, deleteCount, ...elementN) {
   if (start > array.length) start = array.length;
   if (deleteCount + start > array.length) deleteCount = (array.length - start);

   let firstHalf = [];
   let deletedElements = [];
   let count = start;

   while (count > 0) {
     firstHalf.push(array.shift());
     count -= 1;
   }

   while (deleteCount > 0) {
     deletedElements.push(array.shift());
     deleteCount -= 1;
   };

   while (elementN.length > 0) {
     array.unshift(elementN.shift());
   }

   while (firstHalf.length > 0) {
     array.unshift(firstHalf.pop());
   }

   return deletedElements;
 }
 
// console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));              // []
// console.log(splice([1, 2, 3], 0, 1));              // [1]
// console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

 const arr2 = [1, 2, 3];
 console.log(splice(arr2, 1, 1, 'two'));             // [2]
 console.log(arr2);                                  // [1, "two", 3]

 const arr3 = [1, 2, 3];
 console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
 console.log(arr3);                                  // [1, "two", "three"]

 const arr4 = [1, 2, 3];
 console.log(splice(arr4, 1, 0));                    // []
 console.log(splice(arr4, 1, 0, 'a'));               // []
 console.log(arr4);                                  // [1, "a", 2, 3]

 const arr5 = [1, 2, 3];
 console.log(splice(arr5, 0, 0, 'a'));               // []
 console.log(arr5);                                  // ["a", 1, 2, 3]
