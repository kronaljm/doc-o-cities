const screentxt = document.getElementById(`math`);
const prevrespon = document.getElementById(`prevrespon`);
const operators = ["+", "-", "*", "/", "(", ")"];
const exponent = "²";

// number into calc
function number(num){
    if(screentxt.innerHTML == "error" || screentxt.innerHTML == "MD BY YRSTRLY"){
        screentxt.innerHTML = num; //if it says error, replace that
    } else {
        screentxt.append(num); //add number at the end
    }
}

// operation 
function operation(symbol){
    const lastchr = screentxt.innerHTML.slice(-1);
    if(exponent === symbol && lastchr === symbol){ // exponent
        return;
    }
    if(!operators.includes(lastchr)){ // if last chr is NOT one of the operators
        if(screentxt.innerHTML == "error" || screentxt.innerHTML == "MD BY YRSTRLY"){ // if it displays an error
            screentxt.innerHTML = symbol; 
        } else {
            screentxt.append(symbol); // if not display error, append
        }
    }  else if(lastchr === "(" || lastchr === ")"){
           screentxt.append(symbol);
    } else {
       screentxt.innerHTML = screentxt.innerHTML.slice(0, -1) + symbol;
    }
}

// period
function period(){
    screentxt.append("MD BY YRSTRLY");
}

// results
function result(r){
    if(r == "C"){
        prevrespon.innerHTML = screentxt.innerHTML;
        screentxt.innerHTML = "";
    } else if(r == "="){
        try{
            let transform = screentxt.innerHTML.replace(/²/g, "**2 ") .replace(/(\d)\(/g, "$1*(") .replace(/\)(\d)/g, ")*$1") .replace(/\)\(/g, ")*(");
            
            let answer = eval(transform);
            prevrespon.innerHTML = screentxt.innerHTML;
            if(answer.toString().length >= 6){
                screentxt.innerHTML = answer.toFixed(6);
            } else {
                screentxt.innerHTML = answer;
            }

        } catch(error){
            screentxt.innerHTML = "error";
        }
    }
}
// symbols