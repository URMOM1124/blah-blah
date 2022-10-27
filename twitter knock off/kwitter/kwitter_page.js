// HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE E
var firebaseConfig = {
      apiKey: "AIzaSyA6JfCcO2AO3E17cpv6RxFbXpuGUL1XVOc",
      authDomain: "twitter-knock-off.firebaseapp.com",
      databaseURL: "https://twitter-knock-off-default-rtdb.firebaseio.com",
      projectId: "twitter-knock-off",
      appId: "1:422495481200:web:b59554e0a03b4ef27df3b5"
    };
    
   
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
            like:0
      });

      document.getElementById("msg").value = "";

}