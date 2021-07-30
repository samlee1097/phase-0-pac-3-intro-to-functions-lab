
function shout(string){
    return string.toUpperCase(); //toUpperCase() converts strings to upper case
}


function whisper(string){
    return string.toLowerCase(); //toLowerCase() converts strings to lower case
}

function logShout(string){
    console.log(string.toUpperCase()); //console.log will display in terminal
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
    switch (true) { //Enters the case when the case/condition is true (for this switch)
        case (string === string.toLowerCase()):
            return "I can't hear you!";
         
        case (string === string.toUpperCase()):
            return "YES INDEED!";
        
        case (string === "I love you, Grandma."):
            return "I love you, too.";
        
        default: //Case when entry is not a string
            break;
    }  
}

