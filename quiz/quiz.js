function getTheValues(myRef){
	var total=0;
let valueArray1= getRadioValue(myRef.q1);

if (valueArray1=="West Indies"){
	total=total+2;
	var mydiv=document.getElementById("q111");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>West Indies-</strong><i>your answer is correct</i></span>";
}
else if (valueArray1=="India"){
	total=total+0;
	var mydiv1=document.getElementById("q111");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>West Indies-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q133");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>India-</strong><i>your answer is incorrect</i></span>";
}
else if (valueArray1=="England"){
	total=total+0;
	var mydiv1=document.getElementById("q111");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>West Indies-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q122");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>England-</strong><i>your answer is incorrect</i></span>";
}
else if (valueArray1=="Australia"){
	total=total+0;
	var mydiv1=document.getElementById("q111");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>West Indies-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q144");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Australia-</strong><i>your answer is incorrect</i></span>";
}
else if (valueArray1==""){
	total=total;
	var mydiv=document.getElementById("q111");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>West Indies-</strong><i>the correct answer</i></span>";

}

let valueArray2= getRadioValue(myRef.q2);
if (valueArray2=="Narendra Modi Stadium"){
	total=total+2;
	var mydiv=document.getElementById("q233");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>Narendra Modi Stadium-</strong><i>your answer is correct</i></span>";
}
else if (valueArray2=="Lords"){
	total=total+0;
	var mydiv1=document.getElementById("q233");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Narendra Modi Stadium-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q222");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Lords-</strong><i>your answer is incorrect</i></span>";
}
else if (valueArray2=="Eden Gardens"){
	total=total+0;
	var mydiv1=document.getElementById("q233");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Narendra Modi Stadium-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q211");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Eden Gardens-</strong><i>your answer is incorrect</i></span>";
}
else if (valueArray2=="R.Premadasa Stadium"){
	total=total+0;
	var mydiv1=document.getElementById("q233");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Narendra Modi Stadium-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q244");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>R.Premadasa Stadium-</strong><i>your answer is incorrect</i></span>";
}
else if (valueArray1==""){
	total=total;
	var mydiv=document.getElementById("q233");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>Narendra Modi Stadium-</strong><i>the correct answer</i></span>";
}

let valueArray3= getRadioValue(myRef.q3);
if (valueArray3=="60 minutes"){
	total=total+2;
	var mydiv=document.getElementById("q311");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>60 minutes-</strong><i>your answer is correct</i></span>";
}
else if (valueArray3=="45 minutes"){
	total=total+0;
	var mydiv1=document.getElementById("q311");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>60 minutes-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q333");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>45 minutes-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray3=="90 minutes"){
	total=total+0;
	var mydiv1=document.getElementById("q311");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>60 minutes-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q344");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>90 minutes-</strong><i>your answer is incorrect</i></span>";
}
else if(valueArray3=="75 minutes"){
	total=total+0;
	var mydiv1=document.getElementById("q311");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>60 minutes-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q322");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>75 minutes-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray3==""){
	total=total;
	var mydiv=document.getElementById("q311");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>60 minutes-</strong><i>the correct answer</i></span>";

}


let valueArray4= getRadioValue(myRef.q4);
if (valueArray4=="32"){
	total=total+2;
	var mydiv=document.getElementById("q433");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>32-</strong><i>your answer is correct</i></span>";
}
else if (valueArray4=="28"){
	total=total+0;
	var mydiv1=document.getElementById("q433");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>32-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q411");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>28-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray4=="16"){
	total=total+0;
	var mydiv1=document.getElementById("q433");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>32-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q422");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>16-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray4=="12"){
	total=total+0;
	var mydiv1=document.getElementById("q433");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>32-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q444");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>12-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray4==""){
	total=total;
	var mydiv=document.getElementById("q433");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>32-</strong><i>the correct answer</i></span>";

}


let valueArray5= getRadioValue(myRef.q5);
if (valueArray5=="22"){
	total=total+2;
	var mydiv=document.getElementById("q522");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>22-</strong><i>your answer is correct</i></span>";
}
else if(valueArray5=="20"){
	total=total+0;
	var mydiv1=document.getElementById("q522");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>22-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q511");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>20-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray5=="18"){
	total=total+0;
	var mydiv1=document.getElementById("q522");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>22-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q533");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>18-</strong><i>your answer is incorrect</i></span>";
}
else if(valueArray5=="24"){
	total=total+0;
	var mydiv1=document.getElementById("q522");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>22-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q544");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>24-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray5==""){
	total=total;
	var mydiv=document.getElementById("q522");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>22-</strong><i>the correct answer</i></span>";
}

let valueArray6= getRadioValue(myRef.q6);
if (valueArray6=="Britain"){
	total=total+2;
	var mydiv=document.getElementById("q611");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>Britain-</strong><i>your answer is correct</i></span>";
}
else if (valueArray6=="China"){
	total=total+0;
	var mydiv1=document.getElementById("q611");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Britain-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q622");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>China-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray6=="Denmark"){
	total=total+0;
	var mydiv1=document.getElementById("q611");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Britain-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q633");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Denmark-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray6=="Brazil"){
	total=total+0;
	var mydiv1=document.getElementById("q611");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Britain-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q644");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Brazil-</strong><i>your answer is incorrect</i></span>";
}
else if(valueArray6==""){
	total=total;
	var mydiv=document.getElementById("q611");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>Britain-</strong><i>the correct answer</i></span>";
}

let valueArray7= getRadioValue(myRef.q7);
if (valueArray7=="1992"){
	total=total+2;
	var mydiv=document.getElementById("q733");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>1992-</strong><i>your answer is correct</i></span>";
}
else if (valueArray7=="1996"){
	total=total+0;
	var mydiv1=document.getElementById("q733");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>1992-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q722");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>1996-</strong><i>your answer is incorrect</i></span>";
}
else if(valueArray7=="2000"){
	total=total+0;
	var mydiv1=document.getElementById("q733");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>1992-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q711");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>2000-</strong><i>your answer is incorrect</i></span>";
	
}	
else if(valueArray7=="1988"){
	total=total+0;
	var mydiv1=document.getElementById("q733");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>1992-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q744");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>1988-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray7==""){
	total=total;
	var mydiv=document.getElementById("q733");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>1992-</strong><i>the correct answer</i></span>";
}

let valueArray8= getRadioValue(myRef.q8);
if (valueArray8=="James Naismith"){
	total=total+2;
	var mydiv=document.getElementById("q822");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>James Naismith-</strong><i>your answer is correct</i></span>";
}
else if (valueArray8=="Maurice Podoloff"){
	total=total+0;
	var mydiv1=document.getElementById("q822");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>James Naismith-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q811");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Maurice Podoloff-</strong><i>your answer is incorrect</i></span>";
}
else if(valueArray8=="George Mikan"){
	total=total+0;
	var mydiv1=document.getElementById("q822");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>James Naismith-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q833");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>George Mikan-</strong><i>your answer is incorrect</i></span>";
}
else if(valueArray8=="Bill Sharman"){
	total=total+0;
	var mydiv1=document.getElementById("q822");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>James Naismith-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q844");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Bill Sharman-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray8==""){
	total=total;
	var mydiv=document.getElementById("q822");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>James Naismith-</strong><i>the correct answer</i></span>";
}

let valueArray9= getRadioValue(myRef.q9);
if (valueArray9=="Lionel Messi"){
	total=total+2;
	var mydiv=document.getElementById("q911");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>Lionel Messi-</strong><i>your answer is correct</i></span>";
}
else if (valueArray9=="Neymar Jr"){
	total=total+0;
	var mydiv1=document.getElementById("q911");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Lionel Messi-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q933");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Neymar Jr-</strong><i>your answer is incorrect</i></span>";
}
else if (valueArray9=="Cristiano Ronaldo"){
	total=total+0;
	var mydiv1=document.getElementById("q911");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Lionel Messi-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q922");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Cristiano Ronaldo-</strong><i>your answer is incorrect</i></span>";
}
else if (valueArray9=="Kylian Mbappé"){
	total=total+0;
	var mydiv1=document.getElementById("q911");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Lionel Messi-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q944");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Kylian Mbappé-</strong><i>your answer is incorrect</i></span>";
}
else if(valueArray9==""){
	total=total;
	var mydiv=document.getElementById("q911");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>Lionel Messi-</strong><i>the correct answer</i></span>";

}

let valueArray10= getRadioValue(myRef.q10);
if (valueArray10=="Hank Luisetti"){
	total=total+2;
	var mydiv=document.getElementById("q1033");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>Hank Luisetti-</strong><i>your answer is correct</i></span>";
}
else if (valueArray10=="George Mikan"){
	total=total+0;
	var mydiv1=document.getElementById("q1033");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Hank Luisetti-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q1022");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>George Mikan-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray10=="Earl Lloyd"){
	total=total+0;
	var mydiv1=document.getElementById("q1033");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Hank Luisetti-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q1011");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Earl Lloyd-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray10=="Nathaniel Clifton"){
	total=total+0;
	var mydiv1=document.getElementById("q1033");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Hank Luisetti-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q1044");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Nathaniel Clifton-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray10==""){
	total=total;
	var mydiv=document.getElementById("q1033");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>Hank Luisetti-</strong><i>the correct answer</i></span>";
}
document.getElementById("score").innerHTML=" Marks : "+total+"<span style=\"color:grey\"></span>";
document.getElementById("retake").style.display="block";

console.log(total);
clearInterval(time);
document.getElementById("sub").style.display="none";
if (total>=12 && total<=20){
document.querySelector("body").style.backgroundColor="#40F99B";}
if(total>=8 && total<12){
document.querySelector("body").style.backgroundColor="#F0F757";}
if(total<5){
document.querySelector("body").style.backgroundColor="#FF4949";}	
}


function getRadioValue(radioArray){
    for( let i=0; i< radioArray.length; i++){
        if (radioArray[i].checked){
            return radioArray[i].value;
            
        }
    }
    return "";
}

var sec = 60;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "s";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        getTheValues(quiz);
        document.getElementById('sub').style.display="none";
    }
}