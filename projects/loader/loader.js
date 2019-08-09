var currentStep = 0;
var steps = ["ᚐ", "ᚑ", "ᚒ", "ᚓ", "ᚔ", "ᚓ", "ᚒ", "ᚑ"];

function updateText() {
  if (currentStep === 7) {
    currentStep = 0;
  } else {
    currentStep++;
  }
  $(".loading").text(steps[currentStep]);
}

function startLoading() {
  window.setInterval(function() {
    updateText();
  }, 180);
}

startLoading();
