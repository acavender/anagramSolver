// This function runs when the user submits the jumble.
function getEntry() {
    var jumble = "tfuiot"; /* test case */
    // var jumble = document.getElementById("anagram").value; /* actual case, when all is ready */
    console.log(jumble);
    var arr = jumble.split("");
    console.log(arr);
    return arr;
}

var working = getEntry();
console.log(working);

/* The above should now work to capture user input, convert it to an array, and save it to a variable. Next steps:
(1) Iterate through the possible combinations of letters
(2) Check those combinations agains an English-language dictionary using an API
(3) Keep track of any words that can be formed from the letters of the jumble
(4) Write all the words that can be made to the HTML document */
