 import firebase from "firebase";

//initialize your database
var firebaseConfig = {
    apiKey: "AIzaSyDSOmuEf8NzBSWy5em02CRBQ7mzjnjfH5U",
    authDomain: "project-60-74af5.firebaseapp.com",
    projectId: "project-60-74af5",
    storageBucket: "project-60-74af5.appspot.com",
    messagingSenderId: "4738277319",
    appId: "1:4738277319:web:0a1eef0ca7fba1ce1043e2"
  };
  if (!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
  }
  export default firebase.database()
 

  