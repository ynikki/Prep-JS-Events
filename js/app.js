


  /*1.  Fill in the correct id to target the paragraph tag*/
  function fontSize(){
    document.getElementById("exercise1").style.fontSize = "200%";
  }

 /* 2. change the font color to red*/
  function colorMeBadd(){
    document.getElementById("exercise2").style.color="#FF0000";
  }

/*3. fill in the spaces to make this function operate:*/
  function showAnswer(){
    document.getElementById("answer").innerHTML = "C (da sea get it?) arrrr!";
  }

  /*4.  Create a button that will display the message "My name is Lee, Brrruuuce Lee!" in a new paragraph element after the button is clicked.*/

 function kungfu(){
  document.getElementById("beWater").innerHTML="My name is Lee, Brrruuuce Lee!";
 }

//Event Listeners
//Please write your code inside the window.onload function for exerices 5 onward...

window.onload = function (){

document.getElementById("Benjamin").addEventListener('click', sayQuote);

function sayQuote(){
  document.getElementById("Benjamin").innerHTML = "Our lives are defined by opportunities; even the ones we miss.";
}


//6.  Generate a random quote from clicking on a button
var quotes = ["It's a funny thing about comin' home. Looks the same, smells the same, feels the same. You'll realize what's changed is you.", "Momma? Momma? Some days, I feel different than the day before.", "Some people, were born to sit by a river. Some get struck by lightning. Some have an ear for music. Some are artists. Some swim. Some know buttons. Some know Shakespeare. Some are mothers. And some people, dance."];

  document.getElementById("change").addEventListener('click', sayQuotes);
                                                   
  function sayQuotes(){
    var getQuotes = quotes[Math.floor(Math.random()*quotes.length)];
    document.getElementById("change").innerHTML = getQuotes;
  }

/*7. Create your own event listener*/

var randomWords = ["Bird","Pizza","Butterfly","Natto","Ok"];
  
document.getElementById("randomness").addEventListener('click',sayRandom);

function sayRandom(){
  var getRandom = randomWords[Math.floor(Math.random()*randomWords.length)];
  document.getElementById("randomness").innerHTML = getRandom;
}


};




