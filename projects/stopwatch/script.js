var totalTime = 0;
var timerInterval = null;
var watchActive = false;

var stopSound = new Audio("http://mhmd.us/wEgr3j+");
var startSound = new Audio("http://mhmd.us/bubmJY+");

function getTimeContainerText() {
  return $(".time-container").text();
}

function bootstrapWatch() {
  $("#startButton").click(startTimer);
  $("#stopButton").click(cancelTimer);
}

function setUpButtons() {
  $("body").keyup(function(event) {
    if (event.keyCode == 32) {
      if (watchActive) {
        cancelTimer();
      } else {
        startTimer();
      }
    }
  });
}

function floorIt(time, hand) {
  switch (hand) {
    case "ms":
      return pad(Math.floor((time / 10) % 100), 2);
      break;
    case "second":
      return pad(Math.floor(time / 1000) % 60, 2);
      break;
    case "minute":
      return pad(Math.floor(time / 60000), 2);
    default:
      break;
  }
}

function pad(current, maxZeros) {
  var currentString = current.toString();
  var maxZeroArray = [];
  for (var i = currentString.length; i < maxZeros; i++) {
    maxZeroArray.push(0);
  }
  maxZeroArray.join("");
  var final = maxZeroArray.concat(currentString);
  return final.join("");
}

function digest(time) {
  return {
    seconds: floorIt(time, "second"),
    milliseconds: floorIt(time, "ms"),
    minutes: floorIt(time, "minute")
  };
}

function updateTimeDisplay() {
  var cc = (currentCounter = digest(totalTime));
  console.log(`here's css`);
  console.log(cc);
  var timex = `${cc.minutes}:${cc.seconds}.${cc.milliseconds}`;
  $(".time-container").text(timex);
}

function startTimer() {
  console.log("Starting timer");
  watchActive = true;
  timerInterval = setInterval(function() {
    totalTime += 10;
    console.log(totalTime);
    updateTimeDisplay();
  }, 10);
  startSound.play();
}

function cancelTimer() {
  console.log("Cancelling timer");
  if (!watchActive) {
    resetTimer();
    return;
  }
  watchActive = false;
  clearInterval(timerInterval);
  updateTimeDisplay();
  stopSound.play();
}

function resetTimer() {
  totalTime = 0;
  updateTimeDisplay();
}

bootstrapWatch();
setUpButtons();
