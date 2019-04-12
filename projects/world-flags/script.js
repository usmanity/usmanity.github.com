console.log(
  "List of flags from: https://apps.timwhitlock.info/emoji/tables/iso3166"
);
var parsedFlagElements = [];
const flags = [
  "1f1e6-1f1e9",
  "1f1e6-1f1ea",
  "1f1e6-1f1eb",
  "1f1e6-1f1ec",
  "1f1e6-1f1ee",
  "1f1e6-1f1f1",
  "1f1e6-1f1f2",
  "1f1e6-1f1f4",
  "1f1e6-1f1f6",
  "1f1e6-1f1f7",
  "1f1e6-1f1f8",
  "1f1e6-1f1f9",
  "1f1e6-1f1fa",
  "1f1e6-1f1fc",
  "1f1e6-1f1fd",
  "1f1e6-1f1ff",
  "1f1e7-1f1e6",
  "1f1e7-1f1e7",
  "1f1e7-1f1e9",
  "1f1e7-1f1ea",
  "1f1e7-1f1eb",
  "1f1e7-1f1ec",
  "1f1e7-1f1ed",
  "1f1e7-1f1ee",
  "1f1e7-1f1ef",
  "1f1e7-1f1f1",
  "1f1e7-1f1f2",
  "1f1e7-1f1f3",
  "1f1e7-1f1f4",
  "1f1e7-1f1f6",
  "1f1e7-1f1f7",
  "1f1e7-1f1f8",
  "1f1e7-1f1f9",
  "1f1e7-1f1fb",
  "1f1e7-1f1fc",
  "1f1e7-1f1fe",
  "1f1e7-1f1ff",
  "1f1e8-1f1e6",
  "1f1e8-1f1e8",
  "1f1e8-1f1e9",
  "1f1e8-1f1eb",
  "1f1e8-1f1ec",
  "1f1e8-1f1ed",
  "1f1e8-1f1ee",
  "1f1e8-1f1f0",
  "1f1e8-1f1f1",
  "1f1e8-1f1f2",
  "1f1e8-1f1f3",
  "1f1e8-1f1f4",
  "1f1e8-1f1f7",
  "1f1e8-1f1fa",
  "1f1e8-1f1fb",
  "1f1e8-1f1fc",
  "1f1e8-1f1fd",
  "1f1e8-1f1fe",
  "1f1e8-1f1ff",
  "1f1e9-1f1ea",
  "1f1e9-1f1ef",
  "1f1e9-1f1f0",
  "1f1e9-1f1f2",
  "1f1e9-1f1f4",
  "1f1e9-1f1ff",
  "1f1ea-1f1e8",
  "1f1ea-1f1ea",
  "1f1ea-1f1ec",
  "1f1ea-1f1ed",
  "1f1ea-1f1f7",
  "1f1ea-1f1f8",
  "1f1ea-1f1f9",
  "1f1eb-1f1ee",
  "1f1eb-1f1ef",
  "1f1eb-1f1f0",
  "1f1eb-1f1f2",
  "1f1eb-1f1f4",
  "1f1eb-1f1f7",
  "1f1ec-1f1e6",
  "1f1ec-1f1e7",
  "1f1ec-1f1e9",
  "1f1ec-1f1ea",
  "1f1ec-1f1eb",
  "1f1ec-1f1ec",
  "1f1ec-1f1ed",
  "1f1ec-1f1ee",
  "1f1ec-1f1f1",
  "1f1ec-1f1f2",
  "1f1ec-1f1f3",
  "1f1ec-1f1f5",
  "1f1ec-1f1f6",
  "1f1ec-1f1f7",
  "1f1ec-1f1f8",
  "1f1ec-1f1f9",
  "1f1ec-1f1fa",
  "1f1ec-1f1fc",
  "1f1ec-1f1fe",
  "1f1ed-1f1f0",
  "1f1ed-1f1f2",
  "1f1ed-1f1f3",
  "1f1ed-1f1f7",
  "1f1ed-1f1f9",
  "1f1ed-1f1fa",
  "1f1ee-1f1e9",
  "1f1ee-1f1ea",
  "1f1ee-1f1f1",
  "1f1ee-1f1f2",
  "1f1ee-1f1f3",
  "1f1ee-1f1f4",
  "1f1ee-1f1f6",
  "1f1ee-1f1f7",
  "1f1ee-1f1f8",
  "1f1ee-1f1f9",
  "1f1ef-1f1ea",
  "1f1ef-1f1f2",
  "1f1ef-1f1f4",
  "1f1ef-1f1f5",
  "1f1f0-1f1ea",
  "1f1f0-1f1ec",
  "1f1f0-1f1ed",
  "1f1f0-1f1ee",
  "1f1f0-1f1f2",
  "1f1f0-1f1f3",
  "1f1f0-1f1f5",
  "1f1f0-1f1f7",
  "1f1f0-1f1fc",
  "1f1f0-1f1fe",
  "1f1f0-1f1ff",
  "1f1f1-1f1e6",
  "1f1f1-1f1e7",
  "1f1f1-1f1e8",
  "1f1f1-1f1ee",
  "1f1f1-1f1f0",
  "1f1f1-1f1f7",
  "1f1f1-1f1f8",
  "1f1f1-1f1f9",
  "1f1f1-1f1fa",
  "1f1f1-1f1fb",
  "1f1f1-1f1fe",
  "1f1f2-1f1e6",
  "1f1f2-1f1e8",
  "1f1f2-1f1e9",
  "1f1f2-1f1ea",
  "1f1f2-1f1eb",
  "1f1f2-1f1ec",
  "1f1f2-1f1ed",
  "1f1f2-1f1f0",
  "1f1f2-1f1f1",
  "1f1f2-1f1f2",
  "1f1f2-1f1f3",
  "1f1f2-1f1f4",
  "1f1f2-1f1f5",
  "1f1f2-1f1f6",
  "1f1f2-1f1f7",
  "1f1f2-1f1f8",
  "1f1f2-1f1f9",
  "1f1f2-1f1fa",
  "1f1f2-1f1fb",
  "1f1f2-1f1fc",
  "1f1f2-1f1fd",
  "1f1f2-1f1fe",
  "1f1f2-1f1ff",
  "1f1f3-1f1e6",
  "1f1f3-1f1e8",
  "1f1f3-1f1ea",
  "1f1f3-1f1eb",
  "1f1f3-1f1ec",
  "1f1f3-1f1ee",
  "1f1f3-1f1f1",
  "1f1f3-1f1f4",
  "1f1f3-1f1f5",
  "1f1f3-1f1f7",
  "1f1f3-1f1fa",
  "1f1f3-1f1ff",
  "1f1f4-1f1f2",
  "1f1f5-1f1e6",
  "1f1f5-1f1ea",
  "1f1f5-1f1eb",
  "1f1f5-1f1ec",
  "1f1f5-1f1ed",
  "1f1f5-1f1f0",
  "1f1f5-1f1f1",
  "1f1f5-1f1f2",
  "1f1f5-1f1f3",
  "1f1f5-1f1f7",
  "1f1f5-1f1f8",
  "1f1f5-1f1f9",
  "1f1f5-1f1fc",
  "1f1f5-1f1fe",
  "1f1f6-1f1e6",
  "1f1f7-1f1ea",
  "1f1f7-1f1f4",
  "1f1f7-1f1f8",
  "1f1f7-1f1fa",
  "1f1f7-1f1fc",
  "1f1f8-1f1e6",
  "1f1f8-1f1e7",
  "1f1f8-1f1e8",
  "1f1f8-1f1e9",
  "1f1f8-1f1ea",
  "1f1f8-1f1ec",
  "1f1f8-1f1ed",
  "1f1f8-1f1ee",
  "1f1f8-1f1ef",
  "1f1f8-1f1f0",
  "1f1f8-1f1f1",
  "1f1f8-1f1f2",
  "1f1f8-1f1f3",
  "1f1f8-1f1f4",
  "1f1f8-1f1f7",
  "1f1f8-1f1f8",
  "1f1f8-1f1f9",
  "1f1f8-1f1fb",
  "1f1f8-1f1fd",
  "1f1f8-1f1fe",
  "1f1f8-1f1ff",
  "1f1f9-1f1e8",
  "1f1f9-1f1e9",
  "1f1f9-1f1eb",
  "1f1f9-1f1ec",
  "1f1f9-1f1ed",
  "1f1f9-1f1ef",
  "1f1f9-1f1f0",
  "1f1f9-1f1f1",
  "1f1f9-1f1f2",
  "1f1f9-1f1f3",
  "1f1f9-1f1f4",
  "1f1f9-1f1f7",
  "1f1f9-1f1f9",
  "1f1f9-1f1fb",
  "1f1f9-1f1fc",
  "1f1f9-1f1ff",
  "1f1fa-1f1e6",
  "1f1fa-1f1ec",
  "1f1fa-1f1f2",
  "1f1fa-1f1f8",
  "1f1fa-1f1fe",
  "1f1fa-1f1ff",
  "1f1fb-1f1e6",
  "1f1fb-1f1e8",
  "1f1fb-1f1ea",
  "1f1fb-1f1ec",
  "1f1fb-1f1ee",
  "1f1fb-1f1f3",
  "1f1fb-1f1fa",
  "1f1fc-1f1eb",
  "1f1fc-1f1f8",
  "1f1fe-1f1ea",
  "1f1fe-1f1f9",
  "1f1ff-1f1e6",
  "1f1ff-1f1f2",
  "1f1ff-1f1fc"
];

function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === "complete"
      : document.readyState !== "loading"
  ) {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function getFlagCodepoint(unprocessedString) {
  var splitPair = unprocessedString.split("-");
  var processedPair = [];
  splitPair.forEach(function(codepoint) {
    processedPair.push("&#x" + codepoint.toUpperCase() + ";");
  });
  return processedPair.join("");
}

function generateRandomPosition(variance) {
  return {
    x: Math.floor(Math.random() * (variance || window.innerWidth * 2)) + "px",
    y: Math.floor(Math.random() * (variance || window.innerHeight * 2)) + "px"
  };
}

function addFlags() {
  var world = document.querySelector(".world");
  flags.forEach(function(f) {
    var position = generateRandomPosition();
    console.log(position);
    var newEl = document.createElement("div");
    newEl.classList.add("flag");
    var codepoint = getFlagCodepoint(f);
    newEl.innerHTML = codepoint;
    newEl.style.top = position.y;
    newEl.style.left = position.x;
    parsedFlagElements.push(newEl);
    world.appendChild(newEl);
  });
}

function updateFlagPositions() {
  parsedFlagElements.forEach(function(el) {
    console.log("going...");
    var currentX = parseInt(el.style.left);
    if (currentX < -100) {
      currentX = window.innerWidth + 100;
    }
    var currentY = parseInt(el.style.top);
    el.style.left = currentX + -1 + "px";
    // el.style.top = currentY + 1 + "px";
  });
}

ready(addFlags);

requestAnimationFrame(updateFlagPositions);
