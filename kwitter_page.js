var firebaseConfig = {
  apiKey: "AIzaSyAe8HihNoCX6tWuSjQcUuRSBd2r6p8HgjQ",
  authDomain: "lets-chat-web-app-part-2.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-part-2-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-part-2",
  storageBucket: "lets-chat-web-app-part-2.appspot.com",
  messagingSenderId: "32820848734",
  appId: "1:32820848734:web:1fff3a4861cffac3edaccf"
  };
  

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;


    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    name_with_tag = "<h4>"+name+"</h4>";
    message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
    row = name_with_tag + message_with_tag;
    document.getElementById("output").innerHTML +=  row;
 } });  }); }
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push ({
          name: username,
          message:msg,
          
});

}
function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}
