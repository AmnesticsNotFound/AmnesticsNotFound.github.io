import './menu.css';
import {loadContacts} from './contacts.js';
import img from './nastyPatty.png';

export function loadMenu() {
let x = document.querySelector('#content');
x.innerHTML ="";
let i = document.createElement('h1');
i.innerText = "The Krusty Krab's Delicacies";
x.appendChild(i);

i = document.createElement('h2');
i.innerText = "No rush, but the appetizer is getting hungry...";
x.appendChild(i);

let mDiv = document.createElement('div');
i = document.createElement('div');
i.appendChild(document.createElement('h3'));
i.firstChild.innerText = "The \"Nasty Patty\"";

i.appendChild(document.createElement('div'));
i.lastElementChild.setAttribute('class', 'iGroup');
i.lastElementChild.appendChild(document.createElement('div'));

i.lastElementChild.firstElementChild.setAttribute('id', 'botones');

i.lastElementChild.firstElementChild.innerHTML = '<a href="index.html"><button>Home</button></a>';


i.lastElementChild.firstElementChild.appendChild(document.createElement('button'));
i.lastElementChild.firstElementChild.lastChild.innerText = "Contacts";
i.lastElementChild.firstElementChild.lastChild.addEventListener('click', () => {
    loadContacts();
    });
i.lastElementChild.appendChild(document.createElement('img'));

i.lastElementChild.lastElementChild.src = img;

i.lastElementChild.lastElementChild.setAttribute('id', 'nasty');
console.log("fghfgh");




i.appendChild(document.createElement('p'));
i.lastElementChild.setAttribute('id', 'innerG');
i.lastChild.innerText = `Succulent, rich, and densely packed with flavor from the marriage of the land and sea. 
Be sure to acquire it for a limited time while supplies last.`


mDiv.appendChild(i);
x.appendChild(mDiv);
/*
i.appendChild(document.createElement('p').setAttribute('id', 'innerG'));
mDiv.appendChild(i);
x.appendChild(mDiv);*/

console.log('hh');
/*let b = document.createElement('div');
b.setAttribute('id', 'group');
let bg = document.createElement('div');
bg.setAttribute('id', 'bGroup');
i = document.createElement('button');
i.innerText = "Menu";
i.setAttribute('id', 'buttons');
bg.appendChild(i);
*/
}