/*const button = document.getElementById("button");

button.addEventListener("click", function(){
    document.body.style.backgroundColor = "black";
    button.style.backgroundColor = "white";
    button.style.color = "black";
});*/

function changecolor(){
    var button = document.getElementById("button");
    var body = document.body;

    if (body.style.backgroundColor === "black"){
        body.style.backgroundColor = "white";
        button.textContent = "dark mode";
        button.style.backgroundColor = "black";
        button.style.color = "white";
    } else{
        body.style.backgroundColor = "black";
        button.textContent = "light mode";
        button.style.backgroundColor = "white";
        button.style.color = "black";
    }
}

function nextProject() {
    window.location.href = '/dist/index.html';
  }
