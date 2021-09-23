var firebaseConfig = {
    apiKey: "AIzaSyA57BeZAqaHDDII376qI1X1ntCaVim9jG4",
    authDomain: "project-95-96241.firebaseapp.com",
    databaseURL: "https://project-95-96241-default-rtdb.firebaseio.com",
    projectId: "project-95-96241",
    storageBucket: "project-95-96241.appspot.com",
    messagingSenderId: "391783795291",
    appId: "1:391783795291:web:efc6b2c745997d49768d7e"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome "+ username+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
   console.log("room_name-"+Room_names);
   row = "<div class='room_name' id = "+Room_names+"onclick='redirect_to_roomname(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;
 });});}
getData();

function addroom() {
    roomname =  document.getElementById("room_name").value;
    firebase.database().ref("/").child(roomname).update ({
          purpose: "addingroomname"
    })
    localStorage.setItem("room_name",roomname);
    window.location = "kwitter_page.html";
}


function redirect_to_roomname(name) 
{
  console.log(name);
  localStorage.setItem("room_name",roomname);
  window.location = "kwitter_page.html";
}
getData();

function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

