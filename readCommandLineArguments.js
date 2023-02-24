/**
 Let us say you have the above code in arg.js that 
 simply parses and displays command line arguments.
var args=process.argv;
console.log(args);

[C:\Program Files\nodejs\node.exe,                              //0
    C:\Users\anike\...\Assignments\readCommandLineArguments.js, //1
    Aniket]                                                       //2
 */

var arguments = process.argv ;
console.log(`Hello ${arguments[arguments.length-1]}`);

/*
for add or solving ...
[C:\Program Files\nodejs\node.exe,                              //0
    C:\Users\anike\...\Assignments\readCommandLineArguments.js, //1
    1,2,3]                                                      //2
    let sum = arguments[2]+arguments[3]+arguments[5]
    console.log(sum);
*/