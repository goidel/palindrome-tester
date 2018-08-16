let Phrase = require("goidel-palindrome");
let string = prompt("Please enter a string for palindrome testing:");

let phrase = new Phrase(string);

if (phrase.palindrome()) {
	alert(`"${phrase.content}" is a palindrome!`)
} else {
	alert(`"${phrase.content}"" is not a palindrome.`)
}
// after making changes to this file, remeber to run broserify again
// browserify main.js -o bundle.js
