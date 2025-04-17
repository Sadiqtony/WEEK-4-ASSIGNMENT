
    const jambScore = 18
    if(jambScore >= 180 ){
        console .log ("passed")
    }
    else {
        console .log ("failed")
    }

const age = 18
if(age >= 18){
    console .log("You are eligible to vote")
}
else{
    console .log("Not eligible")
}


const score = 79
if(score < 50){
    console .log("Fail")
}
else if(score >= 75 && score < 90 ){
    console .log("Good")
}
else if(score >= 50 && score < 75){
    console .log("Average")
}
else if(score >= 90){
    console .log("Excellent")
}



function access(hasID, isAbove18) {
    if (hasID && isAbove18) {
      return "Access granted";
    }
    }

    console .log (access(true, true));




const examScore = 51

if(examScore > 50){
    console .log ("pass")
}
else {
    console .log("fail")
}




const passMark = (Maths, English) =>(Maths >= 50 && English >= 50) ? "Yes" : "No";

console .log (passMark(60, 72));




function client(Email, phoneNumebr) {
    if(Email || phoneNumebr){return "sign up";}
}

console .log(client("Email"))



function login(userName, password){
    if(!userName || !password){ return "invalid input";}
}

console .log(login("userName"))




function work(hour) {
    return hour >= 40 ? "full time" : "part time";
}

console .log (work(50));




const larger = (a, b) => a > b ? a : b;

    console .log(larger(200, 60));