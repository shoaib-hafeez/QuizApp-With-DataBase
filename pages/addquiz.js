 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
 import { getDatabase,set,ref,push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAr_-hAeHsVcZeGNSPwppugg4SgS0jR93Q",
   authDomain: "quiz-app-db-73f31.firebaseapp.com",
   projectId: "quiz-app-db-73f31",
   storageBucket: "quiz-app-db-73f31.appspot.com",
   messagingSenderId: "797613198679",
   appId: "1:797613198679:web:27adc1fa5a26b5554b0212",
   measurementId: "G-C73G7HPHP9"
 };

 // Initialize Firebase
 
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db = getDatabase()

 var question = document.getElementById('question')
 var option = document.getElementById('option')
 var optionsparent = document.getElementById('optionsParent')
 var correctAnswerElem = document.getElementById('correctAns')

 var options =[]
 var correctAnswer 


 function renderOptions(){
    optionsparent.innerHTML = ' '
    for(var i = 0; i< options.length; i++){
        optionsparent.innerHTML += `<li onclick="setCorrectAnswer('${options[i]}')" class='p-2 bg-light fs-5 rounded shadow' >${options[i]}</li>`
    }
 }

 window.addOption = function(){
  options.push(option.value)
  console.log(options)
  renderOptions()
 }



 window.setCorrectAnswer = function(a){
  correctAnswer = a
  correctAnswerElem.innerHTML = correctAnswer
 }



 window.submitQuestion = function(){
var obj =  {
  question:question.value,
  options:options,
  correctAnswer:correctAnswer
}
console.log(obj)
obj.id = push(ref(db,'questions/')).key
const reference = ref(db, `questions/ ${obj.id}`)
set(reference,obj)
console.log(obj)
 }