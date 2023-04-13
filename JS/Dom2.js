// const liElements = document.querySelectorAll("li");
// console.log(liElements);

// for (const liElement of liElements) {
//   console.log(liElement.innerText);
//   if (liElement.innerText === `30DaysOfPython Challenge Done`) {
//     liElement.style = "background-color: green";
//   } else if (liElement.innerText === `30DaysOfJavaScript Challenge Ongoing`) {
//     liElement.style = "background-color: yellow";
//   } else {
//     liElement.style = "background-color: red";
//   }
// }

//DOM manipulation

//GetElementById()
//select element using its ID
const title = document.getElementById("main-heading");

//GetElementByClassName()
//returns all elements associated w this class name
const listItem = document.getElementsByClassName("list-items"); //returns an array like object of all child elements w given class names

//GetElementsByTagName()
//return an array like object with all the elements w a given tag name
const listItem = document.getElementsByTagName("li"); //returns all li's

//querySelector()
//matches the first item of the selector given
//can be used to grab any element
const container = document.querySelector("div"); //can grab div tag, class name, or ID attribute

//querySelectorAll()
//same as above but select all of that type
const container = document.querySelectorAll("div"); //returns a node list of collections w all matching elements of the CSS selector

//how to change styling of an element
//select the element with the ID main-heading and store the value to the const title
const title = document.querySelector("#main-heading");
//inline styling with style property with the CSS property of color, can only be done on a single element
title.style.color = "red";

const listItems = document.querySelectorAll("list-items"); //select all elements w class list items
//listItems.style.fontSize ='red'; will not perform any action since its multiple items
//proper handling of multiple items
for (i = 0; i < listItems.length; i++) {
  listItems[i].style.fontSize = "4rem";
}

//creating elements
const ul = document.querySelector("ul");
const li = document.createElement("li");
//append the var li holding the li elements and append it the unordered list ul
//adding elements
ul.append(li);

//modifying text. innerText, textContent, innerHTML
const firstListItem = document.querySelector(".list-item");
console.log(firstListItem.innerText); //the visible text contained in the node. MOST USED
console.log(firstListItem.textContent); //the same way as it is displayed in the HTML file
console.log(firstListItem.innerHTML); //shows tags as well as how its displayed in html. poses security issues

li.innerText = "item 1"; //will add this item to the list

//modifying attributes and classes
//sets the attribute of the line ID to main heading, which is the same as the heading so it will take on the same styling
li.setAttribute("id", "main-heading"); //arg 1 is attribute you want to set, second is the name of the attribute
//remove an attribute
li.removeAttribute("id");

//select element with the id main heading and set it to title
const title = querySelector("#main-heading");
console.log(title.getAttribute("id")); //returns the id of the title var

//add this class to the const li
li.classList.add("list-items");
//reomve class from element
li.classList.add("list-items");
//check if var li contains the class list items, returns boolean
console.log(li.classList.contains("list-items"));

//remove an element
li.remove();

//DOM maniopulation
//parent node traversal || upward traversal
let ul = document.querySelector("ul"); //select the first unordered list
//to find the parent node:
console.log(ul.parentNode); //display parent of this node
console.log(ul.parentElement);
console.log(ul.parentNode.parentNode); //display parent of the parent node (grandparent)
console.log(ul.parentElement.parentElement);

const html = document.documentElement; //display the document element itself (the html)
console.log(html.parentNode); //#document
console.log(html.parentElement); //null, there is no parent element to the html file

//child node traversal ||downward traversal

let ul = document.querySelector("ul");
//display all nodes within this element//indentations are counted as text nodes if directly html coded
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

//to access a specific child by index then style it
ul.childNodes[1].style.backgroundColor = "blue";

//will display just the list items and not the text nodes as well
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

//sibling traversal || same level
let ul = document.querySelector("ul");
const div = document.querySelector("div");

console.log(div.childNodes);

//select all types of nodes
console.log(ul.previousSibling); //display sibling nodes
console.log(ul.nextSibling);

console.log(ul.previousElementSibling); //just element no nodes
console.log(ul.nextElementSibling);

//event listeners
//better than html on event listeners since they can be applied multiple items
//inside html exmaple
//<button onclick="alert('I love JS')">Click Me</button>

///JS event listener
//element.addEventListener('click', function);

//select first element with class of btn-1, dot means class
const buttonOne = document.querySelector(".btn-1");
//select first element with id of btn-1, # means ID
const buttonTwo = document.querySelector("#btn-2");

const buttonOne = document.querySelector(".btn-1");
function alertBtn() {
  alert("I also love JS");
}
//upon click of button two, perofmr function
buttonTwo.addEventListener("click", alertBtn);

//mouseover change bg color to red
const buttonOne = document.querySelector(".btn-1");
function alertBtn() {
  buttonTwo.style.backgroundColor = "red";
}
buttonTwo.addEventListener("mouseover", alertBtn);

//reveal event
const revealBtn = document.querySelector("reveal-btn");
const hiddenContent = document.querySelector("hidden-content");

function revealContent() {
  if (hiddencontent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
}

revealBtn.addEventListener("click", revealContent);

//event propogation
window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  true
);
document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  true
);

document.querySelector(".div2").addEventListener(
  "click",
  function () {
    console.log("DIV 2");
  },
  true
);
document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("DIV 1");
  },
  true
);
document.querySelector("button").addEventListener(
  "click",
  function (e) {
    console.log(e);
  },
  true
);
document.querySelector("button").addEventListener(
  "click",
  function (e) {
    console.log((e.target.innerText = "Clicked!"));
  },
  true
);

//event delegation

document.querySelector("#footbnall").addEventListener("click", function (e) {
  console.log("football is clicked");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "grey";
  }
});
