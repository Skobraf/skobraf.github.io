/*{
  input: 'Ayoub.resume',
  return: '["<a href="./justinchi_resume.pdf" target="_blank">justinchi.pdf</a>"]'
},
*/

const statements = [
  {
    input: 'Ayoub.currentLocation',
    return: '["Ahfir", "Morocco"]'
  },
  {
    input: 'Ayoub.contactInfo',
    return: '["<a  target="_blank" href="mailto:skobraf@gmail.com">skobraf@gmail.com</a>", "<a target="_blank" href="https://www.linkedin.com/in/ayoub-abed/">LinkedIn</a>", "<a target="_blank" href="https://github.com/Skobraf">github</a>"]'
  },
  {
    input: 'Ayoub.interests',
    return: '["Programming", "Foot-ball", "Reading"]'
  },
  {
    input: 'Ayoub.education',
    return: '["B.Sc. Science Engineering - University of Med First", "Oujda"]'
  },
  {
    input: 'Ayoub.skills',
    return: '["Sass", "JavaScript","Ruby on Rails", "React", "Redux", "webpack", "git"]'
  }
];

console.log(statements[0]);
var i = 0;
var txt = "Abed Ayoub";
var speed = 200;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

window.onload = function() {
  typeWriter()
  // Create every statement stored in 'statements variable'
  for(var i = 0; i < statements.length; i++){
    createStatement(i);
  }
  // Code below just adds the terminal blinking at the end "$"
  append("div", "statement", "", "terminal-window", 0);
  append("div", "input-statement", '<span class="terminal-blink">&nbsp;</span>', "statement", statements.length);
  append("div", "return-statement", "", "statement", statements.length);
}

function createStatement(classSelectorNumber){
  append("div", "statement", "", "terminal-window", 0);
  append("div", "input-statement", statements[classSelectorNumber].input, "statement", classSelectorNumber);
  append("div", "return-statement", statements[classSelectorNumber].return, "statement", classSelectorNumber);
}

/**
 * append function is used to append an element to a parent class element.
 * Input:
 *    - newElement (string): expects the tag name of element to create ie. div, p.
 *    - className (string): expects the class name to add to the new element
 *    - content (string): expects the text you want to add inside the new element
 *    - toParentClass (string): expects you select the parent element
 *    - n (integer): expects the element you want to select (selects by class)
**/

function append(newElement, className, content, toParentClass, n){
  // Creates a new element of type: "newElement" ie. "div"
  var newElement = document.createElement(newElement);
  // Adds a class to the new element
  newElement.className = className;
  // Creates a text object
  //var elementText = document.createTextNode(content);
  // Adds the text object to the new element
  //newElement.appendChild(elementText);
  newElement.innerHTML = content;

  // Appends new element to the selected class elements
  document.getElementsByClassName(toParentClass)[n].appendChild(newElement);
}
