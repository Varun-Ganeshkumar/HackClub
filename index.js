//basic variables and rule variables
var timeleft = 15;
let addToUser;
let oneTime = true;
let oneTimeLast = true;
let username;
let rule1 = false;
let rule2 = false;
let rule3 = false;
let rule4 = false;
let rule5 = false;
let rule6 = false;
let rule7 = false;
let rule8 = false;
//gets id for pictures and dramatic
const rule2nd = document.getElementById("rule2");
const rule3rd = document.getElementById("rule3");
const rule4th = document.getElementById("rule4");
const rule5th = document.getElementById("rule5");
const rule6th = document.getElementById("rule6");
const rule7th = document.getElementById("rule7");
const countdownTimer = document.getElementById("countdown");
//generates 2 random letters for rule 3  
const letterIndex1 = Math.floor(Math.random() * 26);
const letterIndex2 = Math.floor(Math.random() * 26);
const letter1 = String.fromCharCode(97 + letterIndex1);
let letter2 = String.fromCharCode(97 + letterIndex2);
//makes it really low chance for 2 letters to be the same
if (letter1 != letter2) {
    rule3rd.innerHTML = rule3rd.innerHTML.replace("{}",letter1);
    rule3rd.innerHTML = rule3rd.innerHTML.replace("[]",letter2);
}
else {
    const letterIndex3 = Math.floor(Math.random() * 26);
    const letter3 = String.fromCharCode(97 + letterIndex3);
    if (letter1 != letter3) {
        rule3rd.innerHTML = rule3rd.innerHTML.replace("{}",letter1);
        letter2 = letter3;
        rule3rd.innerHTML = rule3rd.innerHTML.replace("[]",letter3);
    }
}
//rule 7 things
document.getElementById("simpleButton").onclick = function(){
    addToUser = document.getElementById("addToUser").value;
    if (addToUser.length == 0){
        alert("Enter something for rule 7!");
    }
    else if (addToUser.length > 0) {
        document.getElementById("simpleButton").classList.replace("visible","hidden");
        document.getElementById("addToUser").classList.replace("visible","hidden");
        rule7th.innerHTML = rule7th.innerHTML.replace("Tell me something about yourself!", "Good! Now include that in your username!");
    }
}
//list
let list_options = ['red', 'yellow', 'orange', 'green', 'blue', 'purple', 'indigo' , 'violet' , 'aqua'];
//image vars
const rule1ImgLeft = document.getElementById("r1Left");
const rule1ImgRight = document.getElementById("r1Right");
const rule2ImgLeft = document.getElementById("r2Left");
const rule2ImgRight = document.getElementById("r2Right");
const rule3ImgLeft = document.getElementById("r3Left");
const rule3ImgRight = document.getElementById("r3Right");
const rule4ImgLeft = document.getElementById("r4Left");
const rule4ImgRight = document.getElementById("r4Right");
const rule5ImgLeft = document.getElementById("r5Left");
const rule5ImgRight = document.getElementById("r5Right");
const rule6ImgLeft = document.getElementById("r6Left");
const rule6ImgRight = document.getElementById("r6Right");
const rule7ImgLeft = document.getElementById("r7Left");
const rule7ImgRight = document.getElementById("r7Right");
//changes things when button is clicked
document.getElementById("submitButton").onclick = function(){
    win();
    username = document.getElementById("userInput").value;
    let regUsername = username;
    username = username.toLowerCase();
    let usernameLength = username.length;
    //NOTE - added else if statements bc the code would fail without them, I do not
    // know if they work with else statements now but I do not want to check

    //RULE 1 CODE
    //checks if rule 1 is true and shows r2 if true
    if (usernameLength != 0 && usernameLength <= 25) {
        rule1 = true;
        rule1ImgLeft.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYKWYDtF_ovKm10S7y-rxdOaY1cuj3JD-sQ&s";
        rule1ImgRight.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYKWYDtF_ovKm10S7y-rxdOaY1cuj3JD-sQ&s";
    }
    //sets back to xs if false
    else if (usernameLength == 0 || usernameLength > 25) {
        rule1 = false;
        rule1ImgLeft.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUyMV_BKZ_9cj9K0juk8YE9My-VVDQrVz0Q&s";
        rule1ImgRight.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUyMV_BKZ_9cj9K0juk8YE9My-VVDQrVz0Q&s";
    }
    //reveals 2nd rule
    if (rule1 == true) {
        rule2nd.classList.replace("hidden","nHiddenNew");
    }
    //RULE 2 CODE
    if (username.replace(/\D/g, '').length == 2){
        rule2 = true
        rule2ImgLeft.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYKWYDtF_ovKm10S7y-rxdOaY1cuj3JD-sQ&s";
        rule2ImgRight.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYKWYDtF_ovKm10S7y-rxdOaY1cuj3JD-sQ&s";
    }
    //sets back to xs if false
    else if (username.replace(/\D/g, '').length != 2) {
        rule2 = false;
        rule2ImgLeft.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUyMV_BKZ_9cj9K0juk8YE9My-VVDQrVz0Q&s";
        rule2ImgRight.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUyMV_BKZ_9cj9K0juk8YE9My-VVDQrVz0Q&s";
    }
    //reveals 3rd rule
    if (rule1 == true && rule2 == true) {
        rule3rd.classList.replace("hidden","nHiddenNew");
    }
    //RULE 3 CODE
    if (username.includes(letter1)&&username.includes(letter2)){
        rule3 = true;
        rule3ImgLeft.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYKWYDtF_ovKm10S7y-rxdOaY1cuj3JD-sQ&s";
        rule3ImgRight.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYKWYDtF_ovKm10S7y-rxdOaY1cuj3JD-sQ&s";
    }
    //sets back to xs if false
    else if (!username.includes(letter1)||!username.includes(letter2)) {
        rule3 = false;
        rule3ImgLeft.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUyMV_BKZ_9cj9K0juk8YE9My-VVDQrVz0Q&s";
        rule3ImgRight.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUyMV_BKZ_9cj9K0juk8YE9My-VVDQrVz0Q&s";
    }
    //reveals 4th rule and sets it up
    if (rule1 == true && rule2 == true && rule3 == true && oneTime == true) {
        rule4th.classList.replace("hidden","nHiddenNew");
        countdownTimer.classList.replace("hidden","nHiddenSpecial");
        oneTime = false;
        //rule 4 stuff
            var downloadTimer = setInterval(function(){
            if(timeleft <= 0){
                clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML = "You Lose!";
            } else {
                document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
            }
            timeleft -= 1;
            }, 1000);
            check();
    }
    if (rule1 == true && rule2 == true && rule3 == true && rule4 == true) {
        rule5th.classList.replace("hidden","nHiddenNew");
    }
    //RULE 5 CODE
    if (list_options.some(domain => username.includes(domain)) == true){
        rule5 = true;
        rule5ImgLeft.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYKWYDtF_ovKm10S7y-rxdOaY1cuj3JD-sQ&s";
        rule5ImgRight.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYKWYDtF_ovKm10S7y-rxdOaY1cuj3JD-sQ&s";
    }
    //sets back to xs if false
    else if (list_options.some(domain => username.includes(domain)) == false) {
        rule5 = false;
        rule5ImgLeft.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUyMV_BKZ_9cj9K0juk8YE9My-VVDQrVz0Q&s";
        rule5ImgRight.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUyMV_BKZ_9cj9K0juk8YE9My-VVDQrVz0Q&s";
    }
    if (rule1 == true && rule2 == true && rule3 == true && rule4 == true && rule5 == true) {
        rule6th.classList.replace("hidden","nHiddenNew");
    }
    //RULE 6 CODE
    let last = regUsername.slice(-1);
    if (regUsername[0] === regUsername[0].toUpperCase() == true && (last == "." || last == "?" || last == "!")){
        rule6 = true;
        rule6ImgLeft.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYKWYDtF_ovKm10S7y-rxdOaY1cuj3JD-sQ&s";
        rule6ImgRight.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYKWYDtF_ovKm10S7y-rxdOaY1cuj3JD-sQ&s";
    }
    //sets back to xs if false
    else if (regUsername[0] === regUsername[0].toUpperCase() == false || !(last == "." || last == "?" || last == "!")) {
        rule6 = false;
        rule6ImgLeft.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUyMV_BKZ_9cj9K0juk8YE9My-VVDQrVz0Q&s";
        rule6ImgRight.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUyMV_BKZ_9cj9K0juk8YE9My-VVDQrVz0Q&s";
    }
    if (rule1 == true && rule2 == true && rule3 == true && rule4 == true && rule5 == true && rule6 == true) {
        rule7th.classList.replace("hidden","nHiddenNew");
    }
    //RULE 7 CODE
    if (username.includes(addToUser) == true){
        rule7 = true;
        rule7ImgLeft.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYKWYDtF_ovKm10S7y-rxdOaY1cuj3JD-sQ&s";
        rule7ImgRight.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYKWYDtF_ovKm10S7y-rxdOaY1cuj3JD-sQ&s";
    }
    //sets back to xs if false
    else if (!username.includes(addToUser) == false) {
        rule7 = false;
        rule7ImgLeft.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUyMV_BKZ_9cj9K0juk8YE9My-VVDQrVz0Q&s";
        rule7ImgRight.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUyMV_BKZ_9cj9K0juk8YE9My-VVDQrVz0Q&s";
    }
    if (rule1 == true && rule2 == true && rule3 == true && rule4 == true && rule5 == true && rule6 == true && rule7 == true && oneTimeLast == true) {
        oneTimeLast = false;
        alert();
    }
    
}; //End of function

//RULE 4 CODE
var check = function() {
    rule4 = true;
    rule4ImgLeft.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYKWYDtF_ovKm10S7y-rxdOaY1cuj3JD-sQ&s";
    rule4ImgRight.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYKWYDtF_ovKm10S7y-rxdOaY1cuj3JD-sQ&s";
    if (timeleft < 0) {
        rule4 = false;
        rule4ImgLeft.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUyMV_BKZ_9cj9K0juk8YE9My-VVDQrVz0Q&s";
        rule4ImgRight.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUyMV_BKZ_9cj9K0juk8YE9My-VVDQrVz0Q&s";
        alert("You lost! The timer ran out!");
        location.reload();
        
    }
    else {
        setTimeout(check, 1100);
    }

}
document.getElementById("evilButton").onclick = function(){
    if (timeleft < 15) {
        timeleft += 1;
    }
}
function alert() {
    var result = confirm("Are you finished with your username? (Confirm twice)")
    if (result == false) {
        event.preventDefault();
        oneTimeLast = true;
    }
    else if (result == true) {
        rule8 = true;
    }
}
var win = function() {
     if (rule1 == true && rule2 == true && rule3 == true && rule4 == true && rule5 == true && rule6 == true && rule7 == true && rule8 == true) {
        alert("You Win! Exit this to play again.");
        location.reload();
        document.getElementById("addToUser").value = '';
        document.getElementById("userInput").value = '';
        

    }
    else {
        setTimeout(win,200);
    }
}
