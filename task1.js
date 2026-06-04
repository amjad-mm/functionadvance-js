function findlongestword (sentence){
    let words = sentence.split(" ");

    let longestword=words[0]

    for (let word of words){
        if(word.length>longestword.length){
            longestword=word
        }
    }
    return longestword
}
console.log(findlongestword("The quick brown fox"))