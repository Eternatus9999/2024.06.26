let randomNumber = Math.floor(Math.random() * 10) + 1;
let x=5;
document.getElementById("round").innerHTML = x;


function submit(){
    let input =  document.getElementById("guessInput").value;
    if(x-1==0){
        window.alert("System32 file was deleted successfully..");
        randomNumber = Math.floor(Math.random() * 10) + 1;
        x=6;
        document.getElementById("round").innerHTML = x;
    }
    if(randomNumber==input){
        document.getElementById("result").innerHTML  = "You Win!";
        
    }
    else{
        x--;
        document.getElementById("round").innerHTML = x;
        document.getElementById("result").innerHTML = "You are wrong try again";
    }
}