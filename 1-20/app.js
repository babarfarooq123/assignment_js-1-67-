// Chapter # 1
// 1
alert("Welcome to my Website!");
// 2
alert("Error! Please enter a valid password.");
// 3
alert("Welcome to JS Land... \n Happy Coding!");
// 4
alert("Welcome to JS Land...");
alert("Happy Coding!");
// 5
alert("Hello... I can run JS through my web browser's console");


// Chapter # 2
// 1
var username;
// 2
var myName = "Babar Farooq";
// 3
var message;
message = "Hello World";
alert(message);
// 4
var studentName = "Babar Farooq";
var age = 18;
var course = "Certified Mobile Application Development";
alert(studentName);
alert(age);
alert(course);
// 5
var food = "PIZZA \n PIZZ \n PIZ \n PI \n P";
alert(food);
// 6
var email = "babarfarooq99@gmail.com";
alert("Mu email address is "+email);
// 7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn form a book "+book);
// 8
document.write("Yah! I can write HTML content through JavaScript");
// 9
var stylee = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(stylee)


// Chapter # 3
// 1
var age = 20;
alert("I am "+age+" years old");
// 2
var visit = 14;
alert("You have visited the site "+visit+" times");
// 3
var birthYear = 1999;
document.write("<br><br>My birth year is "+birthYear+"<br> Data type of my declared variable is "+typeof(birthYear));
// 4
var visitorName = "John Doe";
var productTitle = "T-shirt(s)";
var quantity = 5;
document.write("<br><br>"+visitorName+" ordered "+quantity+" "+productTitle+" on XYZ Clothing store");


// Chapter # 4
// 1
var a,b,c;
// 2
var $h1,_h2,abc,def123,$ghi;
// var !$h1,@_h2,123,123abc,abc;
// 3
document.write("<br><br><h1>Rules for naming JS variables</h1><br><br>");
document.write("Variable names can only contain numbers, $, _ and alphabets For example: $name = my_1stVariable <br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS keywords");


// Chapter # 5
// 1
var n1 = +prompt("Enter Number","1st Number");
var n2 = +prompt("Enter Number","2nd Number");
var sum = n1+n2;
document.write("<br><br>Sum of "+n1+" and "+n2+" is "+sum);
// 2
var n1 = +prompt("Enter Number","1st Number");
var n2 = +prompt("Enter Number","2nd Number");
var sum = n1-n2;
document.write("<br><br>Subtraction of "+n1+" and "+n2+" is "+sum);
var n1 = +prompt("Enter Number","1st Number");
var n2 = +prompt("Enter Number","2nd Number");
var sum = n1*n2;
document.write("<br><br>Multiplication of "+n1+" and "+n2+" is "+sum);
var n1 = +prompt("Enter Number","1st Number");
var n2 = +prompt("Enter Number","2nd Number");
var sum = n1/n2;
document.write("<br><br>Division of "+n1+" and "+n2+" is "+sum);
var n1 = +prompt("Enter Number","1st Number");
var n2 = +prompt("Enter Number","2nd Number");
var sum = n1%n2;
document.write("<br><br>Modulus of "+n1+" and "+n2+" is "+sum);
// 3
// a
var v1;
// b
document.write("<br><br>Value after variable declaration is "+v1);
// c
v1 = 5;
// d
document.write("<br>Initial value: "+v1);
// e
v1++;
// f
document.write("<br>Value after increment is: "+v1);
// g
v1+=7;
// h
document.write("<br>Value after addition is "+v1);
// i
v1--;
// j
document.write("<br>Value after decrement is "+v1);
// k
v1%=3;
// l
document.write("<br>The remainder is "+v1);
// 4
var ticket = 600;
document.write("<br><br>Total cost to buy 5 tickets to a movie is "+(5*ticket)+"PKR");
// 5
var table = +prompt("Enter table number","Table number");
document.write("<br><br>Table of "+table);
document.write("<br>"+table+" X 1 ="+(table*1));
document.write("<br>"+table+" X 2 ="+(table*2));
document.write("<br>"+table+" X 3 ="+(table*3));
document.write("<br>"+table+" X 4 ="+(table*4));
document.write("<br>"+table+" X 5 ="+(table*5));
document.write("<br>"+table+" X 6 ="+(table*6));
document.write("<br>"+table+" X 7 ="+(table*7));
document.write("<br>"+table+" X 8 ="+(table*8));
document.write("<br>"+table+" X 9 ="+(table*9));
document.write("<br>"+table+" X 10 ="+(table*10));
// 6
var celsius = 25;
var fahrenheit = (celsius*(9/5))+32;
document.write("<br><br>"+celsius+"<sup>0</sup>C is "+fahrenheit+"<sup>0</sup>F");
fahrenheit = 70;
celsius = (fahrenheit-32)*(5/9);
document.write("<br><br>"+fahrenheit+"<sup>0</sup>F is "+celsius+"<sup>0</sup>C");
// 7
var priceOfItem1 = +prompt("Enter Price of item 1");
var orderedQuantityOfItem1 = +prompt("Enter Ordered quantity of item 1");
var priceOfItem2 = +prompt("Enter Price of item 2");
var orderedQuantityOfItem2 = +prompt("Enter Ordered quantity of item 2");
var shippingCharges = +prompt("Enter Shipping charges");
document.write("<br><br>Price of Item 1 is "+priceOfItem1+"<br>Quantity of Item 1 is "+orderedQuantityOfItem1);
document.write("<br>Price of Item 2 is "+priceOfItem2+"<br>Quantity of Item 2 is "+orderedQuantityOfItem2);
document.write("<br>Shipping Charges "+shippingCharges);
document.write("<br>Total cost of your order is "+((priceOfItem1*orderedQuantityOfItem1)+(priceOfItem2*orderedQuantityOfItem2)+shippingCharges));
// 8
var totalMarks = 980;
var obtainedMarks = 804;
document.write("<br><br><h2>Marks Sheet</h2><br><br>");
document.write("<br>Total Marks: "+totalMarks);
document.write("<br>Marks Obtained: "+obtainedMarks);
document.write("<br>Percentage: "+(obtainedMarks/totalMarks)*100+"%");
// 9
document.write("<br><br><h1>Currency in PKR</h1><br><br>");
document.write("Total Currency in PKR: "+((10*104.80)+(25*28)));
// 10
var randomNumber = 10;
randomNumber = (((randomNumber+5)*10)/2);
// 11
var currentYear = 2016;
var birthYear = 1992;
document.write("<br><br><h1>Age Calculator</h1><br><br>");
document.write("Current Year: "+currentYear);
document.write("<br>Birth Year: "+birthYear);
document.write("<br>Your Age: "+(currentYear-birthYear));
// 12
var radius = 20;
document.write("<br><br><h1>The Geometrizer</h1><br><br>");
document.write("<br>Radius of a circle: "+radius);
document.write("<br>The circumference is: "+(2*3.142*radius));
document.write("<br>The area is: "+(3.142*radius*radius));
// 13
var snack = "Chocolate chips";
var currentAge = 15;
var maxAge = 65;
var estAmount = 3;
document.write("<br><br><h1>The Lifetime Supply Calculator</h1><br><br>");
document.write("Favourite Snack: "+snack);
document.write("<br>Current Age: "+currentAge);
document.write("<br>Estimated Maximum Age: "+maxAge);
document.write("<br>Amount of snacks per day: "+estAmount);
document.write("<br>You will need "+(maxAge-currentAge)*estAmount+" "+snack+" to last you untill the ripe old age of "+maxAge);


// Chapter # 6-9
// 1
var a = 10
document.write("<br><br>Result");
document.write("<br>The value of a is: "+v1);
++a;
document.write("<br><br>The value of ++a is: "+a);
document.write("<br>Now the value of a is: "+a);
a++;
document.write("<br><br>The value of a++ is: "+a);
document.write("<br>Now the value of a is: "+a);
--a;
document.write("<br><br>The value of --a is: "+a);
document.write("<br>Now the value of a is: "+a);
a--;
document.write("<br><br>The value of a-- is: "+a);
document.write("<br>Now the value of a is: "+a);
// 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<br><br>a is "+a);
document.write("<br>b is "+b);
document.write("<br>Result is "+result);
// 3
var name = prompt("Enter your Name: ");
alert("Welcome "+name+" to my website");
// 4 and 5
var table = +prompt("Enter Number: ");
if(table){
    document.write("<br><br>Table of "+table);
    document.write("<br>"+table+" X 1 ="+(table*1));
    document.write("<br>"+table+" X 2 ="+(table*2));
    document.write("<br>"+table+" X 3 ="+(table*3));
    document.write("<br>"+table+" X 4 ="+(table*4));
    document.write("<br>"+table+" X 5 ="+(table*5));
    document.write("<br>"+table+" X 6 ="+(table*6));
    document.write("<br>"+table+" X 7 ="+(table*7));
    document.write("<br>"+table+" X 8 ="+(table*8));
    document.write("<br>"+table+" X 9 ="+(table*9));
    document.write("<br>"+table+" X 10 ="+(table*10));
}else{
    document.write("<br><br>Table of "+table);
    document.write("<br>5 X 1 ="+(5*1));
    document.write("<br>5 X 2 ="+(5*2));
    document.write("<br>5 X 3 ="+(5*3));
    document.write("<br>5 X 4 ="+(5*4));
    document.write("<br>5 X 5 ="+(5*5));
    document.write("<br>5 X 6 ="+(5*6));
    document.write("<br>5 X 7 ="+(5*7));
    document.write("<br>5 X 8 ="+(5*8));
    document.write("<br>5 X 9 ="+(5*9));
    document.write("<br>5 X 10 ="+(5*10));
}
// 6
var subject1 = prompt("Enter subject 1 name: ");
var subject2 = prompt("Enter subject 2 name: ");
var subject3 = prompt("Enter subject 3 name: ");
var totalMarks = 100;
var obtainedMarks1 = +prompt("Enter Obtained marks in subject 1: ");
var obtainedMarks2 = +prompt("Enter Obtained marks in subject 2: ");
var obtainedMarks3 = +prompt("Enter Obtained marks in subject 3: ");
document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>"+subject1+"</td><td>"+totalMarks+"</td><td>"+obtainedMarks1+"</td><td>"+(obtainedMarks1/totalMarks)*100+"%</td></tr><tr><td>"+subject2+"</td><td>"+totalMarks+"</td><td>"+obtainedMarks2+"</td><td>"+(obtainedMarks2/totalMarks)*100+"%</td></tr><tr><td>"+subject3+"</td><td>"+totalMarks+"</td><td>"+obtainedMarks3+"</td><td>"+(obtainedMarks3/totalMarks)*100+"%</td></tr><tr><td>"+"</td><th>"+"300</th><th>"+(obtainedMarks1+obtainedMarks2+obtainedMarks3)+"</th><th>"+((obtainedMarks1+obtainedMarks2+obtainedMarks3)/300)*100+"%</th></tr></table>");
// Chapter # 9-11
// 1
var cityName = prompt("Enter City ");
if(cityName === "karachi"){
    document.write("<br><br><h1>Welcome to city of lights</h1>");
}else{
    document.write("Welcome to city "+cityName);
}
// 2
var gender = prompt("Enter Gender ");
if(gender === "male"){
    alert("Good Morning Sir");
}else if(gender === "female"){
    alert("Good Morning Mam");
}
// 3
var signalColor = prompt("Enter signal Color ");
if(signalColor === "red"){
    alert("Must stop");
}else if(signalColor === "green"){
    alert("Move Now");
}else if(signalColor === "yellow"){
    alert("Ready to move");
}
// 4
var fuel = prompt("Enter remaining fuel in car");
if(fuel<0.25){
    alert("Please refill the fuel in your car");
}
// 5
// a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// e
if (true){
    alert("True");
}
if (false){
   alert("False");
}
// f
if("car" < "cat"){
    alert("car is smaller than cat");
}
// 6
var obtainedMarks = +prompt("Enter Obtained marks of all subjects: ");
var totalMarks = +prompt("Enter Total marks of all marks: ");
var percentage = (obtainedMarks/totalMarks)*100;
var grade = '';
var remarks = '';
if(percentage>=80){
    remarks = "Excellent";
    grade = "A-one";
}else if(percentage>=70){
    remarks = "Good";
    grade = "A";
}else if(percentage>=60){
    remarks = "You need to improve";
    grade = "B";
}else if(percentage<60){
    remarks = "Sorry";
    grade = "Fail";
}
document.write("<br><br><h1>Marks Sheet</h1><br><br>");
document.write("Total marks : "+totalMarks);
document.write("<br>Marks Obtained : "+obtainedMarks);
document.write("<br>Percentage : "+percentage+"%");
document.write("<br>Grade : "+grade);
document.write("<br>Remarks : "+remarks);
// 7
var secretNumber = Math.floor(Math.random()*10)+1;
var userSecret = +prompt("Enter a GUESS NUMBER");
if(secretNumber === userSecret){
    alert("Bingo");
}else if(secretNumber === userSecret+1){
    alert("Close enough to the correct answer");
}
// 8
var divisibleBy3 = +prompt("Enter Number : ");
if((divisibleBy3/3)===0){
    alert("Number is divisible by 3");
}
// 9
var evenOdd = +prompt("Enter Number : ");
if((evenOdd/2)===0){
    alert("Number is Even");
}else{
    alert("Number is Odd");
}
// 10
var T = +prompt("Enter Temperature");
if(T>40){
    alert("It is too hot outside.");
}else if(T>30){
    alert("The Weather today is Normal.")
}else if(T>20){
    alert("Today’s Weather is cool.");
}else if(T>10){
    alert("OMG! Today’s weather is so Cool.");
}
// 11
var firstNumber = +prompt("Enter First Number ");
var secondNumber = +prompt("Enter Second Number");
var operation = prompt("Enter Operation");
if(operation === '+'){
    alert("Sum = "+(firstNumber+secondNumber));
}else if(operation === '-'){
    alert("Subtraction = "+(firstNumber-secondNumber));
}else if(operation === '*'){
    alert("Multiplication = "+(firstNumber*secondNumber));
}else if(operation === '/'){
    alert("Division = "+(firstNumber/secondNumber));
}else if(operation === '%'){
    alert("Remainder = "+(firstNumber%secondNumber));
}
// Chapter # 12-13
// 1
var v1 = prompt("Enter a Character ");
if(v1.charCodeAt(v1)>=65&&v1.charCodeAt(v1)<=90){
    alert("Uppercase");
}else if(v1.charCodeAt(v1)>=97&&v1.charCodeAt(v1)<=122){
    alert("Lowercase");
}else{
    alert("Number");
}
// 2
var v1 = +prompt("Enter 1st integer 1 ");
var v2 = +prompt("Enter 1st integer 2 ");
if(v1>v2){
    alert("v1 is larger");
}else if(v2>v1){
    alert("v2 is larger");
}else if(v1 === v2){
    alert("Both numbers are equal");
}
// 3
var v1 = +prompt("Enter a number to check whether it is +ve, -ve or zero");
if(v1>0){
    alert("number is +ve");
}else if(v1<0){
    alert("number is -ve");
}else{
    alert("number is zero");
}
// 4
var v1 = prompt("Enter a character to check if its vowel or not");
if(v1==='a'||v1==='e'||v1==='i'||v1==='o'||v1==='u'){
    alert("True");
}else{
    alert("False");
}
// 5
var correctPassword = "hello123";
var password = prompt("Enter Password");
if(password){
   alert("Enter your password"); 
}else if(correctPassword === password){
    alert("Correct! The password you entered matches the original password");
}else{
    alert("Incorrect password");
}
// 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}else{
greeting = "Good evening";
}
// 7
var timeInput = +prompt("Enter time in 24 hour format");
if(timeInput>=0 && timeInput<1200){
    alert("Good Morning");
}else if(timeInput>=1200 && timeInput<1700){
    alert("Good Afternoon");
}else if(timeInput>=1700 && timeInput<2100){
    alert("Food Evening");
}else if(timeInput>=2100 && timeInput<=2359){
    alert("Good Night");
}
// Chapter # 14-16
// 1
var literalNotation = [];
// 2
var objectNotation = new Array();
// 3
var stringArray = ["a","b","c"];
// 4
var numberArray = [1,2,3,4];
// 5
var booleanArray = [true,true,false,true];
// 6
var mixedArray = ["a","b","c",1,3,5];
// 7
var eduQualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
document.write("<br><br><h1>Quallifications</h1><br><br>");
document.write("<h3>1) "+eduQualifications[0]+"</h3>");
document.write("<h3>2) "+eduQualifications[1]+"</h3>");
document.write("<h3>3) "+eduQualifications[2]+"</h3>");
document.write("<h3>4) "+eduQualifications[3]+"</h3>");
document.write("<h3>5) "+eduQualifications[4]+"</h3>");
document.write("<h3>6) "+eduQualifications[5]+"</h3>");
document.write("<h3>7) "+eduQualifications[6]+"</h3>");
document.write("<h3>8) "+eduQualifications[7]+"</h3>");
// 8
var studentNames = ["Michael","John","Tony"];
var scoreOfStudents = [320,230,480];
var totalMarks = 500;
var p1 = (scoreOfStudents[0]/totalMarks)*100,p2 = (scoreOfStudents[1]/totalMarks)*100,p3 = (scoreOfStudents[2]/totalMarks)*100;
document.write("<br><br><h2>Score of "+studentNames[0]+" is "+scoreOfStudents[0]+". Percentage: "+p1+"%</h2>");
document.write("<h2>Score of "+studentNames[1]+" is "+scoreOfStudents[1]+". Percentage: "+p2+"%</h2>");
document.write("<h2>Score of "+studentNames[2]+" is "+scoreOfStudents[2]+". Percentage: "+p3+"%</h2>");
// 9
var colorNames = ["Red","Green","Blue","Yellow"];
document.write("<br><br><h3>"+colorNames[0]+"</h3>");
document.write("<br><br><h3>"+colorNames[1]+"</h3>");
document.write("<br><br><h3>"+colorNames[2]+"</h3>");
document.write("<br><br><h3>"+colorNames[3]+"</h3>");
// a
var addColor = prompt("Add Color to the Beginning of the Array");
colorNames.unshift(addColor);
document.write("<br><br><h3>"+colorNames+"</h3>");
// b
var addColor = prompt("Add Color to the End of the Array");
colorNames.push(addColor);
document.write("<br><br><h3>"+colorNames+"</h3>");
// c
colorNames.unshift("Purple","Brown")
document.write("<br><br><h3>"+colorNames+"</h3>");
// d
colorNames.shift();
document.write("<br><br><h3>"+colorNames+"</h3>");
// e
colorNames.pop();
document.write("<br><br><h3>"+colorNames+"</h3>");
// f
var indexOfColor = +prompt("Enter the index at which you want to add color");
var addColor = prompt("Enter Color to add at desired position");
colorNames.splice(indexOfColor,0,addColor);
document.write("<br><br><h3>"+colorNames+"</h3>");
var deleteColorsIndex = +prompt("From which index you want to delete colors");
var noOfItems = +prompt("Enter how many items you want to delete");
colorNames.splice(deleteColorsIndex,noOfItems);
document.write("<br><br><h3>"+colorNames+"</h3>");
// 10
var v1 = [320,230,480,120];
v1.sort();
document.write("<br><br><h3>Scores of Students : "+v1+"</h3>");
document.write("<h3>Ordered Scores of Students : "+v1+"</h3>");
// 11
var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedCities = cities.slice(1,cities.length-1);
document.write("<br><br><h3>Cities List: <br>"+cities+"</h3>");
document.write("<h3>Selected Cities list: <br>"+selectedCities+"</h3>");
// 12
var arr = ["This"," is"," my"," cat"];
var join = arr.join(" ");
document.write("<br><br><h3>Array<br>"+arr+"</h3>");
document.write("<h3>String<br>"+join+"</h3>");
// 13
var devices = ["keyboard","mouse","printer","monitor"];
document.write("<br><h3>Devices:<br>"+devices+"</h3>");
document.write("<h3>Out:<br>"+devices[0]+"</h3>");
document.write("<h3>Out:<br>"+devices[1]+"</h3>");
document.write("<h3>Out:<br>"+devices[2]+"</h3>");
document.write("<h3>Out:<br>"+devices[3]+"</h3>");
// 14
var devices = ["keyboard","mouse","printer","monitor"];
document.write("<br><h3>Devices:<br>"+devices+"</h3>");
document.write("<h3>Out:<br>"+devices[3]+"</h3>");
document.write("<h3>Out:<br>"+devices[2]+"</h3>");
document.write("<h3>Out:<br>"+devices[1]+"</h3>");
document.write("<h3>Out:<br>"+devices[0]+"</h3>");
// 15
var manufacturers = ["Apple","Samsung","Motrola","Nokia","Sony","Haier"];
document.write("<br><br><select><option>"+manufacturers[0]+"</option><option>"+manufacturers[1]+"</option><option>"+manufacturers[2]+"</option><option>"+manufacturers[3]+"</option><option>"+manufacturers[4]+"</option><option>"+manufacturers[5]+"</option></select>");
// Chapter # 17-20
// 1
var multiArray = [[1,2],[3,4],[5,6]];
// 2
var multiArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// 3
document.write("<br><br>");
for(var i = 1 ; i<=10 ; i++){
    document.write("<h3>"+i+"</h3>");
}
// 4
var multiplicationTable = +prompt("Enter a number to show its multiplication table");
var lengthOfMulti = +prompt("Enter length of multiplication Table");
document.write("<br><br>");
for(var i = 1 ; i<=lengthOfMulti ; i++){
    document.write("<h3>"+multiplicationTable+" X "+i+" = "+(multiplicationTable*i)+"</h3>");
}
// 5
var fruits = ["apple", "banana", "mango", "orange","strawberry"];
document.write("<br><br>");
for( var i = 0 ; i<fruits.length ; i++){
    document.write("<h3>"+fruits[i]+"</h3>");
}
// 6
// a
document.write("<br><br>");
document.write("Counting:<br>")
for( var i = 1 ; i<=15 ; i++){
    document.write(i+", ");
}
// b
document.write("<br><br>");
document.write("Reverse Counting:<br>")
for( var i = 10 ; i>=1 ; i--){
    document.write(i+", ");
}
// c
document.write("<br><br>");
document.write("Even:<br>")
for( var i = 0 ; i<=20 ; i+=2){
    document.write(i+", ");
}
// d
document.write("<br><br>");
document.write("Odd:<br>")
for( var i = 1 ; i<=19 ; i+=2){
    document.write(i+", ");
}
// e
document.write("<br><br>");
document.write("Serias:<br>")
for( var i = 2 ; i<=20 ; i+=2){
    document.write(i+"k, ");
}
// 7
var A = ["cake","apple pie","cookie","chips","patties"];
var search = prompt("Enter item to search");
for( var i = 0 ; i<A.length ; i++){
    if(A[i]==search){
        alert("Item "+search+" is found in the Array at index "+i);
        search=-1;
        break;
    }
}
if(search!=-1){
    alert("We are Sorry. "+search+" is not available in our bakery");
}
// 8
var A = [24, 53, 78, 91, 12];
var large = A[0];
for(var i=1;i<A.length;i++){
    if(large<A[i]){
        large = A[i];
    }
}
document.write("<br><br>Array items: "+A);
document.write("<br>The largesr number is : "+large);
// 9
var A = [24, 53, 78, 91, 12];
var small = A[0];
for(var i=1;i<A.length;i++){
    if(small>A[i]){
        small = A[i];
    }
}
document.write("<br><br>Array items: "+A);
document.write("<br>The smallest number is : "+small);
// 10
document.write("<br><br>");
for(var i=1;i<=20;i++){
    document.write(5*i+", ");
}