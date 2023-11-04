/* 
- Inner height
- Innner width
- Outer Height
- Outer Width */

var innerheight= window.innerHeight;
console.log("Inner Height is "+innerheight)

var outerHeight=window.outerHeight
console.log("Outer Height is "+outerHeight)

var innerWidth=window.innerWidth;
console.log("Inner Width is "+innerWidth)

var outerWidth=window.outerWidth;
console.log("The Outer Width is "+outerWidth)


/*Open and Close Methods

Open ---> window.open(URL,name,specs) */
var myWindow;
function openWindow(){
 myWindow=window.open("https://www.youtube.com/","","width=500px,height=200px,left=500px,top=200px")   
}

function closeWindow(){
    myWindow.close()
}

/*moveBy() and moveTo()

moveTo can only be used for the  contents/links which belongs to only the particular webiste*/

function moveWindow(){
    myWindow.moveTo(100,100)
    myWindow.focus()
}

/*moveBy 
when we use moveTo it moves onlt that much ie it moves total of how much it is needed,it adjusts itself
Where as the moveBy doesnt do like that it completely moves the px how much it is mentioned ie default+mentioned */

/* resizeBy and  resizeTo */

function resizeWindow(){
    myWindow.resizeTo(400,400)
}

function scrollWindow()
{
    window.scrollTo(0,100)
}

/*resizeBy adds the width and height to existing one */


/*Location Object Properties

- hash
- host
- hostname
- href
- origin
- pathname
- port
- protocol
- search  ---> these are the properties*/

// These all must be run in the website console
console.log(location.host)
console.log(location.hostname)
console.log(location.href)


/*Location Object Methods

- Assign()
- Reload()
- Replace()

location.reload()
location.assign()
location.replace("www.google.com") ---> It removes the page from history*/
