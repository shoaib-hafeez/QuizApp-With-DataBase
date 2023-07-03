 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
 import { getDatabase,ref ,onChildAdded } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
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
 
 function getDataFormDatabase(){

  const reference = ref(db, 'question/')
  onChildAdded(reference,function(data){
    console.log(data.val())
    questions.push(data.val())
    renderQuestion()
  })
 }
getDataFormDatabase()




var questions = []

var currentQuestion = document.getElementById("currentQuestion");
var totalQuestion = document.getElementById("totalQuestion");
var question = document.getElementById("question");
var answerParent = document.getElementById("answerParent");

var indexNum = 0;
var score = 0

window.checkQuestion = function (a,b){
    
  if(a == b){
      score++
      console.log(score)
      
  }
  nextQuestion()
}
window. nextQuestion= function(){
  indexNum ++
  renderQuestion()
}



function renderQuestion() {
  currentQuestion.innerHTML = indexNum + 1;
  totalQuestion.innerHTML = questions.length;
  
  var obj = questions[indexNum];
  

  question.innerHTML = obj.question;
  answerParent.innerHTML =" "
  for (var i = 0; i < obj.options.length; i++) {
    answerParent.innerHTML += ` <div class="col-md-4">
    <div class="py-2">
        <button onclick="checkQuestion('${obj.options[i]}','${obj.correctAnswer}')" class="btn btn-info fs-4 rounded-pill w-100">
        ${obj.options[i]}
        </button>
        </div>
        </div>`;
      }
    }
    renderQuestion();
    
    
   
    
    
    