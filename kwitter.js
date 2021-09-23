var firebaseConfig = {
    apiKey: "AIzaSyDBXSBzHaN4XpCmSEAZOQWAtAfb5zTmUSA",
    authDomain: "lets-chat-web-app-3b478.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-3b478-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-3b478",
    storageBucket: "lets-chat-web-app-3b478.appspot.com",
    messagingSenderId: "285899789938",
    appId: "1:285899789938:web:1b3be730236ca9090b94eb"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 

function adduser()  
{
    username =  document.getElementById("username").value; 
   window.localStorage.setItem("username",username);
   window.location = "kwitter_room.html";


}