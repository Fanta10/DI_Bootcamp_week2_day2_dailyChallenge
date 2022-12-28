let sentence = "The movie is not that bad, I like it";
let wordNotsentence = sentence.indexOf("not") ;
let wordBadsentence = sentence.indexOf("bad") ; 
if ( wordNotsentence < wordBadsentence){
    let str = sentence.substring(wordNotsentence, wordBadsentence + 3);
    
    console.log(sentence.replace(str, "good"));
}
else {
    console.log(sentence);
}

