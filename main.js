let Phrase = require("goidel-palindrome");

function palindromeTester(event) {
	event.preventDefault();

	let phrase = new Phrase(event.target.phrase.value);

	let palindromResult = document.querySelector("#palindromeResult");

	if (phrase.palindrome()) {
		palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
	} else {
		palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome`;
	}
}

document.addEventListener("DOMContentLoaded", function() {
	let button = document.querySelector("#palindromeTester");
	button.addEventListener("submit", function() {
		palindromeTester(event);
	});
});


// after making changes to this file, remeber to run broserify again
// browserify main.js -o bundle.js
