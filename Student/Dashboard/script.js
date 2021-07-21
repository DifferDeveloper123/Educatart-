let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".fa-search");
var greeting;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyALL8PKkowKydLAmYGpArb-S1G5t6gafro",
  authDomain: "educatart.firebaseapp.com",
  databaseURL: "https://educatart-default-rtdb.firebaseio.com",
  projectId: "educatart",
  storageBucket: "educatart.appspot.com",
  messagingSenderId: "203907937510",
  appId: "1:203907937510:web:20c9a8f9d853836a86f727"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
  closeBtn.classList.replace("fa-bars","fa-times");
 }else {
  closeBtn.classList.replace("fa-times", "fa-bars");
 }
}

function load(){

    if(window.localStorage.getItem('type') == 'student'){
    }else if(window.localStorage.getItem('type') == 'teacher'){
        window.open('/Teacher/Dashboard/', '_self');
    }else{
        window.open('/', '_self');
    }

  document.getElementById('profilePicture').src = window.localStorage.getItem('profile');
  document.getElementById('username_heading').textContent = window.localStorage.getItem('username');
  document.getElementById('email_heading').textContent = window.localStorage.getItem('email');

  var hour = new Date().getHours();

  if(hour < 12){
    greeting = "Good Morning";
  }else if(hour < 18){
    greeting = "Good afternoon"
  }else{
    greeting = "Good evening"
  }

  document.getElementById('greeting').textContent = greeting + " " + window.localStorage.getItem('username');

setTimeout(()=>{
  document.getElementById('preloader').style.display = 'none';
  document.getElementById('loadScreen').style.display = 'none';
}, Math.random(1000) + 1000);
}

function signOut(){
  database.ref('Users' + '/' + window.localStorage.getItem('access token')).remove();

  window.localStorage.setItem('username', "");
  window.localStorage.setItem('email', "");
  window.localStorage.setItem('school name', "");
  window.localStorage.setItem('access token', "");
  window.localStorage.setItem('profile', "");
  window.localStorage.setItem('type', "");
}