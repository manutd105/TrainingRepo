function pluralizer(noun, number) {
    if (number != 1) {
        return number + " " + noun + "s";
    } else 
    {
        return number + " " + noun;
    }
}
console.log("I have " + pluralizer("cat", 5));
console.log("I have " + pluralizer("dog", 1));
console.log("I have " + pluralizer("dog", 2));
