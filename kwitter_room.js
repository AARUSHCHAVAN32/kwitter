user_name = localStorage.getItem("username")
document.getElementById("user_name").innerHTML = "welcome "+ user_name
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
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room names are - " + Room_names)
      row = "<div class='room_name' id = "+Room_names + " onclick = 'redirect(this.id)'> #"+Room_names + " </div> " ; 
      document.getElementById("output").innerHTML += row
      //End code 
      });});}
getData();

function addroom()
{
      room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      }) ; 
      localStorage.setItem("my room name is", room_name)
      window.location = "kwitter_page.html"
}
function redirect(name)
{
      console.log(name)
      localStorage.setItem("theroomihaveclickedis",name)
      window.location = "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("my room name is")
      window.location = "index.html"
}