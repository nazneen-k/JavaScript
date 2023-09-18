/*  Steps to Draw Patterns
1. Run the outer loop the number of times there are lines ie Rows
    Outer Loop ---> Rows
    Inner Loop ---> Columns
2. Identify for each row how many columns are present, and also find the type of Elements in the columns
3.Figure out what is needed to be  printed

Note: Try to Find the Formula relating to the Rows and Columns

*/


// For printing Pattern
// 1
// 12
// 123
// 1234
// 12345

for (var a = 1; a <= 5; a++) {
  for (var b = 1; b <= a; b++) {
    document.write(b + " ");
  }
  document.write("<br> ");
}
document.write("<br> <br>");



// For The Pattern
// 1
// 22
// 333
// 4444
// 55555

for (var c = 1; c <= 5; c++) {
  for (var d = 1; d <= c; d++) {
    document.write(c + " ");
  }
  document.write("<br> ");
}
document.write("<br> <br>");



// For the Pattern
// 55555
// 4444
// 333
// 22
// 1

for (e = 5; e >= 1; e--) {
  for (f = 1; f <= e; f++) {
    document.write(e + " ");
  }
  document.write("<br> ");
}



// For Printing the pattern
// 54321
// 4321
// 321
// 21
// 1
