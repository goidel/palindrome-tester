(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = Phrase;

String.prototype.reverse = function(){return Array.from(this).reverse().join("");
}
function reverse(string) {
	return Array.from(string).reverse().join("");
}
function Phrase(content) { 
	this.content = content;

	this.processor = function(string){
		return string.toLowerCase();
	}
	this.processedContent = function () {
		//return this.processor(this.content);
		return this.letters().toLowerCase();

	};
	this.letters = function letters() {
		let theLetters = [];
		for (let i = 0; i < this.content.length; i++) {
			if (this.content.charAt(i).match(/[a-zA-Z]/)) {
				theLetters.push(this.content.charAt(i));
			}
		}
		return theLetters.join("");
	}
	this.palindrome = function palindrome() {
		return this.processedContent() === reverse(this.processedContent());
	}
}
function TranslatedPhrase(content, translation){
	this.content = content;
	this.translation = translation;
	this.processedContent = function () {
		return this.processor(this.translation);
	}
}
TranslatedPhrase.prototype = new Phrase();


},{}],2:[function(require,module,exports){
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

},{"goidel-palindrome":1}]},{},[2]);
