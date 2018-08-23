let Phrase = require("goidel-palindrome");

function palindromeTester() {
	let string = prompt("Please enter a string for palindrome testing:");
	let phrase = new Phrase(string);

	if (phrase.palindrome()) {
		palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a palindrome!`;
	} else {
		palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome`;
	}
}

document.addEventListener("DOMContentLoaded", function() {
	let button = document.querySelector("#palindromeTester");
	button.addEventListener("click", function() {
		palindromeTester();
	});
	let palindromResult = document.querySelector("#palindromeResult");
});


// after making changes to this file, remeber to run broserify again
// browserify main.js -o bundle.js
