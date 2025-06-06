// Reference to container div that exists within HTML
const container = document.querySelector("#container");

// Create a new div called content
const content = document.createElement("div");
// Add a class called content.
content.classList.add("content");
// Add text to the content.
content.textContent = "This is the glorious text-content!";

// Append the div to container
container.appendChild(content);

// Add the following to the container using ONLY JavaScript and the DOM methods

// a <p> with red text that says “Hey I’m red!”
const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";

container.appendChild(para);

// An <h3> with blue text that says “I’m a blue h3!”
const headerThree = document.createElement("h3");
headerThree.textContent = "I'm a blue h3!";
headerThree.style.color = "blue";

container.appendChild(headerThree);

// A <div> with a black border and pink background color with the following elements inside of it:
// (Hint: After creating the <div> with with createElement, append the <h1> and <p> to it before adding it to the container.)
const specialDiv = document.createElement("div");
specialDiv.style.backgroundColor = "pink";
specialDiv.style.borderColor = "black";

// Another <h1> that says “I’m in a div”
const headerOne = document.createElement("h1");
headerOne.textContent = "I'm in a div";

// A <p> that says “ME TOO!”
const paraTwo = document.createElement("p");
paraTwo.textContent = "ME TOO!";

specialDiv.appendChild(headerOne);
specialDiv.appendChild(paraTwo);
container.appendChild(specialDiv);