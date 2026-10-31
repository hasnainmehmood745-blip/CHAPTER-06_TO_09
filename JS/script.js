// Chapter #06
// Q1
// step 1 variable
// var a = 10;

// heading
// document.write("Result: <br>");
// document.write(" The value of a is: " + a + "<br>");
// document.write(" ........................ <br><br>");

// Pre-Increment (++a)
// document.write(" The value of ++a is: " + (++a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// Post-Increment (a++)
// document.write(" The value of a++ is: " + (a++) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// Pre-Decrement (--a)
// document.write("The value of --a is: " + (--a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// Post-Decrement (a--)
// document.write("The value of a-- is: " + (a--) + "<br>");
// document.write("Now the value of a is: " + a);

// Q2
// Initial values
// var a = 2 , b = 1; 

// calculation
// var result = --a - --b + ++b + b--;

// Output print
// document.write(" a is " + a + "<br>"); 
// document.write(" b is " + b + "<br>");
// document.write(" result is " + result);

// Q3
// var userName = prompt("Enter Your Name:");
// 
// alert(" Hello " + userName + " ! Welcome!");

// Q5
// var userNum = prompt("Please enter a number for multiplication table:");
// 
// userNum =  userNum || 5;
// 
// Table of 5
// document.write(" <h1><b>Table of " + userNum + " </b></h1><br>");
// document.write(userNum + " x 1 = " + (userNum * 1) + "<br>");
// document.write(userNum + " x 2 = " + (userNum * 2) + "<br>");
// document.write(userNum + " x 3 = " + (userNum * 3) + "<br>");
// document.write(userNum + " x 4 = " + (userNum * 4) + "<br>");
// document.write(userNum + " x 5 = " + (userNum * 5) + "<br>");
// document.write(userNum + " x 6 = " + (userNum * 6) + "<br>");
// document.write(userNum + " x 7 = " + (userNum * 7) + "<br>");
// document.write(userNum + " x 8 = " + (userNum * 8) + "<br>");
// document.write(userNum + " x 9 = " + (userNum * 9) + "<br>");
// document.write(userNum + " x 10 = " + (userNum * 10) + "<br>");

// Q6
// a)
// var sub1 = prompt("Enter first subject name:");
// var sub2 = prompt("Enter second subject name:");
// var sub3 = prompt("Enter third subject name:");
// 
// b) 
// var totalMarksEach = 100;
// 
// c) 
// var obtMarks1 = Number(prompt("Enter obtained marks for " + sub1 + ":"));
// 
// d)
// var obtMarks2 = Number(prompt("Enter obtained marks for " + sub2 + ":"));
// var obtMarks3 = Number(prompt("Enter obtained marks for " + sub3 + ":"));
// 
// e) 
// var per1 = (obtMarks1 / totalMarksEach) * 100;
// var per2 = (obtMarks2 / totalMarksEach) * 100;
// var per3 = (obtMarks3 / totalMarksEach) * 100;
// 
// var totalMarksAll = totalMarksEach * 3;
// var totalObtMarks = obtMarks1 + obtMarks2 + obtMarks3;
// var overallPercentage = (totalObtMarks / totalMarksAll) * 100;
// 
// Show the result 
// document.write("<table>");
// 
// Header row
// document.write("<tr>");
// document.write("<th><b>Subject &nbsp;</b></th>");
// document.write("<th><b>Total Marks &nbsp;</b></th>");
// document.write("<th><b>Obtained Marks &nbsp;</b></th>");
// document.write("<th><b>Percentage</b></th>");
// document.write("</tr>");
// 
// Subject 1 
// document.write("<tr>");
// document.write("<td>" + sub1 + "</td>");
// document.write("<td>" + totalMarksEach + "</td>");
// document.write("<td>" + obtMarks1 + "</td>");
// document.write("<td>" + per1 + "%</td>");
// document.write("</tr>");
// 
// Subject 2 
// document.write("<tr>");
// document.write("<td>" + sub2 + "</td>");
// document.write("<td>" + totalMarksEach + "</td>");
// document.write("<td>" + obtMarks2 + "</td>");
// document.write("<td>" + per2 + "%</td>");
// document.write("</tr>");
// 
// Subject 3 
// document.write("<tr>");
// document.write("<td>" + sub3 + "</td>");
// document.write("<td>" + totalMarksEach + "</td>");
// document.write("<td>" + obtMarks3 + "</td>");
// document.write("<td>" + per3 + "%</td>");
// document.write("</tr>");
// 
// Total row 
// document.write("<tr>");
// document.write("<td></td>");
// document.write("<td><b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + totalMarksAll + "</b></td>");
// document.write("<td><b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + totalObtMarks + "</b></td>");
// document.write("<td><b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + overallPercentage.toFixed(0) + "%</b></td>");
// document.write("</tr>");
// 
// document.write("</table>");
// Chapter #06 completed

// Chapter #09 Started 
// Q1
// var city = prompt("Enter your city name");
// city === "Karachi" && alert("Welcome to city of lights");

// Q2
// 1. 
// let gender = prompt("Enter Your Gender (Male/Female):") .toLowerCase();

// 2. 
// let messages = {
    // "male": "Good Morning SIR",
    // "female": "Good Morning MAM"
// };

// 3. 
// document.write(messages[gender]);

// Q3

// Styles_&_COLOR CODE 
// var shade = "background-color:#deeaf6;";
// var colorCell = "font-weight:bold; height:38px; padding:0 0 2px 0; vertical-align:bottom;";
// var msgCell = "font-weight:normal; height:38px; padding:2px 0 0 0; vertical-align:top;";
// var headCell = "height:30px; padding:0; font-weight:bold; border-bottom:1px solid #9dc3e6;";

// Page
// document.write("<style>body { margin:0; background:white; }</style>");

// Table shuru
// document.write("<table style=\"margin-left:55px; margin-top:34px; width:668px; table-layout:fixed; border-collapse:collapse; border-top:1px solid #9dc3e6; border-bottom:1px solid #9dc3e6; font-family:'Book Antiqua','Palatino Linotype',Palatino,Georgia,serif; font-size:24px; color:#2e74b5; text-align:center;\">");

// Column widths
// document.write("<col style='width:32%'>");
// document.write("<col style='width:68%'>");

// Header row
// document.write("<tr>");
// document.write("<th style='" + headCell + "'>Signal color</th>");
// document.write("<th style='" + headCell + "'>Message</th>");
// document.write("</tr>");

// Red row 
// document.write("<tr>");
// document.write("<td style='" + colorCell + shade + "'>Red</td>");
// document.write("<td style='" + msgCell + shade + "'>Must Stop</td>");
// document.write("</tr>");

// Yellow row 
// document.write("<tr>");
// document.write("<td style='" + colorCell + "'>Yellow</td>");
// document.write("<td style='" + msgCell + "'>Ready to move</td>");
// document.write("</tr>");

// Green row 
// document.write("<tr>");
// document.write("<td style='" + colorCell + shade + "'>Green</td>");
// document.write("<td style='" + msgCell + shade + "'>Move now</td>");
// document.write("</tr>");

// Khali row 
// document.write("<tr>");
// document.write("<td style='" + colorCell + "'></td>");
// document.write("<td style='" + msgCell + "'></td>");
// document.write("</tr>");

// Table khatam
// document.write("</table>");

// Q3
// SIMPLE CODE 
// document.write("<table>");

// document.write("<tr>");
// document.write("<th>Signal color</th>");
// document.write("<th>Message</th>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>Red</td>");
// document.write("<td>Must Stop</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>Yellow</td>");
// document.write("<td>Ready to move</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>Green</td>");
// document.write("<td>Move now</td>");
// document.write("</tr>");

// document.write("</table>");

// Q4
// 1.
// var fuel = prompt("Gaari mein kitna fuel bacha hai (litres mein)?");

// 2.
// var messages = ["", "Please refill the fuel in your car"];

// 3. 
// var low = Number(fuel < 0.25);

// 4.
// var low = Number(fuel < 0.25);
// Q5
// a.)
// var a = 4; 
// if(++a === 5){
// alert("given condition for variable a is true");
// }

// b.
// var b = 82; 
// if(b++ === 83){
// alert("given condition for variable b is true");
// } 

// c.
// var c = 12;
// if(c++ === 13){
// alert("condition 1 is true");
// }

// if(c === 13){
// alert("condition 2 is true");
// }

// if(++c === 14){
// alert("condition 3 is true");
// }

// if(c === 14){
// alert("condition 4 is true");
// }

// d.
// var materialCost  = 20000; 
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if(totalCost === laborCost + materialCost){
// alert("The Cost Equal");
// }

// e.
// if(true){
// alert("True");
// }

// if(false){
// alert("False");
// }

// f. 
// if("car" < "cat"){
// alert("car is smaller than cat")
// }

// Q6
// Marks input
// var totalMarks = 300;
// var obtained = Number(prompt("Marks obtained likho (out of 300):"));

// Percentage
// var percentage = Math.round((obtained / totalMarks) * 100);

// Percentage ko 5 se divide karke neeche round kar lo (jaise 73 -> 14)
// var fives = Math.floor(percentage / 5);

// var grade;
// var remarks;

// switch (fives) {
//   case 20:
//   case 19:
//   case 18:
//   case 17:
//   case 16:
    // grade = "A-one";
    // remarks = "Excellent";
    // break;
//   case 15:
    // grade = "A";
    // remarks = "Good";
    // break;
//   case 14:
//   case 13:
//   case 12:
    // grade = "B";
    // remarks = "You need to improve";
    // break;
//   default:
    // grade = "Fail";
    // remarks = "Sorry";
// }

// Output
// document.write("<div style='border:1px solid #5b9bd5; padding:10px; width:500px; font-family:Times New Roman;'>");
// document.write("<h1>Marks Sheet</h1><br><br>");
// document.write("<font size='6'>");
// document.write("Total marks : " + totalMarks + "<br>");
// document.write("Marks obtained : " + obtained + "<br>");
// document.write("Percentage : " + percentage + "%<br>");
// document.write("Grade : " + grade + "<br>");
// document.write("Remarks : " + remarks + "<br>");
// document.write("</font>");
// document.write("</div>");

// A (Good): 225 se 239 marks (75% se 79%)
// B (You need to improve): 180 se 224 marks (60% se 74%)
// Fail (Sorry): 179 ya us se kam

// Q7

// Secret number (1 se 10)
// var secret = 7;

// User se guess poochho
// var guess = Number(prompt("Guess the secret number (1 se 10):"));

// Check 
// if (guess == secret) {
//   document.write("Bingo! Correct answer");
// }
// if (guess + 1 == secret) {
//   document.write("Close enough to the correct answer");
// }

// Q8
// User se number lo
// var num = Number(prompt("Ek number likho:"));

// Check karo: 3 se divide karne par remainder 0 hai?
// if (num % 3 == 0) {
//   document.write(num + " is divisible by 3");
// }

// Q9
// User se number lo
// var num = Number(prompt("Ek number likho:"));

// Check karo: 2 se divide karne par remainder 0 hai?
// if (num % 2 == 0) {
//   document.write(num + " is an even number");
// } else {
//   document.write(num + " is an odd number");
// }

// Q10
// User se temperature lo
// var T = Number(prompt("Temperature likho:"));

// Sabse bade se shuru karo
// if (T > 40) {
//   document.write("It is too hot outside.");
// } else if (T > 30) {
//   document.write("The Weather today is Normal.");
// } else if (T > 20) {
//   document.write("Today's Weather is cool.");
// } else if (T > 10) {
//   document.write("OMG! Today's weather is so Cool.");
// }

// Q11
// Input lo
// var a = Number(prompt("First number likho:"));
// var b = Number(prompt("Second number likho:"));
// var op = prompt("Operation likho (+, -, *, /, %):");

// Operation check karo
// if (op == "+") {
//   document.write(a + " + " + b + " = " + (a + b));
// }
// if (op == "-") {
//   document.write(a + " - " + b + " = " + (a - b));
// }
// if (op == "*") {
//   document.write(a + " * " + b + " = " + (a * b));
// }
// if (op == "/") {
//   document.write(a + " / " + b + " = " + (a / b));
// }
// if (op == "%") {
//   document.write(a + " % " + b + " = " + (a % b));
// }
// Chapter #09 completed

