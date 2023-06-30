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
     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome " + user_name;

     function addRoom()
     {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
}