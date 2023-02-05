import img from './ohYeah.gif';
import {loadMenu} from './loadMenu.js';
export function loadContacts() {
let x = document.querySelector('#content');

x.innerHTML ="";
let i = document.createElement('h1');
i.innerText = "The Krusty Krab's Delicacies";
x.appendChild(i);
i = document.createElement('h2');
i.innerText = "The Krab God himself";
x.appendChild(i);
let mDiv = document.createElement('div');
i = document.createElement('div');


i.appendChild(document.createElement('div'));
i.lastElementChild.setAttribute('class', 'iGroup');
i.lastElementChild.appendChild(document.createElement('div'));

i.lastElementChild.firstElementChild.setAttribute('id', 'botones');

i.lastElementChild.firstElementChild.innerHTML = '<a href="index.html"><button>Home</button></a>';


i.lastElementChild.firstElementChild.appendChild(document.createElement('button'));
i.lastElementChild.firstElementChild.lastChild.innerText = "Menu";
i.lastElementChild.firstElementChild.lastChild.addEventListener('click', () => {
    loadMenu();
    });
i.lastElementChild.appendChild(document.createElement('img'));

i.lastElementChild.lastElementChild.src = img;

i.lastElementChild.lastElementChild.setAttribute('id', 'krab');
i.lastElementChild.appendChild(document.createElement('p'));
i.lastElementChild.lastElementChild.innerText = `Oh yeah Mr. Krabs. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAHHHHHHHHHHHHHHHHHHHHHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAHHHHHHHHHHHHHHHHHHHHHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAHHHHHHHHHHHHHHHHHHHHHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAHHHHHHHHHHHHHHHHHHHHHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAHHHHHHHHHHHHHHHHHHHHH
Phone #: 1-111-777-7778`;
mDiv.appendChild(i);
x.appendChild(mDiv);
}