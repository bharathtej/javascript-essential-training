/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

const content = `
<ul>
    <li>Home</li>
    <li>about</li>
    <li> test1</li>
    <li> test2</li>
    <li>test3</li> 
</ul>


`

const newnav = document.createElement("nav");
newnav.classList.add("main-navigation");
newnav.style= "display:flex; flex-direction: row;";
newnav.innerHTML=content;

const main = document.querySelector(".maincontent");
main.appendChild(newnav);
main.insertAdjacentElement('afterbegin', newnav);


