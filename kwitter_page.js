const firebaseConfig = {
      apiKey: "AIzaSyAYis9HSyN_uguJiOP3BtOkk5hCdtjqgGI",
      authDomain: "twitter-twitter-22-may.firebaseapp.com",
      databaseURL: "https://twitter-twitter-22-may-default-rtdb.firebaseio.com",
      projectId: "twitter-twitter-22-may",
      storageBucket: "twitter-twitter-22-may.appspot.com",
      messagingSenderId: "757788417222",
      appId: "1:757788417222:web:d978965c71d36831b80bc7",
      measurementId: "G-R6XT508Q35"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username")
    room_name=localStorage.getItem("my room name is")
    function send(){
      msg = document.getElementById("message").value ;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            likes:0
      }) ; 
      document.getElementById("message").value=""
    }
    function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("my room name is")
      window.location = "index.html"
     }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data ['likes']
name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button  = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById('output').innerHTML += row;
//End code
      } });  }); }
getData();
function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            likes : updated_likes
      });
}

