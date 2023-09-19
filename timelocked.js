const output = document.getElementById("typewriterOutput");
const startTimestamp = 1695103796000; // Replace with your UNIX timestamp for start
const endTimestamp = 1695104756000; // Replace with your UNIX timestamp for end

const now = new Date().getTime();
let currentIndex = localStorage.getItem("currentIndex") || 0;
const totalChars = textToType.length;
const totalTime = endTimestamp - startTimestamp;
const timePerChar = totalTime / totalChars;

if (now >= startTimestamp && now <= endTimestamp) {
  let adjustedTime = now - startTimestamp;
  currentIndex = Math.floor(adjustedTime / timePerChar);
  output.textContent = textToType.substring(0, currentIndex);
  typeText();
} else if (now < startTimestamp) {
  setTimeout(() => {
    currentIndex = 0;
    typeText();
  }, startTimestamp - now);
} else {
  currentIndex = totalChars;
  output.textContent = textToType;
}

function typeText() {
  if (currentIndex < totalChars) {
    output.textContent += textToType[currentIndex];
    localStorage.setItem("currentIndex", ++currentIndex);
    setTimeout(typeText, timePerChar);
  }
}
