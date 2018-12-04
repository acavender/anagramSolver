let entered = "";
let clicked = document.getElementById("buttonclick");

function setText() {
    let entered = document.getElementById("anagram").value;
    return entered;
}

clicked.onclick = function() {
    alert(setText());
    let confirmed = document.getElementById("confirmation");
    confirmed.innerHTML = "You entered " + setText();
}