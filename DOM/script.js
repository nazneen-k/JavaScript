/*DOM Targeting Methods

-id         --->document.getElementById(id)
-Class Name --->document.getElementsByClassName(name)
-Tag Name   --->document.getElementsByTagName(name)
*/


//document

// var ele;
// ele=document
// console.log(ele)

// ele=document.all; // document.all[2] ---> It returns the title element from the DOM Tree.
// console.log(ele)

//document.head
//document.title
//document.body
//document.links ---> Also returns the nos of elements present in the document
//document.link[2]
//document.images
//document.images[3]
//document.forms
//document.doctype
//document.url
//document.domain
//document.baseURI


//DOM Get and Set Value Methods

/*

Get Method

Using get we can get the : HTML, Text and Attribute.

-innerText
-innerHTML
-getAttribute
-getAttributeNode
-Attributes
*/

// var element
// element = document.getElementById(container).innerHTML="<h1> Hello</h1>"
// console.log(element)

//DOM Set Methods
/*
-innerText
-innerHTML
-setAttribute
-Attribute
-removeAttribute
*/


/*DOM querySelector() & querySelectorAll() */

/*
-querySelector() - It targets only the first selector
*/

var element;

document.querySelector("#header").innerHTML = "<h1>Wow</h1>";

// element = document.querySelector("#header").getAttribute("class");
// console.log(element)


//querySelectorAll

element = document.querySelectorAll('.list')[1]
console.log(element)


/*DOM CSS Styling Methods */

/*
-style
-className
-classList

 */


var e
document.querySelector("#header").style.backgroundColor="Red" //In order to set the value8/4
e=document.querySelector("#header").style.border //In order to get the CSS
console.log(e)



/*addEventListener Method */

document.getElementById('header').onclick = abc;

function abc(){
    document.getElementById('header').style.background="green"
}


document.getElementById('header').onmouseenter = abc;

function abc(){
    document.getElementById('header').style.background="green"
}

//Next Method

document.getElementById('sidebar').addEventListener("mouseenter",abcd)

function abcd(){
    document.getElementById('sidebar').style.background="#B0D9B1"
}

//We can add multiple functions

/*
OR

document.getElementById('sidebar').addEventListener("click",abc(){ 
    Statement
    .
    .
    .
}

*/


/*
Other 

addEventListener(event,function,useCapture)

useCapture--> True or False*/


/*
removeEventListener("ondbclick",functionName) */
