// My problem is probably a missing event listener
var entered = "test";

function setText() {
    var x = document.getElementsByName("entry").value;
    entered = x;
    return entered;
}
setText();
console.log(entered);
