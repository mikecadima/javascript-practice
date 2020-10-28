//code wars
//categorize new member--------------------------
// const openOrSenior = (data) => {
//     return data.map((info)=>{
//         if(info[0]>= 55 && info[1] > 7){
//             return "Senior";
//         } else {
//             return "Open";
//         }
//     })
// }
// Test.assertSimilar(openOrSenior([[45,12],[55,21],[19,-2],[104,20]]))
 

//list filtering---------------------------------
// function filter_list(l) {
//     return l.filter(function(v) {
//         return typeof v == 'number'
//     })
// }

//dubstep- song decoder-------------------------------------
//  const songDecoder = (song) => {
// return song.replace(/WUB+/g, ' ').trim();
// }
// console.log(songDecoder('AWUBBUBC')
// )

//sum of 2 lowets positive intergers--------------------------
// const sumTwoSmallestNumbers = (numbers) =>{
//     const [firstNumber, secondNumber] = numbers.sort((a,b)=> a-b);
//     return firstNumber + secondNumber;
// }
// const numbers = [19,5,42,2,77];
// console.log(sumTwoSmallestNumbers(numbers));

//list filtering- letter according to alphabet---------------
// const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
// const alphabetPosition = (text) => {
//     return text 
//     .toLowerCase()
//     .replace(/[^a-zA-Z]/g,"") //remove special char
//     .split("")
//     .map((letter)=> alphabet.indexOf(letter)+ 1)
//     .join(' '); //join back into array
    
// }
// console.log(alphabetPosition("the sunset sets at twelve o' clock."))

//vowel count-
// function getCount(str){
//     let vowelsCount = 0;
//    for(const letter of str){
//        if(letter.match(/[aeiou]/g)){
//            vowelsCount++;
//        }
//    }
//    return vowelsCount;
// }
// console.log(getCount('abracadabraaaaaa'))
//or
// const getCount = (str) =>{
//     const vowelCount = str.split("").reduce((acc,letter)=>{
//         if(letter.match(/[aeiou]/g)){
//             return acc + 1;
//         }
//         return acc;
//     },0);
//     return vowelCount;
// };
// console.log(getCount('abracadabraaaa'))
//or
// function getCount(str){
//     return (str.match(/[aeiou]/ig)||[]).length;
// }
// console.log(getCount('abracadabra'))

//unique in order-return on of mult input---------
// var uniqueInOrder = function(iterable){
//     let uniques = [];
//     for(let i=0;i<iterable.length;i++){
//         let curr = iterable[i];
//         let next = iterable[i + 1];
//         let prev = iterable[i - 1];
//         if(curr != next){
//             uniques.push(curr);
//         }
//     }
//     return uniques;
// }
// uniqueInOrder('AAAABBBCCDAABBB')


// const prevValues = []
// function square(n){
//     if(prevValues[n] != null){
//         return prevValues[n]
//     }
//     let result = 0
//     for (let i = 1; i<=n;i++){
//         for(let j = 1; j<= n;j++){
//             result +=1
//         }
//     }
//     prevValues[n] = result
//     return result
// }
// console.log(square(3000))

//fibanache,dynamic programming and memoization
// function fib(n, prevValues = []){
//     if(prevValues[n] != null){
//         return prevValues[n]
//     }
//     let results
//     if(n <= 2){
//         return 1
//     }else{
//         return fib(n-1,prevValues)+fib(n-2,prevValues)
//     }
//     prevValues[n] = result
//     return result
// }
// console.log(fib(40))

// var letters = [];
// var word = "poop"
// var rword = "";
// //put letters of word into stack
// for(var i = 0; i<word.length; i++){
//     letters.push(word[i]);
// }
// //pop off the stack in reverse order
// for(var i =0; i<word.length;i++){
//     rword += letters.pop();
// }
// if(rword===word){
//     console.log(word + " is a palindrome");
// } else {
//     console.log(word + " is not a plaindrome")
// }

//creates stack
// var Stack = function(){
//     this.count = 0;
//     this.storage = {};

//     //adds a value onto the end of the stack
//     this.push = function(value){
//         this.storage[this.count] = value;
//         this.count++;
//     }
//     //removes and returns the value at the end of stack
//     this.pop = function(){
//         if(this.count === 0){
//             return undefined;
//         }
//         this.count--;
//         var result = this.storage[this.count];
//         delete this.storage[this.count];
//         return result;
//     }
//     this.size = function(){
//         return this.count;
//     }
//     //returns the value at end of stack
//     this.peek = function(){
//         return this.storage[this.count-1];
//     }
// }
// var myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
// myStack.push("MichaelCadima");
// console.log(myStack.size());
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());

