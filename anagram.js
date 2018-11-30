var entered = "";

function enterText(){
    entered = document.getElementById("anagram").value;
    console.log(entered);
};

var arr = entered.split("");
console.log(arr);