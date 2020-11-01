//basic data structure
// let yourArray = ["hi", 17, true, {},[]]

//access array using bracket notation
// let myArray = ["a","b","c","d"];
// myArray[1] = "Mike"
// console.log(myArray)

//modify using push and unshift(adds to beginning of array)
// function mixedNumbers(arr){
//     arr.unshift("I",2,"three");
//     arr.push(7,"VIII",9)
//     return arr;
// }
// console.log(mixedNumbers(['IV',5,'six']))

//removes items with pop and shift
// function popShift(arr){
//     let popped = arr.pop();
//     let shifted = arr.shift();
//     return [shifted,popped];
// }
// console.log(popShift(['challenge','is','not','complete']));

//remove items using splice
// const arr = [2,4,5,1,7,2,5,1];
// arr.splice(0,1);//removes at index 0 and 1
// console.log(arr);

//splice and replace
// function htmlColorNames(arr){
// arr.splice(0,2,'DarkSalmon','BlanchedAlmond')
//     return arr;
// }
// console.log(htmlColorNames(['DarkGoldenRod','whiteShadow','lavenderBlush','paleturquiose','fireBrick']))

//copy array items using slice()
// function forecast(arr){
//     const newArr = arr.slice(2,4);
//     return newArr;
// }
// console.log(forecast(['cold','rainy','warm','sunny','cool','thunderstorms']))

//copy array with spread operatior ...
// function copyMachine(arr, num){
//     let newArr = [];
//     while (num>=1){
//         newArr.push([...arr]);
//         num --;
//     }
//     return newArr;
// }
// console.log(copyMachine([true, false, true],2))

//modify function with spread operator
// function spreadOut(){
//     let fragment = ['to','code'];
//     let sentence = ['learning',...fragment,'is','fun'];
//     return sentence;
// }
// console.log(spreadOut())

//check for array with indexOf()
// function quickCheck(arr,elem){
// return arr.indexOf(elem)> -1;
// }
// console.log(quickCheck(['squash','onions','shallots','mushrooms']))

//iterate through all array using for loops
// function filteredArray(arr,elem){
//     let newArr = [];
//     for(let i = 0;i<arr.length;i++){
//         if(!elementExist(arr[i],elem)){
//             newArr.push[i];
//         }
//     }
//     return newArr;
// }
// function elementExist(arr,elem){
//     return arr.indexOf(elem) > -1;
// }
// console.log(filteredArray([3,2,3],[1,6,3],[3,13,26],[19,3,9],3))

//create comples multi-dimensional array
// let myNestedArray = [//first
//     [//second
//         [//third  
//             'deep',
//             [//fourth
//                 'deeper',
//                 [//fifth
//                     'deepest'
//                 ]
//             ]
//         ]
//     ]
// ];

//js objects-add to them
// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28
// }
// foods.bananas = 13;
// foods.grapes = 35;
// foods.strawberries = 27;

// console.log(foods)

//modify obj nested w/in obj
// let userActivity = {
//     id: 12345677,
//     date: 'January 1, 2020',
//     data: {
//         totalUsers: 52,
//         online: 42
//     }
// };
// userActivity.data.online = 45;
// console.log(userActivity)

//access property names with bracket notation
// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
// }
// function checkInventory(scannedItem){
// return foods[scannedItem]
// }
// console.log(checkInventory("apples"));

//use delete to remove obj properties
// let foods = {
//         apples: 25,
//         oranges: 32,
//         plums: 28,
//         bananas: 13,
//         grapes: 35,
//         strawberries: 27
//     }
// delete foods.oranges;
// delete foods.plums;
// delete foods.strawberries;
// console.log(foods)

//check if obj has property
// let users = {
//     Alan:{
//         age:27,
//         online: true
//     },
//     Jeff:{
//         age:32,
//         online: true
//     },
//     Sarah:{
//         age:48,
//         online: true
//     },
//     Ryan:{
//         age: 19,
//         online: true
//     }
// }
// function isEveryoneHere(obj){
// return obj.hasOwnProperty('Alan') &&
// obj.hasOwnProperty('Jeff') &&
// obj.hasOwnProperty('Sarah') &&
// obj.hasOwnProperty('Ryan') 
// }
// console.log(isEveryoneHere(users));

//iterate thru keys of obj with a for...in statement
// function countOnLine(usersObj){
//     let count = 0;
//     for(let user in usersObj){
//        if(usersObj[user].online){
//            count++;
//        }
//     }
//     return count;
// }
// console.log(countOnLine({
//     Alan: {
//         online:false
//     },
//     Jeff:{
//         online: true
//     },
//     Sarah:{
//         online: false
//     }
// }));

//generate array of all obj keys with obj.keys()
// let users = {
//         Alan:{
//             age:27,
//             online: false
//         },
//         Jeff:{
//             age:32,
//             online: true
//         },
//         Sarah:{
//             age:48,
//             online: false
//         },
//         Ryan:{
//             age: 19,
//             online: true
//         }
//     }
//     function getArrayOfUsers(obj){
//         console.log(Object.keys(obj))
//     }
//     console.log(getArrayOfUsers(users))

//modify array stored in obj
// let user = {
//     name: 'Kenneth',
//     age: 28,
//     data:{
//         username: 'kennethCodesAllDay',
//         joinDate: 'March 26,2020',
//         organization: 'codeCamp',
//         friends:[
//             'Sam',
//             'Kira',
//             'Tomo'
//         ],
//         location:{
//             city: 'San Fran',
//             state: 'Ca',
//             country: 'USA'
//         }
//     }
// }
// function addFriend(userObj, friend){
//     userObj.data.friends.push(friend)
//     return userObj.data.friends;
// }
// console.log(addFriend(user,'Pete'))
