// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");

// function add(a,b){
//     console.log(a+b);
    

// }
// add(5,5)
//VARIABLES
// var name= "manjunath"; //here in var keyword we can reassign the variable value and this is not the good pactise instead use let keyword
// var name="Alex";
// console.log(name);
// let name = "manjunath";
// //let name = "alex"; //this will throw referance error saying name has been already declared instead that take variable name and reassign like this 
// name = "alex" //after reassigning the output will be the reassigned name  
// console.log(name);
// const age = 26;
// age = 27;


//  primitive data types
//number data type
// let num = 50;
// console.log(typeof num );

//string data type
// let a = "hello wrold ";
// console.log(typeof a);

//boolean 
// let bool = true;
// console.log(typeof bool);

//null
// let b= null;
// console.log(typeof b);

// Undefined
// let c;
// console.log(typeof c);


//Type conversions

// result = "30"+40;
// result = String(result);
// console.log(result);
// console.log(typeof result);


// Operators
// let x=5
// console.log(x++);
// console.log(x);

// let x=5;
// console.log(++x);
// console.log(x);

//Logical operators
// OR ||
// console.log(3>4 || 4>3); >> if anyone is true the out put will be true >>

// AND

// console.log(2>3 && 2>1); >> if anyone is false then the out will be false 

// NOT
// console.log(!true); visa versa if true out put will be false 

// Conditional statemnts 
//  let a = 15;
//  let b = 10;

//  if(a>b){
//     // we can use nested if also here in speacial condition after for that if we have to create one else part also 

//     console.log("A is greater")
//  }
//  else if(b>a){
//     console.log("B is greater");
    
//  }
//  else{
//     console.log("both are equal");
    
//  } 
  
// nested if 
// let age = 18;
// let name = "manjunath"
// if(age>=18){
//     if(name== "manjunath"){
//     console.log("your are eligible");
//     }
//     else{
//         console.log("Name is not in match"); if you create one if and there must be one more else should be created 
//     }
// }
// else{
//     console.log("you are not eligible"); in else its not neccesarry to pass the attributes inside like in if () else {}
    
// }

// let ch = 4;
// switch(ch){
//     case 1:
//         console.log("i m 1"); 
//         break
//         //  in this case every case will be printed if i want print only one ,below that case add break for example iam adding break above
//     case 2:
//         console.log("i m 2");
//     case 3:
//         console.log("i m 3");

//         // if user types more than case defined values for example 4 there is no case 4 defined for that we can give the default saying that you chose wrong number or beyong number iam adding this default here down 
//         default:
//             console.log("you chose beyond number ");
            
            
            
// }
// LOOPS
// why do we use loops ? to print multiple iterations which this loop helps printing multiple things the syntax as below 
// here first initialisation i=0 then condition till where the loop should run for example 

// for (i=3;i<=5; i++){
// console.log(i);
// // here the i is increment twice
// i++ 
// // out put 3,5 without second increment

// }
// WHILE Loop
// let i=1;
// while(i<=10){
//     console.log(i); this while loop is like you finish the work once the condition is satisfied until and unless dont stop if the condition reaches maximum stop terminate the function 
//     i++;
// }
// DO while Loop
// let i=1;

// do{
// console.log(i); in the do while loop the code runs first then it will check for condition , condition is down just check the while syntax 
// i++;

// } while(i<=10)


// Function 
// function add(a,b){
//     console.log(a+b);
// } add(2,3) this is normal function how we usually use 
// next global and local variable function 
// let a = 3;
// function local(){
//     let b =4;
//     console.log(a) here b is local where it is define inside the funtion so we cant call it outside like we called out where a is global we can call it anywhere  
// } local()
// console.log(b) out put will be undefined 


// Return keyword 
// function add(a,b){
//       a+b;

// }
// let result=add(5,3);
 
// console.log(result); result will be undefined because there is no return keyword

// With Return Keyword

// function add(a,b){
//       return a+b;

// }
// let result=add(5,3);
 
// console.log(result); the return keyword says return the value from where the keyword has come

// Arrow function 

// let add = (a,b)=> console.log(a+b)
// add(2,2);  
// before arrow function

// this is arrow function which finishes in one single line of code ,key point to remeber whenever you start the function give the attributes not the values whenever you call the function then you can add the attribute values 

// let num = [1,2,3,4,5,6]
// console.log(num.slice(3,5))

// in this slice works like chopp the the elements ,from the index whichever you want hence one more (1,4) this slice wroks like start from the index 1 and stop it before 4

// splice
// let num= [10,20,30,40,50]
// let removed= num.splice(2,1,100)
// console.log(removed);
// console.log(num);
// this replacing array element 
// now adding the elements in original array 

// let num = [10,20,30,40,50]
// let added= num.splice(2,0,100)
// console.log(added);
// console.log(num)
// Key syntax to remember the splice syntax 
// array.splice(startIndex, deleteCount, item1, item2, ...)
 
// let arr =[10,20,30]
// let result = arr.map(Multiply => Multiply*2+1)
// console.log(result)
// let numbers = [2, 4, 6, 8, 10];
// let result = numbers.map(Multiply=>{return Multiply*5})  if you want to use return key word add curly braces after arrown function 
// console.log(result); this map keyword gives you the returned elemnts with modification in the function 
// this map without map key word and arrow function let numbers = [2, 4, 6, 8, 10];

// let result = [];

// function multiplyBy5(number) {
//     return number * 5;
// }

// for (let i = 0; i < numbers.length; i++) {
//     let value = multiplyBy5(numbers[i]);
//     result.push(value);
// }

// console.log(result);

// let prices = [100, 250, 400, 150, 500];
// let UpdatedPrice = prices.map(updated=>{return updated + 50})
// console.log(UpdatedPrice)

// Call back function 
// function washingClothes(callback){
//     console.log("washing clothes");
//     callback(); >> tgis call back function will be activated later once the execution of the priorly function that function has another function to call later once the function got executed later another function shouldm be executed hence here this how the callback function executes later after executing first function callback function becomes DryingClothes function so drying clothes function is another function so it will be called later in the first function itslef
    
// }
// function DryingClothes(){
//     console.log("Drying clothes");
    
// } washingClothes(DryingClothes);


// ONE more all back function example

// function login(callback) {
//     console.log("Login Successful");

//     callback();
// }

// function showDashboard() {
//     console.log("Dashboard Opened");
// }

// login(showDashboard); so here you dont have to change the first function everytime to change the feature for example after login you should redirect to home page so it could be hectic to change the whole function hence you add one more function call it in another function after executing the first function easy :-)!

// Filter 
// let num = [10,20,19,15,23,50,25,30,45]

// let filtered = num.filter(fil =>{
//     if(fil>=10 && fil<=25){
//         return fil;
//     }
// }) 
// console.log(filtered)

// concat
// let num1 = [10,20,30,40]
// let num2= [20,30,40,50]
// console.log(num1.concat(num2)) (8) [10, 20, 30, 40, 20, 30, 40, 50]
// for in & for of
    // let arr =[10,20,30,40]
    // for( ar in arr){
    //     console.log(ar)
    // }
    // 0,1,2,3 it will print index in the for in 

    // for of

// let arr =[10,20,30,40]
//     for( ar of arr){
//         console.log(ar)
//     }
    // for prints the values

    // Multidimensional array is array inside the array 
    // let arr = [
    //     ["manjjunath",27],
    //     ["vishwanath",26],
        
    // ]
    //  console.log(arr);
    
    // for(ar of arr){ >> this outer loop is to read the inner array note not inner array elements
    //     for(i of ar){ >> This loop is for to read inner values of the inner array 
    //         console.log(i); 
    //     }
    //}
  

    // Copy and spread Operator
    // arr1 = ["manjunath",202,true]
    // arr2= [...arr1]; 
    // //  >> for copying array1 to array could be array = array2 which will be copied easily later when you want push something in the array2 it will pushed into array1 also to prevent we use below spread function [...arr1]
    // arr2.push("Berg")
    // console.log(arr1);
    // console.log(arr2);
    // output ['manjunath', 202, true]
    // ['manjunath', 202, true, 'Berg']

    // array destructing
    // let array1=["Thomas","Max","leo","roger"];
    // let [item1,item2,...item3]=array1
    // console.log(item1);
    // console.log(item2);
    // console.log(item3); array destructing is used to 
    // if you want array elements to be seprated with index it take time for example i want second and third item youll do log.(array1[1],array1[2]) instead if say i do it for 20 items it would be hectic for me soo ill destructing let [item1,item2]=array1 where javascript place it seperatly 
//     // ...item3 is the spread operator it turns or concats the array elemnts to one for example
//     function add(a, b, c) {
//     return a + b + c;
// }

// let numbers = [10, 20, 30];
// Without spread:
// add(numbers); 
// Output a = [10,20,30]

// b = undefined

// c = undefined
// Using Spread
//  add(...numbers);// javascript changes to this add(10,20,30); 
//  a = 10

// b = 20

// c = 30


// OBJECT
// to write object properties we have to follow this property key : "value"
// let obj = {
//     "name": "manjunath",
//     age:22,
//     "last name": "kiudanavar",
//     // we can use function also in the object
//     fun :  function(){
//         console.log("I m FUNCTION")

//     }

// } 
// // this is how we call the function 
// obj.fun()
// console.log(obj.age) 
// you can call any of the property using . with variable name

// console.log(obj["name"])
// // if the key property is "" the we have to use [ brackets to call the particular key]
// // how do i add one property to object ?
// obj.key="item"
// // using the above syntax we can add the property like this
// console.log(obj)    
// // if there some other like let a= key2 how to add this property to object ?
// let a = "key2"
// obj[a] ="item2"

// // If i want to print all the object properties i mean keys and values ill for in and for of loop 
// for(let i in obj){
//     // console.log(i);
//     // if i want to print vlaues 
//     console.log(obj[i])
    
// }
// // for OF
// for (let j of Object.keys(obj)){
//     console.log(obj[j])
// }


//Object Inside array
// let arr=[
//     {user:1,name: "Manjunath"},
//     {user:2,name:"roopa"},
//     {user:3,name:"vivek"}
// ] 
// // for (let i of arr){
// //     console.log(arr)
// // }

// // so 
// let[{name},{name:name1}]=arr;
// console.log(name)
// console.log(name1)

// Function inside function
// function fun(){
//     console.log("iam function 1");
//     function fun2(){
//         console.log("iam function 2");
        
//     }
//     fun2()
    
// } fun()

// lexical scope

//  lets take a function 
// let a = 1;
    //  it also works when you declare it outside the function hence its because the main function searches the inside its function or out 
//     debugger;
// function fun(){
//     let a= 1;

//     // the a value will add to both the function hence it might outside the function but when declare in side the functions function i mean in second function it wont be lexical scope it will be block scoped 
//     console.log("iam fun1 :" + a)
//     function fun2(){
        
        
       
//         // it wont take the variable because its block scope it can access the inception function variable 
//         console.log("iam fun2:" + a)
//     }
//     fun2();
// }
// fun();

// Set is the object which contains special and unique values which cannot be repeated
// let fruits = new Set([
//     "Apple",
//     "Banana",
//     "Mango",
//     "Banana",
//     "Mango"
// ]);
// console.log(fruits.size);
// // we can the leanth of this set using above syntax
// // using for loop 
// let length = 0;
// for (let elements of fruits){
//     length++;
// }
// console.log(length) 
// // Adding the elements
// fruits.add("kiwi")
// console.log(fruits)


// Maps why do we use maps ? becuase when we use objects we store key value pair meanwhile if we are thinking to make it for functions also and for array aslo we need map it stores key value pairs for function also and for arrays also

// let map1 = new Map([["name","manjunath"],["age",27],["arr",[0,1,2,3,4]]])
// console.log(map1.get("name"))
// // getting the values
// map1.set("fname","kiudanavar")
// // updating the key values 
// console.log(map1)
// // what if i want key values ? so ill use for loop 
// // 
// let values = map1;
// for (let val of values){
//     console.log(values)
// }


// this keyword is one of the most use full kewyword where it acts like same remote for multiple functions 
// Without greet function 
// let person = {
//     name: "manjunath",
//     age : 27,
//     greet(){
//         console.log(person.name);
//     }
   
    
// };
// person.greet()

// // now lets take the another object 
// let student = {
//     name: "vishwanath",
//     age:26,
//     greet: person.greet 
//     //this above line says take the function of persons object and copy it here 
// } 
// student.greet()
// the out put will be expecting david but the output will be manjunath and manjunath here cause the will be taken from person object itself to prevent this >>> we use this keyword

// let person = {
//     name: "manjunath",
//     age : 27,
//     greet(){
//         console.log(this.name);
//         // this refers to person of the object this >>>person 
//     }
   
    
// };
// person.greet()

// // now lets take the another object 
// let student = {
//     name: "vishwanath",
//     age:26,
//     greet: person.greet 
//     // >> now here this refers to student here  
//     //this above line says take the function of persons object and copy it here 
// } 
// student.greet()
// instead of creating multiple function of multiple objects we use this keyword ,it acts like one remote for multiple functions


//     class Student {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     introduce() {
//         console.log("My name is " + this.name);
//         console.log("My age is " + this.age);
//     }

// }

// let student1 = new Student("John", 20);
// let student2 = new Student("David", 22);

// student1.introduce();
// student2.introduce();
    
// Constructor () is a function which holds the properties 

// function User(name){
    
//     this.name=name
// }
// let person = new User("manjunath");
// console.log(person.name)

// Symbol is the identifier whic produces unique property

// without Symbol 
// let product ={
//     brand: "iphone",
//     price: 80000,
//     Views: 2
// }


// // hence if another developer overwrites the property 
// function Analytics(product){
//     product.Views = 300;
//     console.log(product.Views);
    
// } 
// Analytics(product the original values is gone this is clled name collision 

// hence with Symbole datatype
// let Views = Symbol("Views")
// let product ={
//     brand: "iphone",
//     price: 80000,
//     [Views]: 2
// }
// console.log(product[Views]);


// // hence if another developer overwrites the property 
// function Analytics(product){
//     product.Views = 300;
//     console.log(product.Views);
    
// } 
// Analytics(product) 
//  hence here with symbol Data type we can prevent name collision out put 2,300 //


// Recursion is the function which calls itself

// function fact(n) {

//     if (n == 0) {
//         return 1;
//         // once the fact(0) reaches to 0 it calls return 1 where it returns to fact(1) after returning 1 else block function will get the answer 1
//     }

//     return n * fact(n - 1);
//     // when it reaches fact(1) from the return 1 it becomes return 1 again it becomes return 2 * fact(1) becuase javascript knows how did i calculated it before when return 3*(n-1)>> it would become 3*(2) it goes where javascript knows that executed it
//     // return here ? Job: Send the calculated factorial back to the previous function call.
// }

// console.log(fact(10));
// its like the press button 


// Asynchronous is the function where it executes after the priority execution hence its called Asynchronous function 

// console.log("hi")
// console.log("iam")
// console.log("manjunath")
// Output will be hi iam manjunath
// but when we add Asynchronous function 
//    setTimeout(()=>{
//    console.log("hi")
//    },0)

// setTimeout(fun, 5000)
// function fun(){
// console.log("manjunath")
// }

// console.log("iam")



// Promises
// function fun(task) {
//     return new Promise((resolve, reject) => {

//         if (task) {
//             resolve("Completed");
//             // You call this function using resolve("completed") function greet() greet("manjnunath") in the resolve function which is creted internally by javascript which is passed like resolve , reject thos are the function crewted by javascript so youre passing the functions inside the promise as parameters those functions contains code where when you call them giving the attribute resolve("completed") 
//         } else {
//             reject("Not Completed");
//         }

//     });
// }

// let onResolve = (res) => {
//     console.log(res);
// }

// let onReject = (err) => {
//     console.log(err);
// }

// fun(true).then(onResolve).catch(onReject);



// // this is the internal resolve function conceptual code
// function Promise(callback) {

//     let promise = {
//         state: "Pending",
//         result: undefined
//     };

//     function resolve(value) {

//         promise.state = "Fulfilled";
//         promise.result = value;

//     }

//     callback(resolve); 

//     return promise;
// }


// promise practise seesion 

// function fun(task){
//     return new Promise((resolve,reject)=>{
//         //  in the return keyword first right side statement will be executed
//         // hence after resolve the the promise object becomes status:fullfilled,value:complete; which will be returned to the to fun (true or false) calling function below 
//         // here resolve and reject are the call back funtions where javascript will be already created for us resolve and reject function 
//         if(task){
//             resolve("complete");
//             // this the calling the call back function with parameter "complete " where function resolve becomes resolve("complete") just like greet("manjunath") hence console.log ("manjunath") same resolve("complete") console.log ("complete")
//         }
//         else{
//             reject("incomplete");
//         }
//     });
// }
// let OnResolve= (res)=>{
//     console.log(res);
//     // these are the functions stored in the variable so we can use these later if we want 
// };
// let = OnReject=(rej)=>{
//     console.log(rej)
// };
// fun(!true).then(OnResolve).catch(OnReject);
// // then() this inbuilt keyword uses conceptual function where it will be having promise result complete or incomplete so to access the promise object we use then ()


// // imagine 

// function loadingData(){
//     return new Promise((resolve,reject)=>{
//         console.log("Processing")
//         setTimeout(() => {
//             console.log("Loading the data");
//             resolve();
            
//         },3000);
//     })
// }

// function CollectingData(){
//        return new Promise((resolve,reject)=>{
      
//         setTimeout(() => {
//             console.log("Collecting the data")
//             resolve();
//         }, 2000);
        
//        });
  
// }

// function approvingData(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(() => {
//         console.log("Approving the data")
//         resolve();
//      }, 1000);
       
//     })

// }

// function approved(){
//     return new Promise((resolve,reject)=>{
//         console.log("aproved");
        
//         resolve();
//     })
// }
// // loadingData().then(CollectingData).then(approvingData).then(approved).catch((err)=>{
// //     console.log(err);
    
// // });
// async function process() {

//     await loadingData();
//     await CollectingData();
//     await approvingData();
//     await approved()

// }
// process()
// we use these kinda async await functions to call the promise object chaining would be very messy 

// // The pattern to remember

// Whenever you see:

// (parameters) => {

// }

// you can mentally replace it with:

// function (parameters) {

// }

// So:

// (resolve, reject) => {

// }

// is simply:

// function (resolve, reject) {

// }

// The only difference is the syntax. The behavior is the same.

// call this is the keyword which calls the first property function to another object 


// let obj={
//     name: "manjunath",
//     age:27,
//     greet: function (){
//         console.log(this.name)
//     }
// };
// let obj2={
//     name:"jhon",
// };
// obj.greet.call(obj2);
//  read it like english call the induce the first object function to the second object
function greet(city,country){
    console.log(this.name,city,country)
}
let obj1={
    name:"jhon",
};


greet.apply(obj1,["banaglore","India"]);