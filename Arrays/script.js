// Multidimensional Array

var arr = [
  ["Harry", 18, "Male", "B Com"],
  ["Sunny", 18, "Male", "BCA"],
  ["Sarah", 17, "Female", "BCA"],
  ["Tom", 17, "Male", "BA"],
];
for (a = 0; a <= 3; a++) {
  for (b = 0; b < 4; b++) {
    document.write(arr[a][b] + " ");
  }
  document.write("<br>");
}

/* for Displaying the data in table Form   */

document.write("<table  border='1px' cellspacing='0'>")
var arr = [
    ["Harry", 18, "Male", "B Com"],
    ["Sunny", 18, "Male", "BCA"],
    ["Sarah", 17, "Female", "BCA"],
    ["Tom", 17, "Male", "BA"],
  ];
  for (a = 0; a <= 3; a++) {
    document.write("<tr>")
    for (b = 0; b < 4; b++) {
      document.write("<td>"+arr[a][b] + " </td>");
    }
    document.write("<br>");
    document.write("<tr>")
  }

document.write("</table>")





// Modify Array Elements

var a =["Harry",18,"BCA"];
document.write(a+"<br>")
a[1]=19;
document.write(a+"<br>")

// Delete an Element

var a =["Harry",18,"BCA"];
delete a[1];
document.write(a+"<br>") /* Only The Element gets Delted but the Index doesnt Get Deleted, When the   a[1] --->  is printed it prints Undefined*/