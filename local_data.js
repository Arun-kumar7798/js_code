const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

// Storing data
localStorage.setItem('username', 'arun kumar'.toUpperCase());
localStorage.setItem('age', 22);
localStorage.setItem('isLogged', 'true');

// Retrieving data
const username = localStorage.getItem('username');
const age = localStorage.getItem('age');
const isLogged = localStorage.getItem('isLogged');

console.log('Username:', username);
console.log('Age:', age);
console.log('Is Logged:', isLogged);
