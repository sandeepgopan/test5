import "./styles.css";
var textHeader = document.getElementById("#text-Header");
var greenButton = document.getElementById("#green-Button");
var blueButton = document.getElementById("#blue-Button");
var redButton = document.getElementById("#red-Button");
var userInput = document.getElementById("userInput").value;
var textHeaderOne = document.getElementById("#textHeader-One");
document.querySelector("#text-Header").addEventListener("click", () => {
  var userInput = document.getElementById("userInput").value;
  document.querySelector("#textHeader-One").innerHTML = userInput;
  document.querySelector("#textHeader-Two").innerHTML = userInput;
  document.querySelector("#textHeader-Three").innerHTML = userInput;
});
document.querySelector("#red-Button").addEventListener("click", () => {
  document.getElementById("userInput").style.color = "red";
});
document.querySelector("#blue-Button").addEventListener("click", () => {
  document.getElementById("userInput").style.color = "blue";
});
document.querySelector("#green-Button").addEventListener("click", () => {
  document.getElementById("userInput").style.color = "green";
});
