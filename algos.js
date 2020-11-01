//F to C--------------------------------------
// function convertToF(celsius){
//     let fahrenheit = celsius * 9/5 +32;
//     return fahrenheit;
// }
// console.log("Fahrenheit is " + convertToF(40) + " degrees");

//reverse a string-----------------------------
// function reverseString(str){
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("hello"))

//factorialize a number-----------------------------
// function factorialize(num){
//     let product = 1;
//     for(let i=1;i<=num;i++){
//         product *= i;
//     }
//     return product;
// }
// console.log(factorialize(5));

//find longets word in string-----------------------------
// function findLongestWordLength(str){
//     let max = -Infinity;
//     let maxWord = '';
//     const arr = str.split(' ')
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i].length>max){
//             maxWord = arr[i];
//             max= arr[i].length;
//         }
//     }
//     return maxWord;
// }
// function mapToLength(elem){
//     return elem.length;
// }
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//return largets numbers in arrays---------------
// function largestOfFour(arr){
//     let arrOfMax = [];
//     for(let i=0;i<arr.length;i++){
//         let max = -Infinity;
//         for(let j=0; j<arr[i].length;j++){
//             if(arr[i][j]> max){
//                 max= arr[i][j]
//             }
//         }
//         arrOfMax.push(max);
//     }
//     return arrOfMax;
// }
// console.log(largestOfFour([
//     [4,5,1,3]
//     ,[13,27,18,26],
//     [32,35,37,39],
//     [1000,1001,857,1]]));

//confirm the ending-----------------------
// function confirmEnding(str,target){
//     return str.substr(-target.length) ===target;
// }
// console.log(confirmEnding("Bastian","n"))
//or
// function confirmEnding(str,target){
//         return str.slice(str.length-target.length) ===target;
//     }
//     console.log(confirmEnding("Bastian","n"))

//repeat string repeat a string----------------------
// function repeatStringNumTimes(str,num){
//     if(num<0)return "";
//     return new Array(num).fill(str).join('');
// }
// console.log(repeatStringNumTimes("abc",3))
//or
// function repeatStringNumTimes(str,num){
//     if(num<0)return "";
//     let finalString = '';
//     for(let i =0; i<num; i++){
//         finalString += str;
//     }
//     return finalString;
// }
// console.log(repeatStringNumTimes("abc",3))

//truncate string ----------------------------
// function truncateString(str,num){
//     if(str.length > num){
//         str = str.slice(0,num)+ '...'
//     }
//     return str;
// }
// console.log(truncateString("a-tisket a-tasket a green and yellow basket",8));

//finders Keepers---------------------------
// function findElement(arr, func){
//     return arr.filter(func)[0];
// }
// console.log(findElement([1,2,3,4], num=> num % 2===0));

//find boolean ---------------------------
// function booWhoo(bool){
//     return typeof bool === 'boolean';
// }
// console.log(booWhoo(null));

//title case a sentance---------------------------
// function titleCase(str){
//     return str.split(' ').map(elem => elem[0].toUpperCase()+
//     elem.slice(1).toLowerCase()).join(' ');
//     };
// console.log(titleCase("I'm a little tea pot"))

//slice and splice---------------------------
// function frankenSplice(arr1,arr2, n){
//     const newArr = [...arr2];
//     newArr.splice(n,0,...arr1);
//     return newArr;
// }
// console.log(frankenSplice([1,2,3],[4,5],1))

//falsy bouncer-remove falsy values from array------------
// function bouncer(arr){
//     return arr.filter((elem)=> !!elem);
// }
// console.log(bouncer([7,"ate","",false, 9]));

//return lowest index at which second argue should be inserted into array(first argue)------------
// function getIndexToIns(arr,num){
//     let index = arr.sort(customSort).findIndex(elem => elem >= num);
//     return index === -1 ? arr.length : index;
// }
// function customSort(a,b){
//     return a-b;
// }
// console.log(getIndexToIns([20,3,5,4,14,1,6],50))

//mutations
// function mutation(arr){
//     let [str1,str2] = arr;
//     str1 = str1.toLowerCase();
//     str2 = str2.toLowerCase();
//     for(let i =0;i<str2.length;i++){
//         const letter = str2[i];
//         if(str1.indexOf(letter)=== -1){
//             return false;
//         }
//     };
//     return true;
// }
// console.log(mutation(["hello","hey"]))
//or
// function mutation(arr){
//     let [str1,str2] = arr.map(s => s.toLowerCase());
//     for(let i =0;i<str2.length;i++){
//         const letter = str2[i];
//         if(str1.indexOf(letter)=== -1){
//             return false;
//         }
//     };
//     return true;
// }
// console.log(mutation(["hello","hey"]))

//Chunky Money-write function that split array and return 2D array---
// function chunkArrayInGroups(arr,size){
//     let index = 0;
//     let finalArray = [];
//     let innerArray = [];
//     for(let i=0; i<arr.length; i++){
//         innerArray.push(arr[i]);
//         index++;
//         if(index === size){
//             finalArray.push(innerArray)
//             innerArray = [];
//             index = 0;
//         }
//     }
//     if(innerArray.length > 0){
//         finalArray.push(innerArray)
//     }
//     return finalArray;
// }
// console.log(chunkArrayInGroups(["a","b","c","d"],2));
