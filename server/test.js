//scope:
//var : can be redeclare and reinitialize within the scope as well as outside the scope;
//let: can be reinitailzed but can not be redeclare within the scope but can be redeclare and reinitialize outside the scope;
//const : can not be redeclare and reinitailize within the scope but can be  redeclare and reinitialize outside the scope,
        //  also const will be initialize at the time of declaration;

//hoisting :
// var : will be hoisted and initialize with undefined: hoisting is working
// let : will be hoisted but will not initialize with undefined:temporal dead zone;
// const : will be hoisted but will not initialize with undefined:temporal dead zone;

// variable declaration is hoisted but variable initialization will not hoisted;



// console.log(x)

// var x;
// //

// var x = undefined;
// console.log(x)



console.log(x)
var x = 1;