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
    room_name=localStorage.getItem("room_name");

    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
