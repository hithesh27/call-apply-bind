/*
bind
bind function returns a new function where that function code is copied .
first parameter passed here is value of this in that function.
regarding parameters.
parameters can be passed at that time of using bind itself.
or
u can also pass arguments later
*/
/*
let name='op';
let student={
    name : 'Hithesh',
    id :52,
    print:function(){
        console.log(this.name,' ',this.id);
    }
}
let anotherp=student.print.bind(student);
anotherp();
*/


//in an abj inside a function u cannot access as name --false 
//                                                 this.name --- true
//                                                 student.name --- true

let name='op';
let student={
    name : 'Hithesh',
    id :52,
    print:function(){
        console.log(this.name,' ',this.id);
    }
}
function details(sex,number){
    console.log(this.name,' ',this.id,' ',sex,' ',number);
}
// let anotherp=details.bind(student);
// anotherp('M',10909);


//in bind whatever u write that value only comes it never changes ....
//u can change only when u donot write other parameters.....



//call(),apply()
// it is all about calling a function their itself and u can use call
// method when u point to a function then pass first parameter for this 
// value and then 
// --for call pass other paramters in general way 
// --for apply pass other paramters in array 


// details.call(student,'M',7075605655);
details.apply(student,['M',7075605655]);
// The main differences between bind() and call() is that the call() method:

// Accepts additional parameters as well
// Executes the function it was called upon right away.
// The call() method does not make a copy of the function it is being called on.
// call() and apply() serve the exact same purpose.
//  The only difference between how they work is that call() 
//  expects all parameters to be passed in individually,
//   whereas apply() expects an array of all of our parameters.
// resource--medium.com
// resource:https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1ZTU1MTA3NDY2YjdlMjk4MzYxOTljNThjNzU4MWY1YjkyM2JlNDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTAzMzU2NTIxODg3Mzg1OTYxMDMiLCJlbWFpbCI6ImhpdGhlc2hway4yN0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzA2NjIzNjQ1LCJuYW1lIjoiSGl0aGVzaCBQayIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNUViMkhkcVk2N2oxOWhPSERrMUpHRklBcldEcmFDdDBzSDNqQlJYZWY9czk2LWMiLCJnaXZlbl9uYW1lIjoiSGl0aGVzaCIsImZhbWlseV9uYW1lIjoiUGsiLCJsb2NhbGUiOiJlbi1HQiIsImlhdCI6MTcwNjYyMzk0NSwiZXhwIjoxNzA2NjI3NTQ1LCJqdGkiOiJkMmI3ZWUwMjRkZjRiNDk5NWUyODE4OWEwMzE5ZDczZTgzMGY4ZTgxIn0.fI_P-CzJu2964IjLfObrDRMAbtTYoqkkXN6wLr6SuxCUWOSugTFCQCSlUi6VnFjzbikciUrI3eBZDBRHc1kIDegewmJ9Vu0-hH8JUOrxpgZbmY6BusW-nZkguHvwRApYEfslbo9WadpuuuUo8hmndnCHxfogkit4BQMU_lqf3zUc7wc-ze0Ieeg6xlm_FvXsEppM34_GDf_KxNjGcSiwwjKj3PJ-I92kxNjdugmgngr7GPmEIV8tXilkY0-T1z5i_UV15-u_g34tiPvigOXK6aAnyUmA6HyjLni7jUEThjDl7DYicEMzEDSohM4QULjdwm1j1lfq1oo3a2pBPoQF5A