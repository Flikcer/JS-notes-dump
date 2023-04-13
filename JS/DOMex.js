const button = document.querySelector("button");
const obj = {
  name: "John",
  handleClick: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// traditional function
button.addEventListener("click", obj.handleClick.bind(obj));

// arrow function
button.addEventListener("click", () => {
  obj.handleClick();
});

const numbers = [1, 2, 3, 4, 5];
const obj = {
  multiplier: 2,
  doubleNumbers: function () {
    return numbers.map((num) => num * this.multiplier);
  },
};

console.log(obj.doubleNumbers()); // Output: [2, 4, 6, 8, 10]

const obj = {
  name: "John",
  sayHello: function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Hello, my name is ${this.name}`);
      }, 1000);
    });
  },
};

obj.sayHello().then((message) => {
  console.log(message); // Output: "Hello, my name is John"
});

//fill first button found with this info, use ID's dont do this.
const button = document.querySelector("button");
button.textContent = "Click me";
button.addEventListener("click", function () {
  console.log(this);
});


//HTML document is structured as a JavaScript Object. Every HTML element has a different properties which can help to manipulate it. 
//It is possible to get, create, append or remove HTML elements using JavaScript.
//To select an HTML element, we use tag name, id, class name or other attributes.


//getting element
<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Document Object Model</title>
    </head>
    <body>

     <h1 class='title' id='first-title'>First Title</h1>
     <h1 class='title' id='second-title'>Second Title</h1>
     <h1 class='title' id='third-title'>Third Title</h1>
     <h1></h1>

    </body>
  </html>

//getElementsByTagName():takes a tag name as a string parameter and this method returns an HTMLCollection object
//you can then use the length property on the assigned var to get the length of the collection
//set allTitles to the elements in the HTML with the tag h1
//proper syntax:
//document.getElementsByTagName('tagname')
const allTitles = document.getElementsByTagName('h1')
//log the object holding all titles
console.log(allTitles)
//find the amount of titles
console.log(allTitles.length) // 4
//iterate over the titles to actually use and access the values
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}


//getElementsByClassName() method returns an HTMLCollection object. 
//An HTMLCollection is an array like list of HTML elements. The length property provides the size of the collection. 
//It is possible to loop through all the HTMLCollection elements.
// syntax
//document.getElementsByTagName('tagname')

//same as above but for the title instead of h1
const allTitles = document.getElementsByClassName('title')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}

//syntax for get element from classname
document.getElementsByClassName('classname')
const allTitles = document.getElementsByClassName('title')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}

//syntax for get element by ID
document.getElementById('id')
let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>

//get elements by using query selectors
//this will be the first available instead of all like above
let firstTitle = document.querySelector('h1') // select the first available h1 element
let firstTitle = document.querySelector('#first-title') // select id with first-title
let firstTitle = document.querySelector('.title') // select the first available element with class title

//querySelectorAll: can be used to select html elements by its tag name or class.
//It returns a nodeList which is an array like object which supports array methods.
// We can use for loop or forEach to loop through each nodeList elements.
const allTitles = document.querySelectorAll('h1')// # selects all the available h1 elements in the page
console.log(allTitles.length) // 4
//loop through h1's to use and get access to the values
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i])
}

allTitles.forEach(title => console.log(title))
const allTitles = document.querySelectorAll('.title') // the same goes for selecting using class

//add a title h1 attribute
//HTML attributes: id, class, src, style, href,disabled, title, alt
const titles = document.querySelectorAll('h1')
const titles = document.querySelectorAll('#dog-div')
titles[3].className = 'title'
titles[3].id = 'fourth-title'

//Adding attribute using setAttribute
//The setAttribute() method set any html attribute. It takes two parameters 
//the type of the attribute and the name of the attribute. Let's add class and id attribute for the fourth title.
//add this info as a fourth title
const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')

//another way to setting an attribute
//only works on DOM object property elements
titles[3].className = 'title'
titles[3].id = 'fourth-title'

//The class list method is a good method to append additional class. 
//It does not override the original class if a class exists rather it adds additional class for the element.
//another way to setting an attribute: append the class, doesn't over ride

//adds two CSS classes to the 4th element of the titles, indexed at 0
//this means any style classes named with title and header title will be applied to this title
titles[3].classList.add('title', 'header-title')

//CSS ex
//these would be applied to title 4
.title {
  font-size: 24px;
  font-weight: bold;
  color: blue;
}
.header-title {
  text-align: center;
  margin-top: 20px;
}

//can also be used to remove a class from an element 
titles[3].classList.remove('title', 'header-title')

//Adding text to an HMTL element
//An HTML is a build block of an opening tag, a closing tag and a text content. 
//We can add text content using the property textContent or *innerHTML.

//The textContent property is used to add text to an HTML element.
//select all h1 tags and name them to an obj called titles
//in this case we are accessing a specific element 
//so the text will be added to that element, not create a child of an element
const titles = document.querySelectorAll('h1')
//add text to the fourth or [3] h1
titles[3].textContent = 'Fourth Title'


//use inner ht,l to add a new elemeent as a child of another element
const myDiv = document.getElementById('myDiv');
myDiv.innerHTML = '<p>Hello, world!</p>';
//example of pa as a child of a div element
<div id="myDiv">
  <p>Hello, world!</p>
</div>

//text content can only be used to add text to an element
const myDiv = document.getElementById('myDiv');
myDiv.textContent = 'Hello, world!';

//would produce, which means nothing
<div id="myDiv">
  Hello, world!
</div>



//inner html
//We use innerHTML property when we like to replace or a completely new children content to a parent element. 
//It value we assign is going to be a string of HTML elements.
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul></ul>
    </div>
    <script>
    const lists = `
    <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`
  const ul = document.querySelector('ul')
  ul.innerHTML = lists
    </script>
  </body>
</html>


//to remove all children
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul>
            <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>
        </ul>
    </div>
    <script>
  const ul = document.querySelector('ul')
  ul.innerHTML = ''
    </script>
  </body>
</html>



const renderUserFriend = (friend) => {
  const friendDivContainer = document.createElement('div')
  friendDivContainer.setAttribute('class', 'user-friends-container')
  // friendDivContainer.className = 'user-friends-container'
  friendDivContainer.id = `friend-${friend.name}`

  const friendProfilePicture = document.createElement('div')
  friendProfilePicture.innerText = friend.profilePicture
  friendDivContainer.appendChild(friendProfilePicture)

  // friendDivContainer.innerHTML += `
  //   <div>${friend.profilePicture}</div>
  // `
  // alternate way to add html elements to the text of another element.
  // '.innerhtml'

  const breakEle = document.createElement('br')

  const friendName = document.createElement('div')
  friendName.innerText = friend.name


  friendDivContainer.appendChild(friendName)
  friendDivContainer.appendChild(breakEle)

  return friendDivContainer
}

const userObj = {
  username: 'bill',
  friends: [
    {
      name: "bob",
      profilePicture: "link to profile",
    },
    {
      name: "tim",
      profilePicture: "link to profile",
    },
    {
      name: "steve",
      profilePicture: "link to profile",
    }
  ]
}

const renderUsersFriends = () => {
  const container = document.getElementById('sample')

  for (const friend of userObj.friends) {
    const friendEle = renderUserFriend(friend, container)
    container.appendChild(friendEle)
  }
}

renderUsersFriends();



//example

const renderUserFriend = (friend) => {
  const friendDivContainer = document.createElement('div')
  friendDivContainer.setAttribute('class', 'user-friends-container')
  // friendDivContainer.className = 'user-friends-container'
  friendDivContainer.id = `friend-${friend.name}`

  const friendProfilePicture = document.createElement('div')
  friendProfilePicture.innerText = friend.profilePicture
  friendDivContainer.appendChild(friendProfilePicture)

  // friendDivContainer.innerHTML += `
  //   <div>${friend.profilePicture}</div>
  // `
  // alternate way to add html elements to the text of another element.
  // '.innerhtml'

  const breakEle = document.createElement('br')

  const friendName = document.createElement('div')
  friendName.innerText = friend.name


  friendDivContainer.appendChild(friendName)
  friendDivContainer.appendChild(breakEle)

  return friendDivContainer
}

const userObj = {
  username: 'bill',
  friends: [
    {
      name: "bob",
      profilePicture: "link to profile",
    },
    {
      name: "tim",
      profilePicture: "link to profile",
    },
    {
      name: "steve",
      profilePicture: "link to profile",
    }
  ]
}

const renderUsersFriends = () => {
  const container = document.getElementById('sample')

  for (const friend of userObj.friends) {
    const friendEle = renderUserFriend(friend, container)
    container.appendChild(friendEle)
  }
}

renderUsersFriends();