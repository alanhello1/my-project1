const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const display = document.getElementById("display");

let count = 0;

function updateDisplay() {
    display.innerHTML = count.toString().padStart(2, '0');
}

decrease.addEventListener("click", function(){
    count--;
    updateDisplay();
});
reset.addEventListener("click", function(){
    count = 0;
    updateDisplay();
});
increase.addEventListener("click", function(){
    count++;
    updateDisplay();
});

// Initialize display
updateDisplay();

function nextProject() {
    window.location.href = '/darkandlightmood/dark.html';
  }
