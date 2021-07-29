'use strict';

let counter = 0;
function userName(){
let userName = prompt('enter your name please ');


// while loop t make sure the user don't enter embty value 
while(!userName)
{ 
    userName = prompt('pleas enter your name '); 
}

alert("hello "+userName+" we ganna ask you 5 questions just for fun and we hope you enjoy^_^ , Your answer must be Yes or No ");

}

function askUserAboutTheCss(){
 let question01 = prompt('we using  css  for styling pages of html?');
 let question1=question01.toLowerCase();
 if (question1 =='yes' || question1 =='y')
 {
  //console.log("correct answer");
  counter++;
  alert('correct answer');

 }else if(question1 == 'no' || question1 == 'n')
 {
   alert("wrong answer");
 } 
 else {
     alert('yor answer not include yes or no ')
 }
}

function AskUserAbboutHTML(){
 let question02 = prompt('we use html for make pages interact with user?');
 let question2=question02.toLowerCase();
 if (question2 == 'yes' || question2 == 'y')
 {
    alert("wrong answer");
     
 } else if(question2 == 'no' || question2 == 'n')
 {
    //console.log("correct answer");
    counter++;
    alert("correct answer");
 } else {
    alert('yor answer not include yes or no ')
}
}

 function AskUserAbboutHTMLStandFor(){
let question03 = prompt('html stand for hypertext markup language?');
let question3=question03.toLowerCase();
 if (question3 == 'yes' || question3 == 'y')
 {
    //console.log("correct answer");
    counter++;
    alert("correct answer");

 } else if(question3 == 'no' || question3 == 'n')
 {
    alert("wrong answer");
 } else {
     alert('yor answer not include yes or no ') ;
}

}

 function askUserAboutJavaSicript(){
 let question04 = prompt("javascript is not programming language?");
 let question4=question04.toLowerCase();
 if (question4 == 'yes' || question4 == 'y')
 {
    alert("wrong answer");

 } else if(question4 == 'no' || question4 == 'n')
 {
    //console.log("correct answer");
    counter++;
    alert("correct answer");
    
 } else {
    alert('yor answer not include yes or no ')
}
}

function askUserAboutInteractPage(){
 let question05 = prompt("we use javascript to make pages more interact with user?");
 let question5=question05.toLowerCase();
 if (question5 == 'yes' || question5 == 'y')
 {
     //console.log("correct answer");
     counter++;
     alert("correct answer");

 } else if(question5 == 'no' || question5 == 'n')
 {
     alert("wrong answer");
 } else {
    alert('yor answer not include yes or no ')
}
}

function guessingNumber(){
 let numberOfGuessing= 10;
for(let i =0 ; i<4 ;i++)
{ let guessingNumber = prompt('Enter number between 1 - 20 to  guess the  number that we have ? we will give u four chance to guess that number ');
    if (guessingNumber<=20 && guessingNumber>0)
    {
        if (guessingNumber == numberOfGuessing){
            counter++; alert('Great u got it ');
            console.log(counter);
            break;
           } 
         else if( Number(guessingNumber) >  numberOfGuessing)
       {
        alert('too high');
       } else if (Number(guessingNumber) <  numberOfGuessing)
       {
        alert('too low');
       
       } 
    
    } else {
         alert('The number out of the range');
    }

    if (i === 3)
    {
        alert(' you finshed your attembts the correct answer is ' + numberOfGuessing);
    }

}
}

function AskUserAboutCSSProprty(){
let cssDisplay = ['none','inline','block','inline-block']; let flag = false;
 for (let j = 0 ; j<=5 ;j++)
 {  
     
    let displayValue = prompt('CSS display Property has different vlaue just give me one of this value');
     for ( let i =0 ; i<cssDisplay.length ;i++)
       {
         if (cssDisplay[i] == displayValue)
          {  
           counter++;
           //console.log(counter);
           alert('correct answer');
           flag=true;
           break; 
          }
           
        }
  if (flag == true){
    break;
    }

 if(j === 5){
    alert('sorry you finshed your attembts');

    }
    
}
alert("this is All the possible answer : " + cssDisplay);
}

userName();
askUserAboutTheCss();
AskUserAbboutHTML();
AskUserAbboutHTMLStandFor();
askUserAboutJavaSicript();
askUserAboutInteractPage();
guessingNumber();
AskUserAboutCSSProprty();



alert("Total of your score : "+ counter +"/7"+ " Grate job" );






 
 





/*let qu = qu1.toLocaleLowerCase();

while( qu != 'yes' && qu != 'y')
{
    let qu = prompt('enter yes or no ');
}*/




/*let userName = prompt('pleas enter your name ');
while(!userName){
    userName = prompt('pleas enter your name ');
}

let qu1 = prompt('enter yes or no ');
let qu = qu1.toLocaleLowerCase();

let count =0;

qu = qu1.toLocaleLowerCase();
if(qu === 'yes' || qu === 'y'){
    count++;
    alert('Corrcrt');
} else 
{
    alert("wrong answer")
}

console.log(count);
*/








 

 

 




    



  




  
