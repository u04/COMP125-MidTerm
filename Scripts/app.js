// setup your IIFE (Immediately Invoked Function Expression)
(function () {
"use strict";


// YOUR CODE GOES HERE
let intro1 = document.getElementById("IntroText1");
let textInIntro = "Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals.";
intro1.textContent=textInIntro;

let intro2 = document.getElementById("IntroText2");
intro2.textContent="Greece has 1,400 islands, though only 230 of them are inhabited.";

(document.getElementById("IntroText3")).textContent="And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.";

})();

