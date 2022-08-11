                                                                                           // ALERT task 1


// 1
alert("  Happy coding! ");


// 2 
alert(" error Please enter a valid password ");

// 3
alert(" Welcome JavaScript land.... \n Happy coding");

// 4
alert(" Welcome JavaScript land... ");

alert(" Happy coding \n  Prevent the land from creating additional dialogs");

// 5
alert(" Hello... I can run JS through my web browser's console");

console.log(" Hello... I can run JS through my web browser,s console ");


//chap 2
                           

// 1
var username;

// 2

var myName = "Summaiya Mumtaz";

// 3

var message ;
 message = "Hello World... ";
alert(message);

// 4
alert(" jhon  ");
alert("A student ");
alert(" Web developer");

// 5

var x = `${"PIZZA"}
 ${"PIZZ"}
 ${"PIZ"}
 ${"PI"}
 ${"P"};`
 alert(x);


// 6
var email;
var message = "email address";
email = 'Professional.taz@gmail.com';
alert(message + " " + email);


// 7
var book;
book = "A smarter way to learn JavaScript";
var a = " I am trying to learn from the Book"
alert(a + " " + book);


// 8

document.write( "this is My Script");

// 9
var design;
design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”" ;
alert(design);

//chapter  3
 
// 1
var age;
age = 15;
me = " I am ";
ag = " years old ";

var meesage = ( me + age + ag );
alert(meesage);


// 2

var value= prompt("how many times you have visited this website?");
alert("you have visited this site " + value + " " + "times");



// 3

var birthYear;
birthYear = 2000;
document.getElementById("myP").innerHTML = "my birth day is " + birthYear + " " + "January";




// 4
var a = "John Doe";
var b = "T-shirts";
var c = 5;
var d = "xyz clothing store";

var Name = prompt("What is your name?", a);
console.log(Name);
var quantity = prompt("how many shirts you want to buy ", c);
console.log(quantity);


document.getElementById("shop").innerHTML = Name + " " + "ordered" + " " +  quantity +  " " + b +" from " + d ;


   //chap 4
 
// 1

 var username = "Summaiyaa", age = "22", birthday = "23 january";               

//  2
// legal 

var  _as;
var  $_;
var abc$ ;
var abc123;
var no_2$2;


// illegal

// var #no;
// var 234;
// var user value;
// var ^&' ;
// var !';


// 3
var a = ("Rules for naming JS variables");
var b = (" variable names can only contain letters, numbers, underscores, dollar signs");
var c = ("Variables must begin with a abc123 , $user , _uservalue23");
var d = (" Variable names are case sensitive");
var e = (" Variable names should not be js keyword");


document.getElementById("a").innerHTML = a ;
document.getElementById("b").innerHTML = b ;
document.getElementById("c").innerHTML = c ;
document.getElementById("d").innerHTML = d;
document.getElementById("e").innerHTML = e;



// chap 5

// 1
var no1 = parseInt(prompt("Enter your number ?", 5))
var no2 = parseInt(prompt("Enter your number ?",  3))
var total = no1 + no2;
console.log(total);

// 2
var num1 = 3;
var num2 = 5;
var numMsg = ("Subtractio of 3 and 5 is");
var Num = (num1 - num2);
document.getElementById("que1").innerHTML = numMsg + " " + Num;

var num1 = 3;
var num2 = 5;
var numMsg = ("Multiplication of 3 and 5 is");
var Num = (num1 * num2);
document.getElementById("que2").innerHTML = numMsg + " " + Num;

var num1 = 3;
var num2 = 5;
var numMsg = ("Division of 3 and 5 is");
var Num = (num1 /  num2);
document.getElementById("que3").innerHTML = numMsg + " " + Num;

var num1 = 3;
var num2 = 5;
var numMsg = ("Modulus of 3 and 5 is");
var Num = (num1 % num2);
document.getElementById("que4").innerHTML = numMsg + " " + Num;



// 3
//a
var a = 5;
//b
var after = ("Value after variable declaration is");
document.getElementById("a").innerHTML = after + " " + a;
// c
var initialValue = 5;
// d 
var initialValue = 5;
var initial = ("Initial value is : ");
document.getElementById("i").innerHTML = initial  + " " + initialValue;

// e 
var num = 5;
var b =  ++num;
console.log(b);

//  f 

var increment = ("Value after increment is");
document.getElementById("inc").innerHTML = increment + " " + b;
// g 
var b =  ++num + 7;
console.log(b);

// h 
var h = ("Value after addition is:");
document.getElementById("h").innerHTML = h  + " " + b;

// i   
var b =  num--;
console.log(b);

//j 

var dec = ("Value after decrement is");
document.getElementById("dec").innerHTML = dec + " " + b;


// k 

var num = 12;
var num2 = 3;
var Modulus = num % num2;
console.log( Modulus);

var j = ("The remainder is :");
document.getElementById("j").innerHTML = j + " " + Modulus;

 
//  4
var movie = 600;
var Tickets = 5 * costOfOneMovie;
var totalCost = Tickets
console.log(totalCost);

document.getElementById("totalcost").innerHTML = "Total cost to buy 5 tickets to a movie is " + totalCost + "PKR";

// 5
var n = prompt(" write your num ?");
for (var i = 1; i <= 10; i++) {
result = i * n;
console.log( n + "*" + i +" = " + result);
}


// 6

function Far(celsius) 
{
  var cTemp = celsius;
  var cToFahr = (cTemp * 9 / 5 ) + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}




function cel(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
Far(25);
cel(70);



// 7
//a
var shopping = "Shopping Cart";
var priceItem1 = 650;
var quantityItem1 = 3;
var priceItem2 = 100;
var quantityItem2 = 7;
var shippingCharges = 100;

var item1 =  (  priceItem1 * quantityItem1);
var item2 = ( priceItem2 * quantityItem2);

var total =  item1 + item2  + shippingCharges;
console.log(total);


document.getElementById("s1").innerHTML = "Price of item 1 is" + " " + priceItem1;

document.getElementById("s2").innerHTML = "Quantity of item 1 is" + " " +quantityItem1;

document.getElementById("s3").innerHTML = "Price of item 2 is" + " " + priceItem2;

document.getElementById("s4").innerHTML = "Quantity of item 2 is" + " " + quantityItem2;

document.getElementById("s5").innerHTML = "Shipping charges are " + " " + shippingCharges;

document.getElementById("s6").innerHTML = "Total cost of your order is" + " " + total;


// 8
var markSheet = "Marksheet";
var totalnumber = 980;
var marksObtained = 804;
var percent = (marksObtained / totalnumber) * 100;
console.log(percent);


document.getElementById("mark").innerHTML = "MARK SHEET";

document.getElementById("marka").innerHTML = "Total marks:" + " " + totalnumber ;
document.getElementById("markb").innerHTML = "Marks obtained:" + " " + marksObtained ;
document.getElementById("markc").innerHTML = "Percentage:" + " " + percent + "%" ;


// 9
var Dollar = 104.80;
var Riyal = 28;
var RS = (us1Dollar * 10)+ (saudi1Riyal * 25);

console.log(RS);
document.getElementById("currency").innerHTML = " Currency in PKR";
document.getElementById("pkr").innerHTML = "Total currency in PKR:" + " " + RS ;

// 10
var no = 5;
console.log((no + 5) * 10  / 2);

// 11

var a = new Date("1-13-1997");
var b = new Date("7-2-2022");
c = b - a
console.log(Math.round (c / (1000 * 60 * 60 * 24 * 365) ));


// 13
var favSnack = "chips" ;
var currentAge = 20; 
var maxAge = 75;
var Snackperdays = 5;

var totalsnack = (maxAge - currentAge ) * Snackperdays;
console.log(totalsnack);

document.getElementById("ch4").innerHTML = " THE LIFETIME SUPPLY CALCULATOR";

document.getElementById("chips1").innerHTML = "Favourite snack :" + " " + favSnack ;

document.getElementById("chips2").innerHTML = "Current age:" + " " + currentAge ;

document.getElementById("chips3").innerHTML = "Estimated maximum age :" + " " + maxAge ;

document.getElementById("chips4").innerHTML = "Amount of snacks per day :" + " " + Snackperdays ;

document.getElementById("chips5").innerHTML = "You will need"+ " " + totalsnack + " " + "chocolate chips to last you untill the ripe old age of " + maxAge ;

 // chap 6  -  9
// 1

var a = 10;
var b =  ++a;

console.log(b)

document.getElementById("val").innerHTML = "Results of chap 6 questio 1";

document.getElementById("val1").innerHTML = "The value of ++a is :" + b ;
document.getElementById("val1a").innerHTML = "Now   the value of a is :" + b ;


var a = 11;
var b =  a++;

console.log(b)
console.log(a)

document.getElementById("val2").innerHTML = "The value of ++a is :" + b ;
document.getElementById("val2a").innerHTML = "Now   the value of a is :" + a ;




var a = 12;
var b =  --a;

console.log(a)
console.log(b)

document.getElementById("val3").innerHTML = "The value of ++a is :" + a ;
document.getElementById("val3a").innerHTML = "Now   the value of a is :" + b ;


var a = 11;
var b =  a--;
console.log(b)
console.log(a)


document.getElementById("val4").innerHTML = "The value of ++a is :" + b;
document.getElementById("val4a").innerHTML = "Now   the value of a is :" + a ;

// 2

var a = 2;
var b = 1;
var result1 = --a  -  --b  +  +  +b  +b  --;
console.log(a);
console.log(b);

var a = 2;
var b = 1;
var result2 = --a;
console.log(a);
console.log(b);

var result3 = --a - --b;

console.log(a);
console.log(b);

var result3 = --a  -  --b  +  +b;

console.log(a);
console.log(b);

var result4 = --a  -  --b  +  +b  +  b--;
console.log(a);
console.log(b);


// 3 
var userNew = prompt("Enter your name ?", "sumaiya")
alert ("welcome" + userNew);

//4
// 5
var table = prompt(" write your num ?", 5);
for (var i = 1; i <= 10; i++) {
result = i * table;
console.log(table + "*" + i +"=" + result);
}


// 6
var subject1 = prompt("enter subject name 1?" , "eng");
var subject2 = prompt("enter subject name 1?", "MATHS");
var subject3 = prompt("enter subject name 1?", "pst");

console.log(subject1);
console.log(subject2);
console.log(subject3);

totalSubjectMarks = 100;


var engmarks = parseInt(prompt("Enter your eng marks ?", 54));
var mathmarks = parseInt(prompt("Enter your pst marks ?" , 54 ));
var pstmarks = parseInt(prompt("Enter your maths marks ?" , 48 ));

console.log(engmarks);
console.log(mathmarks);
console.log(pstmarks);

var totalmarks = engmarks + mathmarks + pstmarks;
console.log(totalmarks);

var engsum = engmarks / totalSubjectMarks * 100;
console.log(engsum);

var mathsum = mathmarks / totalSubjectMarks * 100;
console.log(mathsum);

var pstsum = pstmarks / totalSubjectMarks * 100;
console.log(pstsum);

var sumofpercentage = engsum + mathsum + pstsum;
console.log(sumofpercentage);


document.getElementById("a1").innerHTML = "SUBJECT" + " " + "TOTAL MARKS" + " "  + "OBTAINED MARKS" + " "    +  "PERCENTAGE";

document.getElementById("a2").innerHTML = subject1 + " "  + " " +  totalSubjectMarks + " "  + " "  + engmarks  + " " + engsum
" " +  "%";

document.getElementById("a3").innerHTML = subject2 + " "  + " " +  totalSubjectMarks + " "  + " "  + mathmarks  + " " + mathsum
" " +  "%";

document.getElementById("a4").innerHTML = subject3 + " "  + " " +  totalSubjectMarks + " "  + " "  + pstmarks  + " " + pstsum
" " +  "%";

document.getElementById("a5").innerHTML = "Total Result "+ (totalSubjectMarks + totalSubjectMarks + totalSubjectMarks ) + " " + totalmarks + " "  + " "  + sumofpercentage  + " " + 
" " +  "%";

// chapter 9 to 11 
  // 1
  var cities = ["karachi"];
  var userAns = prompt("tell me your city name ?", "karachi");
   if ( userAns === cities);
  alert("welcome to Karachi");
  

// 2
var x = prompt("whats your gender?");
if ( x == "male" ){
    alert("Good morning! Sir.");
}
else if ( x == "female" ){
    alert("Good morning, Ma,am");
}
else{
    alert("you should enter your gender before moving forward.")
}


// 3
var s = prompt("whats the colour of the road traffic s ?");

if ( s == "red" ){
    alert("you must stop");
}
if ( s == "yellow" ){
    alert("ready to move");
}
if ( s == "green" ){
    alert("move");
}


// 4
var fuel = prompt("whats your fuel")
parseFloat = (0.25, "litres");
if(fuel <= 0.25){
    alert("Please refill the fuel in your car");
}
else {
    alert("good to go");
}


// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs



var a = 4; 
if (++a === 5){
    alert("given condition for variable a is true"); } 

var b = 82; 
if (b++ === 83)
{ alert("given condition for variable b is true");
}
if (b++ !== b){
   alert("given condition for variable is right")
}

 var b = 82;
  if (b++ === 85){ 
   alert("given condition for variable b is true"); } 
else {
   (alert("given condition for variable is false"))
}


var c = 12;
 if (c++ === 13){
    alert("condition 1 is true"); 
   } if (c === 13){ 
       alert("condition 2 is true"); } 
       if (++c < 14){
            alert("condition 3 is true"); } 
            if(c === 14){
                alert("condition 4 is true"); } 


var material = 20000;
 var labor = 2000;
  var total = material + labor;
   if (total === labor + material){ alert("The cost equals"); }
    if (true){ 
       alert("True"); }
        if (false){ 
           alert("False"); } 


           
if("car" < "cat"){
alert("car is smaller than cat"); } 


// 6
var a = 80;
var b = 70;
var c = 60;
var d = 40;


var remarks1 = "Excellent"
var remarks2 = "Good"
var remarks3 = "you need to improve"
var remarks4 = "sorry"


var subject1 = prompt("enter subject name 1?" , "eng");
var subject2 = prompt("enter subject name 1?", "MATH");
var subject3 = prompt("enter subject name 1?", "pst");

console.log(subject1);
console.log(subject2);
console.log(subject3);

totalSubjectMarks = 300;


var engmarks = parseInt(prompt("Enter your eng marks ?", 89));
var mathmarks = parseInt(prompt("Enter your pst marks ?" , 60 ));
var pstmarks = parseInt(prompt("Enter your maths marks ?" , 40 ));

console.log(engmarks);
console.log(mathmarks);
console.log(pstmarks);

var totalmarks = engmarks + mathmarks + pstmarks;
console.log(totalmarks);

var engsum = engmarks / totalSubjectMarks * 100;
console.log(engsum);

var mathsum = mathmarks / totalSubjectMarks * 100;
console.log(mathsum);

var pstsum = pstmarks / totalSubjectMarks * 100;
console.log(pstsum);

var sumofpercentage = engsum + mathsum + pstsum;
console.log(sumofpercentage);




if ( sumofpercentage >= a ){
    alert( remarks1);
}

if ( sumofpercentage >= b ){
    alert(remarks2);
}

if ( sumofpercentage >= c ){
    alert(remarks3);
}

else{
    alert( remarks4);
}



document.getElementById("ab").innerHTML = "Marks Sheet";

document.getElementById("a1").innerHTML = "Total marks:"  + totalSubjectMarks ;

document.getElementById("a2").innerHTML =  "Marks Obtained:" + totalmarks;

document.getElementById("a3").innerHTML =   "Percentage: "  + sumofpercentage;

document.getElementById("a4").innerHTML = "Grade" + " " + "C ";

document.getElementById("a5").innerHTML = remarks3;





// 7

var myNumber = 3;
var userGameAnswer = prompt ("guess my secret number? " );
 userGameAnswer = +userGameAnswer

 if (userGameAnswer == myNumber){
    alert ( "Bingo !!");
 }


 if (userGameAnswer < myNumber){
    alert ( "close enough !");
 } 
 if (userGameAnswer > myNumber){
    alert ( "Try again !");
 } 




//  8
var Math =  prompt("tell me a number which is divisible by 3 ?", 6);
Math = +Math;

if( Math % 3 == 0) {
alert("its divisible");
}
else{
   alert("its not divisible");
}


// 9
var number = prompt("Enter a number: ");
if(number % 2 == 0) {
    console.log("The number is even.");
}

else {
    console.log("The number is odd.");
}
// 10
var temp1 = 41;
var temp2 = 30;
var temp3 = 20;
var temp4 = 10;

var userTemp = prompt ("tell us the temperature in your area ?");
userTemp = +userTemp;

if (userTemp < temp1){
    alert("It is too hot outside");
}
if (userTemp < temp2){
    alert("The Weather today is Normal");
}
if (userTemp < temp3){
    alert("Todays Weather is cool");
}
if (userTemp < temp4){
    alert("OMG! Todays weather is so Cool");
}

// chapter 12 - 13                                    
//   1
var converted = parseInt(userInput);
var numbers = /^[0-9]+$/;
if(userInput.match(numbers)){
    alert("your value is number")
} else if(userInput==userInput.toLowerCase()){
    alert("Your Value is String!!")
   alert("Your Value is Lower Case");
} else {
    alert("Your Value is Upper Case");
}



//2
var no1, no2;
no1 = window.prompt("Input the First integer", "0");
no2 = window.prompt("Input the second integer", "0");
                                                 
if(parseInt(no1) > parseInt(no2)) 
  { 
  console.log("The larger of "+ no1+ " and "+ no2+ " is "+ no1+ ".");
  }   
else
  if(parseInt(no2) > parseInt(no1)) 
  {
  console.log("The larger of "+ no1+" and "+ no2+ " is "+ no2+ ".");
  }                  
else
  {
   console.log("The values "+ no1+ " and "+no2+ " are equal.");
  }



// 3  Write a program that takes input a number from user & state whether the number is positive, negative or zero.


const numberab = parseInt(prompt("Enter a number: "));

if (numberab > 0) {
    console.log("The number is positive");
}

else if (numberab == 0) {
  console.log("The number is zero");
}

else {
     console.log("The number is negative");
}


// 4
var v = prompt ("enter your letter?");
v = v.toLowerCase();
if (v == "a" || v == "e" || v == "i" || v == "o" || v == "u") {
  alert("the word is v", true);
}
else {
  alert("the word is not vowel", false);
}


// 5
var password = "abcd1234";
var passworUser = prompt ("enter your password");

if (passworUser == "") {
  alert("Please enter your password")
}
else if (password ==  passworUser) {
  alert("Correct! The password you entered matches the original password")
}
else  {
  alert("Incorrect password");
}



// 6
var greeting;
var hour = 23;
// var hour = new Date().getHours();
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
document.write(greeting);


// 7
var time = prompt("Enter your time in 24hr ");

if (time => 0000 && time < 1200 ) {
    alert("Good morning");
}
else if (time => 1200 && time < 1700 ){
alert("Good evening");
}
else if (time => 1800 && time< 2359){
    alert("Good night");
}

// chapter 14 to 16  

// 1
var array = [];

// 2
var array = {};

// 3
var stringArray;
stringArray = ["A", "B", "C", "D", "E"]; 

// 4
var numberArray;
numberArray = [1,2,3,4,5,6,7,8,9,10,11,12];


// 5
var booleanArray = [true,false];

// 6
var mixedArray = [1, "Bob", "Now is", true];

// 7
var array = ["BS", "BCOM", "MS", "M.PHILL","PHD"]; 
  document.write(" <h3>Qualifications </h3> \n");

for (let i = 1; i < array.length; i++) {
   console.log (i , array[i]);
    document.write( i," . ", array[i] + "\n" );
}


// 8
var students = ["Micheal", "john", "Tony"];
var studentsScore = [320, 230, 480];
var studentPercentages = ["64%", "46%", "96%"];

document.write("<h3>Scores and Percentages</h3>")

document.write("Score of " + students[0] + " is " + studentsScore[0]+ " . " +  "Percentage is : " + studentPercentages[0]  + "<br>");

document.write("Score of " + students[1] + " is " + studentsScore[1]+ " . " +  "Percentage is : " + studentPercentages[1]  + "<br>");

document.write("Score of " + students[2] + " is " + studentsScore[2]+ " . " +  "Percentage is : " + studentPercentages[2]  + "<br>");



// 9

var colors = ["red","Orange","Green", "Yellow", "Blue"];


// a
var input1 = prompt ("what colour you want to add in the start ?", "Purple");
colors.unshift(input1);
console.log(colors);
document.write(colors, "<br/>");

//b
var inp2 = prompt ("what colour you want to add in the end ?", "Tea pink")
colors.push(inp2);
console.log(colors);
document.write(colors , "<br/>");

// c
var inp3 = prompt ("what colour you want to add in the start?", "Mergenda")
var inp4 = prompt ("what 2nd colour you want to add in the start ?", "teal blue")
colors.unshift(inp3, inp4);
console.log(colors);
document.write(colors , "<br/>");

// d
colors.shift();
console.log(colors);
document.write(colors , "<br/>");


// e
colors.pop();
console.log(colors);
document.write(colors , "<br/>");

// f
var inputA = prompt ("At which index  you wants the to add?");
var inputB = prompt ("what colour you wants to add ?");
colors [inputA] = inputB;
console.log(colors);
document.write(colors , "<br/>");



// g
var inputA = prompt ("which index colour you wants to delete?");
var inputB = prompt ("how many colour you wants to delete ?");
colors.splice(inputA, inputB);
console.log(colors);
document.write(colors , "<br/>");




// 10
var studentScore = [320, 230, 480,120];
studentScore.sort();
console.log(studentScore);

// 11
var cityNames = ["Karachi","Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cityNames.slice(0,3);
console.log(cityNames);
console.log(selectedCities);
document.write(cityNames, "<br/>");
document.write(selectedCities, "<br/>");




// 12
var arr = ["This", "is", "my", "cat"];
var line = arr.join(" ");
console.log(arr);
document.write(line);




// 13
var fifo= ["Keyboard", "Mouse", "Printer", "Monitor"]; 

document.write ("DEVICES", "<br/>");
document.write (fifo, "<br/>" );


var fifo= ["Keyboard", "Mouse", "Printer", "Monitor"]; 

for (let i = 0; i < fifoDevices.length; i++) {
    document.write (" <br/> "," out: ")
    document.write (fifoDevices[i])
    console.log(fifoDevices[i]);

} 

// method 2 


var fifo= ["Keyboard", "Mouse", "Printer", "Monitor"]; 

document.write ("DEVICES", "<br/>");
document.write (fifo, "<br/>" );


var b = fifo.shift();
document.write( "out : <br/>",b , "<br/>");

var b = fifo.shift();
document.write( "out : <br/>",b , "<br/>");

var b = fifo.shift();
document.write( "out : <br/>",b , "<br/>");

var b = fifo.shift();
document.write( "out : <br/>",b , "<br/>");

// 14. Create a new array. Store values one by one in such a way
// // that you can access the values in reverse order. (Last In - First Out)



var fifo = ["Keyboard", "Mouse", "Printer", "Monitor"]; 

document.write ("", "<br/>");
document.write (fifo , "<br/>" );


var b = fifo.pop()
document.write( "out : <br/>",b , "<br/>");

var b = fifo.pop()
document.write( "out : <br/>",b , "<br/>");

var b = fifo.pop()
document.write( "out : <br/>",b , "<br/>");

var b = fifo.pop()
document.write( "out : <br/>",b , "<br/>");


// 15

document.write("<h3>Phones Dropdown</h3>")
var cellPhones = ["Apple", "Samsung", "Motorolla", "Nokia", "Sony", "Haier"];
document.write("<select>");
document.write("<option>" + cellPhones[0] + "</option>");
document.write("<option>" + cellPhones[1] + "</option>");
document.write("<option>" + cellPhones[2] + "</option>");
document.write("<option>" + cellPhones[3] + "</option>");
document.write("<option>" + cellPhones[4] + "</option>");
document.write("</secellPhones>");

// chap 17 to 20 

// 1. 
var array = [ ];
var array = [
    [1,2,3],["h","e"],[3,4],[1,2,3,4]
 ];
 console.log(array);

// 2
var array = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
 ];

console.log(array);

// 3
document.write("<h2>Counting</h2><br>");
for(var i=1; i<11; i++){
    document.write(i + "\n");
    console.log(i);
}



// / 4
document.write("Userdefined Multiplication Table <br>");
var userNumber = parseInt(prompt("please enter your number to show its multiplication table:"));
var userRange = parseInt(prompt("Enter length multiplication table:"));

for(var i = 1; i <= userRange; i++) {
    var result = i * userNumber;
    document.write(`${userNumber} * ${i} = ${result}` + "<br>");
   console.log(`${userNumber} * ${i} = ${result}`);
}





// 5

var fruits = [" Apple ", " Banana ", " Mango ", " Orange ", " Strawberry "];

document.write(fruits , "\n")
document.write( "\n \n")

document.write( "WITH LOOP : " , "\n")
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "\n");
}

document.write("\n")
for(i=0; i < fruits.length; i++){
    document.write("Element at index " + i + " is " + fruits[i] + "\n");
}

//6
document.write("Counting: \n");

for(var i=0; i<11; i++){
    document.write(i + "\n");
    console.log(i);
}


// b. Reverse 

document.write(" Reverse counting: \n");
for(var i=10; i>0; i--){
    document.write(i + "\n"); 
     console.log(i);
}

// c
document.write(" Even counting: \n");

 for(var i=0; i<21; i+=2){
    document.write(i + "\n");
    console.log(i);
}

// d
document.write(" Odd counting: \n");

 for(var i=1; i<20; i+=2){
    document.write(i + "\n");
    console.log(i);
}

// e
document.write(" Series counting: \n");
for(var i=2; i<21; i+=2){
    document.write(i + "k\n");
    console.log(i)
}


// 7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var matchFound = true;

var product = prompt("Welcome to ABC A. What do you want to order sir/ma'am? ");

for (let i = 0; i < A.length; i++) {
console.log(A[i]);    

if (product == A[i]) {
 matchFound = true;
    document.write(product + " is available at index " + i + " in our A");
    break;
} 
}
if( product !== A.length) {
matchFound == false;
document.write(product + " is not available at our A") ;   
}



// 8
var A = [24, 53, 78, 91, 12];

for(var i = 0; i<=A.length; i++){
    document.write("array items"+ A[i] )
}
document.write(Math.max(...A))
document.write("\n")

// 9
var A = [24, 53, 78, 91, 12];

for(var i = 0; i<=A.length; i++){
    document.write("array items"+ A[i] )
}
document.write(Math.min(...A))
document.write("\n")

// 10
for(var i = 1; i<=20; i++){
    document.write(i*5);
}















