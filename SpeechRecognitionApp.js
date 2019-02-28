/*
- While going through these challenges, remember that 3rd party APIs like the SpeechRecognition API are all different. You are not required to memorize all the functionality. Rather, take this time to practice your ability to reference documentation and debugging skills.
documentation to review:
- https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition#Browser_compatibility

CHALLENGE 1: SETTING UP FOR SPEECH RECOGNITION
• Let’s create and save an instance of or "SpeechRecognition" object
• log that object to the console. It should look something like this: 
"SpeechRecognition {grammars: SpeechGrammarList, lang: "", continuous: false, interimResults: false, maxAlternatives: 1, …}"
• explore around and see what kinds of properties and methods exist on this object

CHALLENGE 2: SETTING UP AN EVENT LISTNER
• Configure your code so that when your mic is clicked we log to the console "the mic was clicked"
• Now that we know our mic is clickable let’s set our code up so that when the mic is clicked we start recording sound using our SpeechRecognition object. (documentation... documentation... oh yea, did I mention DOCUMENTATION!)

CHALLENGE 3: ACCESSING OUR SPEECH EVENT
• Once our SpeechRecognition object has finished recording sound we want to log that text to our console. How do we do that?🤔 I bet the documentation will help us.🤓

CHALLENGE 4: SET THE BACKGROUND COLOR
• Now that we have access to the text that is recorded from our SpeechRecognition API, let’s do something fun with it!
• Using JS set the background color of our body to the value that we speak into our mic 🎙.
  
*/

//access the SpeechRecognition API on Chrome and Firefox (DONT CHANGE THIS CODE)
//This is not the instance of our Speech Recognition object!
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//code goes below this line.

var recognition = new SpeechRecognition();
console.log(recognition);

/* the mic has become an object */
const mic= document.querySelector('#mic');


mic.addEventListener ('click', ()=> {
  recognition.start(); //starting the recognition upon click
  console.log ("you are now being listened to, click again to stop the mic");
  })

/*the button as an object*/
const square= document.querySelector('#button');

sqaure.abort ('click', ()=> {
  recognition.stop();
  console.log('you are not being listened to anymore');
})

