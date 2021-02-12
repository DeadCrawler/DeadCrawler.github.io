var A = "";
var MEM = [];
var count = 0;
var opera = "";

/////////////////////1
var number1 = document.getElementById("1");
number1.addEventListener("click", function(){
    A += "1";
    openSource(A);
});

////////////////////2
var number2 = document.getElementById("2");
number2.addEventListener("click", function(){
    A += "2";
    openSource(A);
});

//////////////////////3
var number3 = document.getElementById("3");
number3.addEventListener("click", function(){
    A += "3";
    openSource(A);
});

//////////////////////4
var number4 = document.getElementById("4");
number4.addEventListener("click", function(){
    A += "4";
    openSource(A);
});

/////////////////////////5
var number5 = document.getElementById("5");
number5.addEventListener("click", function(){
    A += "5";
    openSource(A);
});

/////////////////////////6
var number6 = document.getElementById("6");
number6.addEventListener("click", function(){
    A += "6";
    openSource(A);
});

//////////////////////7
var number7 = document.getElementById("7");
number7.addEventListener("click", function(){
    A += "7";
    openSource(A);
});

////////////////////////8
var number8 = document.getElementById("8");
number8.addEventListener("click", function(){
    A += "8";
    openSource(A);
});

////////////////////////////9
var number9 = document.getElementById("9");
number9.addEventListener("click", function(){
    A += "9";
    openSource(A);
});

///////////////////////////////0
var number0 = document.getElementById("0");
number0.addEventListener("click", function(){
    if(A === ""){
        return;
    }
    A += "0";
    openSource(A);
});


/////////////////////////////OPERATIONS||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||F'NGhateJS
var operationCE = document.getElementById("CE");
operationCE.addEventListener("click", function(){
    A = "";
    openSource(0);
});

var operationCANCEL = document.getElementById("C");
operationCANCEL.addEventListener("click", function(){
    A= "";
    MEMnulifier(count);
    count = 0;
    openSource(0);
});

var operationBCK = document.getElementById("Backspace");
operationBCK.addEventListener("click", function(){
    var res = Math.trunc(stringToNum(A) / 10);
    if(res === 0){
        A = "";
        openSource(A);
    }else  { 
        A = String(res);
        openSource(res);}
});

var operationPL = document.getElementById("plus");
operationPL.addEventListener("click", function(){  
    if(opera !== "" && count !== 0){
        iterationForward(opera);
        opera="";
    }else{
        MEM[count] = stringToNum(A);
        openSource(MEM[count]);
    }
    opera = "+";
    count++;
    A="";
});

var operationMIN = document.getElementById("minus");
operationMIN.addEventListener("click", function(){
    if(opera !== "" && count !== 0){
        iterationForward(opera);
        opera="";
    }else{
        MEM[count] = stringToNum(A);
        openSource(MEM[count]);
    }
    opera = "-";
    count++;
    A="";
});

var operationMULT = document.getElementById("multiply");
operationMULT.addEventListener("click", function(){
    if(opera !== "" && count !== 0){
        iterationForward(opera);
        opera="";
    }else{
        MEM[count] = stringToNum(A);
        openSource(MEM[count]);
    }
    opera = "*";
    count++;
    A="";
});

var operationDIV = document.getElementById("div");
operationDIV.addEventListener("click", function(){
    if(opera !== "" && count !== 0){
        iterationForward(opera);
        opera="";
    }else{
        MEM[count] = stringToNum(A);
        openSource(MEM[count]);
    }
    opera = "/";
    count++;
    A="";
});

var operationCOMA = document.getElementById("coma");
operationCOMA.addEventListener("click", function(){
    if(A === ""){
        A += "0";
    }
    A += ".";
    openSource(A);
});

var operationVAIDER = document.getElementById("enakin");
operationVAIDER.addEventListener("click", function(){
    if(A !== ""){
        A = -A;
        openSource(A);
    }
    
});

var operationEQ = document.getElementById("equals");
operationEQ.addEventListener("click", function(){
    
    if(count === 0){
        openSource(A);
    }else{
        iterationForward(opera);
         A="";
    }
   
});

/////////////////////////////////////////////////////////////////////////FUCKTIONS||||||||||||||||||||||||||||||

function openSource(num){
    document.getElementById("output").innerText = num;
}

function stringToNum(string) {
    return Number(string);
}


function iterationForward(operation){
    MEM[count] = stringToNum(A);

    switch(operation){
        case "+":{
                MEM[count] = MEM[count] + MEM[count-1];
                
                openSource(MEM[count]);
                break;}
            
        case "-":{
                MEM[count] = MEM[count-1] - MEM[count];
                
                openSource(MEM[count]);
                break;
        }
        
        case "*":{
                MEM[count] = MEM[count] * MEM[count-1];
                
                openSource(MEM[count]);
                break;
        }
       
        case "/":{
                if(MEM[count] === 0){
                    MEMnulifier;
                    openSource("You can't do it, just belive me=)");
                    break;
                }
                MEM[count] = MEM[count-1] / MEM[count];
                
                openSource(MEM[count]);
                break;
        }
        case "=":{
        }
    }
}

function lastIndex(){
    return count;
}

function MEMnulifier(number){
    if(number < 0){
        return;
    }
    MEM[count] = 0;
    count--;
    MEMnulifier(number - 1);
}

//var res;
//    if(MEM !== ""){
//        res = stringToNum(MEM) + stringToNum(A);
//        openSource(res);
//        MEM = A = String(res);
//        A = "";
//    }else{
//        MEM = A;
//        A = "";
//        openSource(A);
//    }