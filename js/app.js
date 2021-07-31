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
function guessingGameGuestions(){
let questionsArray = ['Do you think my  age its more than 20 years old  ?','Do you think i like mansaf ?','Do you think I like football sports','Do you think I live in amman ?','Do you think I like programming ?'];
for (let i =0;i<questionsArray.length;i++)
{
 let question = prompt(questionsArray[i]);
 let question1=question.toLowerCase();

 // this is a wile loop to make the user answer just yes or no
 while(question1 !== 'yes'&& question1 !== 'y'&& question1 !== 'no'&& question1 !== 'n')
 {
    question = prompt(questionsArray[i]);
     question1=question.toLowerCase();
  }
 
  if (questionsArray.indexOf('Do you think i like mansaf ?') == i || questionsArray.indexOf('Do you think I live in amman ?') == i)
   {
    if (question1 == 'yes' || question1 == 'y')
    {
       alert("wrong answer");
   
    } else if(question1 == 'no' || question1 == 'n')
    {
       
       counter++;
       alert("correct answer");
       
    } else {
       alert('yor answer not include yes or no ')
    }

   } else {
    if (question1 =='yes' || question1 =='y')
    {
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
function TotalOfScore(){
    alert("Total of your score : "+ counter +"/7"+ " Grate job" );
}

userName();
guessingGameGuestions();
guessingNumber();
AskUserAboutCSSProprty();
TotalOfScore();















 

 

 




    



  




  
