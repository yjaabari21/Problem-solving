function reverseWords(){
    let word = document.getElementById("word").value;
    let reversed = "";
    for(let i = word.length - 1; i>=0; i--){
        reversed += word[i];
    }

    document.getElementById("result").innerText = reversed;
}

function countLetters(){
    let word = document.getElementById("word").value;
    let counts = 0;
    for(let i = 0; i<word.length; i++){
        counts++;
    }

    document.getElementById("result").innerText = counts;
}