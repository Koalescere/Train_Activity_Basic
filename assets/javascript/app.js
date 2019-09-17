//alert("we're linked");
var firebaseConfig = {
    apiKey: "AIzaSyATzpU5Xoky0sTZYRF7xDAbBRMqg4zUbPw",
    authDomain: "train-schedule-32183.firebaseapp.com",
    databaseURL: "https://train-schedule-32183.firebaseio.com",
    projectId: "train-schedule-32183",
    storageBucket: "",
    messagingSenderId: "87019477969",
    appId: "1:87019477969:web:64105cd8554b62414cdef0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.database().ref().on("value", function(snapshot){
    console.log(snapshot.val())
})
