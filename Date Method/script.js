/*Date Methods
-toDateString()
-getDate()
-getFullYear()
-getMonth()
-getDay()
-getHours()
-getMinutes()
-getSeconds()
-getMilliseconds()
-setDate()
-setFullYear()
-setMilliseconds()
-setMinutes()
-setMonths()
-setSeconds()
 */

//toDateString()
//It Picks the time from the sytsem,not from the server as JavaScript is a client side Script
//When we use the Date() methods, it gives too much information like "Mon Oct 02 2023 10:02:39 GMT+0530 (India Standard Time)"
//In order to access only the date we use toDateString()---> Mon Oct 02 2023
var now=new Date();
document.write(now.toDateString()+"<br>")

//getDate()
//Prints only the Date ---> 2
var now=new Date();
document.write(now.getDate()+"<br>")

//getFullYear()
//It prints only the year
var now=new Date();
document.write(now.getFullYear()+"<br>")

//getMonth()
//It prints the month, but the months starts from 0, ie: 0 = Janaury, 1 = Febraury and so on.. 
var now=new Date();
document.write(now.getMonth()+"<br>")

//getDay()
//It returns the week Day
//It returns numbers, 0 = Sunday, 1 = Monday, 2 = Tuesday and so on..
var now=new Date();
document.write(now.getDay()+"<br>") 

//If we pass a date in the Date() method and then use the 'get....' methods then it return the data specified to the date in the parameter
var now=new Date('Jan 5 2010');
document.write(now.getDay()+"<br>") //----> here it returns 2 as Jan 5 2010 was on Tuesday

//getHours()
//It returns hours
var now=new Date();
document.write(now.getHours()+"<br>")

//getMinutes()
var now=new Date();
document.write(now.getMinutes()+"<br>")

//getSeconds()
var now=new Date();
document.write(now.getSeconds()+"<br>")

//getMilliseconds
var now=new Date();
document.write(now.getMilliseconds()+"<br>")

/*set Methods() */

//These methods uses all the current values instead of the only the one which is specified
//setDate()
var now=new Date()
now.setDate(20)
document.write(now+"<br>")

//setFullYear()
var now=new Date()
now.setFullYear(2020)
document.write(now+"<br>")

//setMonth()
var now=new Date()
now.setMonth(2)
document.write(now+"<br>")

//setHours()
var now=new Date()
now.setHours(14)
document.write(now+"<br>")