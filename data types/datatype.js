var age = 24;  // number data type //
console.log();

var First_Name = 'Rohan';  // string data type //
console.log(First_Name)

var isRaining = true;  // boolean data type //
console.log(isRaining)

var lst_Name;   // undefined data type //
console.log(lst_Name);

var badMemories = null;   // null data type//
console.log(typeof badMemories)  // bug hai null ka typeof object deta hai //
console.log(badMemories);

var bigNumber = 123456789012345678901234567890n;  // bigint datatype//
console.log(typeof bigNumber);
console.log(bigNumber);

// symbol is also a primitive data type


var myFavNum = '10';
console.log(typeof +myFavNum);   // string converted to number with + sign //
console.log(typeof Number(myFavNum));

var myNum = 10;
console.log(typeof String(myNum));  // number converted to string //
console.log(typeof (myNum + ""));

var myName = 'Rohan';
if(myName){
    console.log('Truthy Value')
}else{
    console.log('Falsy Value')
}

var myName2 = '';
if(myName2){
    console.log('Truthy Value')
}else{
    console.log('Falsy Value')
}


// bonus //

var myString = '42';
var MyNumber = parseInt(myString);
console.log(typeof MyNumber);
console.log(MyNumber);

var myString2 = '42.55';
var MyNumber2 = parseFloat(myString2);
console.log(typeof MyNumber2);
console.log(MyNumber2);

if(NaN == NaN){
    console.log('both are equal')
}else{
    console.log('not equal')
}