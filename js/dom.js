//////////////////////////////////////////////////////////////////
// Name: Kate Baldwin                                           //
// Date: 05/25/2020                                             //
// Course: Web150 - Assignment6                                 //  
// Desc: This script demonstrates the use of at least 4 DOM     //
//   methods/properties or techniques.                          // 
//                                                              //
//////////////////////////////////////////////////////////////////

/* DOM MANIPULATION #1 */
//grab the html element with the ID of title 
var text = document.querySelector("#title");
//add a border and change the text to all uppercase
text.style.border = "5px solid #dcc23e";
text.style.padding = "40px";
text.style.textTransform = "uppercase";
/* END #1 */
 
/* DOM MANIPULATION #2 */
//create an array of all the list items on the page.
var products = document.getElementsByTagName("li");
//if there are at least 4 list items found, 
//  change the 4th list item to the class 'background'
if (products.length > 3){
    var changeProduct = products[3];
    changeProduct.className = "background";
}
/* END #2 */

/* DOM MANIPULATION #3 */
//grab the list items with the class name 'products'
var productList = document.querySelectorAll(".products li");
//for every list item in the product list, when that item is clicked on
//  change the text color. 
for(prod of productList){
    prod.addEventListener("click", function(){
        this.style.color = "#b8786a";
    });
}
/* END #3 */

/* DOM MANIPULATION #4 */
//get the unordered list
var myProducts = document.getElementsByTagName("ul")[0];
//give the first child (first LI) a class of 'list-style'
var firstProd =  myProducts.firstElementChild;
firstProd.setAttribute("class", "list-style");
//give the next sibling of the first child a class of 'list-style'
var nextProd = firstProd.nextElementSibling;
nextProd.setAttribute("class", "list-style")
//add a new list item to the end of the list
var addProduct = document.createElement("li");
var addText = document.createTextNode("Shoes");
addProduct.appendChild(addText);
myProducts.appendChild(addProduct);
/* END #4 */


