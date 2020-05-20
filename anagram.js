document.addEventListener("click", setText);

function setText() {
    return document.getElementById("anagram").value; 
}
var jumble = setText();
alert(jumble);

