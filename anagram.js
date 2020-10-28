function getEntry() {
    var entry = document.getElementById("anagram").value;
    alert(entry);
    return entry;
}

var jumble = getEntry();
console.log(jumble);