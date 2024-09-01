var button = document.createElement("p");

button.innerText = " Page suivante >>";

button.className = "btn1";

button.addEventListener("click", function() {
  
  window.open("https://anime-sama-2.pages.dev/", "_self");
});
document.getElementById("btncnt1").appendChild(button);
