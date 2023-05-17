/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //document.getElementById("excuse").innerHTML = ExqsGenerator();

  let who = ["The dog", "My grandma", "His turtle", "My bird"]; //0, 1, 2, 3
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const selectedWho = getRandomWord(who);
  const selectedAction = getRandomWord(action);
  const selectedWhat = getRandomWord(what);
  const selectedWhen = getRandomWord(when);

  const randomSentence = `${selectedWho} ${selectedAction} ${selectedWhat} ${selectedWhen}`;

  console.log(randomSentence);
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomWord(array) {
  const index = getRandomInt(array.length);
  const selectedWho = array[index];
  return selectedWho;
}
