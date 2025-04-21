document.getElementById("content").innerHTML = "content is changed " + Date();

let c2 = document.getElementById("content-2");
c2.style.color = "#52a5ce";
c2.style.fontSize = "20px";
c2.style.fontWeight = "bold";

const button = document.getElementById("btn");
let background = false;

button.addEventListener("click", () => {
    if (!background) {
        document.body.style.backgroundImage = "url('mountain.jpg')";
        button.textContent = "Remove Image";
        background = true;
    } else {
        document.body.style.backgroundImage = 'none';
        button.textContent = 'Add Background Image';
        background = false;
    }
});