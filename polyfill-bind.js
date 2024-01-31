// theory in prototype.
// everythhing in js is an obj.
// [] it is instance of array obj
// instance of an obj can be created 
// by using new keyword along wih function or 
// new keyword along with class
// prototype are property for every data type
// every data type has parent fn constructor 
// prototype is a keyword in it their are lot of property and methods to get accessed



Array.prototype.myMap = function(){

    } 
*/

// let  names = {
//     firstname:'Hithesh',
//     lastname:'PK'
// }

// let printName = function (homeTown,state){
//     console.log(this.firstname+' '+this.lastname+","+
//     homeTown+' '+state);
// }

// let printMyName=printName.bind(names,'UP');
// printMyName('adoni','India');

// Function.prototype.mybind=function(...args) {
//     // # to extract arguments we do use args 
//     // # this points to printName method
//     let obj=this;
//     let arr=args.slice(1);
// return function(...args2){
//    obj.apply(args[0],[...arr,...args2]); 
// }
// }

// let printMyName2 = printName.mybind(names);
// printMyName2('UP','UP');


//map polyfill
// Array.prototype.myMap=function(arg){
//     let arr1=this;
//     let arr2=[];
//     for(i=0;i<arr1.length;i++){
//         let x=arg(arr1[i],i,arr1);
//         arr2.push(x);
//     }
//     return arr2;
// }
// let arr1=[1,2,3,4,5];


// let arr3=arr1.myMap((element,index,val)=>element*index);
// console.log(arr3);

// //filter polyfill
 Array.prototype.myFilter=function(arg){
    let arr=this;
    let arr2=[];
    for(i=0;i<arr.length;i++){
            let ele =arr[i];
        let val=arg(arr[i],i,arr);
        if(val) arr2.push(ele);
    }
    return arr2;
 }

let arr1=[1,2,3,4];
let arr2=arr1.myFilter((ele,ind,a1)=>{
    a1[ind]*=10;
    return ele%2===0
});
console.log(arr1);
let arr3=arr1.myFilter((ele,ind,a1)=>{    

a1[ind]++;
return ele%2===0
});
console.log(arr1);
console.log(arr2);
console.log(arr3);
// finally filter is filter only filter Elements 
// always ele is before updation only it always 
// PS C:\polyfill> node .\polyfill-bind
// [ 10, 20, 30, 40 ]
// [ 11, 21, 31, 41 ]
// [ 2, 4 ]
// [ 10, 20, 30, 40 ]
// PS C:\polyfill> node .\polyfill-bind
// [ 10, 20, 30, 40 ]
// [ 11, 21, 31, 41 ]
// [ 2, 4 ]
// [ 10, 20, 30, 40 ]
// PS C:\polyfill> node .\polyfill-bind
// [ 10, 20, 30, 40 ]
// [ 11, 21, 31, 41 ]
// [ 20, 40 ]
// [ 11, 21, 31, 41 ]
// PS C:\polyfill>