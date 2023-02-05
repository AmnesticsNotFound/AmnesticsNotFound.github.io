import './index.css';
import img from './appetizer.png';
import {loadMenu} from './loadMenu'
import {loadContacts} from './contacts.js';
let x = document.querySelector('#content');
let i = document.createElement('h1');
i.innerText = "The Krusty Krab v.2";
x.appendChild(i);

i = document.createElement('h2');
i.innerText = "Yes, it really is that good";
x.appendChild(i);

i = document.createElement('p');
i.innerText = "This is the most pristine and refined establishment in all of the seven seas. Those who dine here are sure to be blessed by Poseidon himself. If you wish to feast in one our seven locations you must place your name, phone #, date of reservation into a bottle and set it afloat in the general direction of the desired location.";
x.appendChild(i);

let b = document.createElement('div');
b.setAttribute('id', 'group');
let bg = document.createElement('div');
bg.setAttribute('id', 'bGroup');
i = document.createElement('button');
i.innerText = "Menu";
i.setAttribute('id', 'buttons');
bg.appendChild(i);

i.addEventListener('click', () => {
loadMenu();

});

i = document.createElement('button');
i.innerText = "Contacts";
i.setAttribute('id', 'buttons');
bg.appendChild(i);

i.addEventListener('click', () => {
    loadContacts();
    });
    
b.appendChild(bg);


i = document.createElement('img');
i.src = img;
b.appendChild(i);
x.appendChild(b);
