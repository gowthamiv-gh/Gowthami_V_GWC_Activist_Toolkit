/* .js files add interaction to your website */
/*var button = document.getElementById("myButton");

button.addEventListener("click", newFunFact);

function newFunFact(){
document.getElementsByClassName("facts").innerHTML = "When you stand you burn an average of 100-200 calories, versus sitting, where you burn 60-130 calories an hour.";
}*/

var factList = [
  "Listening to music can actually help you move faster and improve the quality of your workout.",
  "Working out in a group setting can improve athletic performance as opposed to working out alone.",
  "When you stand you burn an average of 100-200 calories, versus sitting, where you burn 60-130 calories an hour.",
  "Too much cardio can actually prevent fat loss.",
];

/*console.log(factList[4])*/

var fact = document.getElementById("fact");
var myButton = document.getElementById("factBtn");
var count = 0;

if (myButton) {
myButton.addEventListener("click", displayFact)
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}





var btn = document.getElementById("myBtn");

if (btn) {
  btn.addEventListener("click", displayName);
}

function displayName(){
  var displayName = document.getElementById("yourName").value;
  var displayEmail = document.getElementById("yourEmail").value;

  if (displayName) {
    if (displayEmail) {
document.getElementById("displayName").innerHTML = "Hey " + displayName + ", you are now subscribed to our newsletter.";
    }
  }
}
