
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCs-mNuVsCjm6Kt6FMeMAGg3DZ-AyFmxDw",
      authDomain: "kwitter-app-90ea0.firebaseapp.com",
      databaseURL: "https://kwitter-app-90ea0-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-90ea0",
      storageBucket: "kwitter-app-90ea0.appspot.com",
      messagingSenderId: "190790262186",
      appId: "1:190790262186:web:d3eedae5338cf51df31fd3";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       firebase.initializeApp(firebaseConfig);

    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome"+ user_name +"!";

    function add_room(){
      Room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose: "adding roomname"
      });
      localStorage.setItem("Room_name",Room_name);
      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomnames-"+ Room_names);
      row = "<div class='room_name' id="+ Room_names+ " onclick='redirecttoroomname(this.id)' > #"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();

function redirecttoroomname(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location=("index.html");
}
      });});}
getData();
