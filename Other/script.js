/*History Objects */
/*History Object Properties:
- Length */
/*Whenever we type console.log(history) we get:
console.log(history)
VM137:1 History {length: 1, scrollRestoration: 'auto', state: null}
undefined */

/*History Object Methods:
- back()
- forward()
- go() */

function backfunction(){
    history.back();
}

function forwardfunction(){
    history.forward();
}

/**history.go(2) 
 * if it is -2 then it will move backwardx
 * - if it is 2 it will move forward
*/
//------------------------------------------------------------------------------------
/*pageYoffset and pageXoffset
- It is used to check the scroll pixels, how much it has been scorlled 
- It is a Window Object */

window.addEventListener('scroll',function(){
   console.log("pageYoffset"+window.pageYOffset) 
})

/*offsetTop and offsetLeft

- Given a div, it is used to find the distance from the top and left*/
var box=document.querySelector(".box")
console.log("Box OffsetTop = "+box.offsetTop)
console.log("Box OffsetLeft = "+ box.offsetLeft)


/**scrollTop and scrollLeft
 *  Used to measure the how much the scroll bar has been scrolled
 * 
 */
const target=document.querySelector(".box")
target.addEventListener('scroll',()=>{
    console.clear();
    console.log("scroll Top:"+ target.scrollTop)
});

/*offsetWidth and offsetHeight 

- used to give the height and width of the div
- offsetWidth and offsetHeight returns the width and height of an element (in pixels) including padding, border and scrollbar.
*/
var width=target.offsetWidth
var height = target.offsetHeight

console.log("offsetWidth: "+width)
console.log("offsetHeight" + height)

/*
Client Width and Client Height

- it gives just the inner height and width, 

- It returns the width and height of an element (in pixels) including padding, but not the border,scrollbar or margin*/


var wid=target.clientHeight
var hei=target.clientWidth
console.log("The Client height is ="+hei)
console.log("The Client width is = "+wid)