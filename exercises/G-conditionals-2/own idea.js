

function containsArt(sentence) {
    if (sentence.includes("draw") || sentence.includes("design")){ 
     return "art in search data\n";

}

else {
return "not art related\n";
}
}
var sentence1 = "code your future";
var sentence2 = "draw your future";
var sentence3 = "design your future";

console.log("'" + sentence1 + "': " + containsArt(sentence1));
console.log("'" + sentence2 + "': " + containsArt(sentence2));
console.log("'" + sentence3 + "': " + containsArt(sentence3));