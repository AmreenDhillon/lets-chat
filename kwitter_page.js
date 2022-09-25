const firebaseConfig = {
    apiKey: "AIzaSyDwy94B6QcbpiMRmr78ACznY1qWbKo2L2g",
    authDomain: "let-chat-web-app-1a976.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-1a976-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-1a976",
    storageBucket: "let-chat-web-app-1a976.appspot.com",
    messagingSenderId: "937507602614",
    appId: "1:937507602614:web:6d6eec8c61f8486b106617"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);



function  send(){
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0

    });
    document.getElementById("msg").value = "";
}
