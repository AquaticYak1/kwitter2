var firebaseConfig = {
      apiKey: "AIzaSyATDPiS8iHbBaWVlsD9AdRiBZG2JlcxjgQ",
      authDomain: "kwitter-8828d.firebaseapp.com",
      databaseURL: "https://kwitter-8828d-default-rtdb.firebaseio.com",
      projectId: "kwitter-8828d",
      storageBucket: "kwitter-8828d.appspot.com",
      messagingSenderId: "126172029499",
      appId: "1:126172029499:web:1d24d9894dfe83cbc6321e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name;
    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row ="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>" +Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}