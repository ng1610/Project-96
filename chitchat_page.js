var firebaseConfig = {
    apiKey: "AIzaSyBxcf9BQDVtgLXNKDSv_VKvOzHd5-hqTbw",
    authDomain: "chitchat-25e2b.firebaseapp.com",
    databaseURL: "https://chitchat-25e2b-default-rtdb.firebaseio.com",
    projectId: "chitchat-25e2b",
    storageBucket: "chitchat-25e2b.appspot.com",
    messagingSenderId: "887551067944",
    appId: "1:887551067944:web:7cf83d9285360ce8aab21d",
    measurementId: "G-X1G53MER9Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user name");
  room_name=localStorage.getItem("room_name");

  function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          like:0,
          user_name: user_name,
          message:msg
      });
      document.getElementById("msg").value="";
  }
  function LogOut(){
    localStorage.removeItem("user name");
    localStorage.removeItem("room_name");
    window.location="chitchat.html";
  }