var startBtn = document.getElementById("start-btn");
var number = document.getElementById("number");
var numberText = undefined;
var interval = undefined;
var increasingNumber = 0;

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  const rndInt = Math.floor(Math.random() * 2001) + 1000;
  console.log(rndInt);
  start();
  setTimeout(function () {
    clearInterval(interval);
    setTimeout(function () {
      if (increasingNumber <= 1000 && increasingNumber >= 0) {
        window.alert("Congrats! You've won!");
      } else {
        if (window.confirm("Too bad! You've lost!")) {
          startBtn.disabled = false;
          setValues("0");
        }
      }
    }, 100);
  }, rndInt);
});

function start() {
  interval = setInterval(() => {
    increasingNumber += 499;
    if (increasingNumber >= 99999) {
      increasingNumber = 0;
    }
    numberText = increasingNumber;
    setValues(numberText);
  }, 0);
}

function setValues(curVal) {
  if (curVal) {
    number.textContent = curVal;
  }
}
