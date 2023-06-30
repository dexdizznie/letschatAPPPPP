room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

var firebaseConfig = {
      apiKey: "AIzaSyBqHGfWSWaZG54B9VX_C78oFsBCklkFQ2c",
      authDomain: "kwitter-eb75a.firebaseapp.com",
      databaseURL: "https://kwitter-eb75a-default-rtdb.firebaseio.com",
      projectId: "kwitter-eb75a",
      storageBucket: "kwitter-eb75a.appspot.com",
      messagingSenderId: "660411166901",
      appId: "1:660411166901:web:0150a8a836b0065cee0efc"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()

{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            Like:0
      });

      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
}