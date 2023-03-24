'use strict';

const form = document.querySelector('form');
const submit = document.querySelector(".submit");
const reset = document.querySelector(".reset");
const overlay = document.querySelector(".overlay");
const msg = document.querySelector(".msg");
const userName = document.querySelector('.name');
const password = document.querySelector('.pass');
const yes = document.querySelector('.yes');
const no = document.querySelector('.no');

submit.addEventListener("click", function() {
    event.preventDefault();
    if (userName.value === 'logtest' && Number(password.value) === 12345) {
        msg.classList.remove('hidden');
        overlay.classList.remove('hidden');
    } else {
        password.style.backgroundColor = "red";
        userName.style.backgroundColor = "red";
        password.style.color = "white";
        userName.style.color = "white";


    }
});

reset.addEventListener('click', function() {
    userName.textContent = '';
    password.textContent = '';
    password.style.backgroundColor = "white";
    userName.style.backgroundColor = "white";
    password.style.color = "gray";
    userName.style.color = "gray";
})
no.addEventListener('click', function() {
    password.textContent = '';
    userName.textContent = '';
    msg.classList.add('hidden');
    overlay.classList.add('hidden');
})
yes.addEventListener('click', function() {
    password.textContent = '';
    userName.textContent = '';
    msg.classList.add('hidden');
    overlay.classList.add('hidden');
})
