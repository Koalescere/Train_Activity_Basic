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

var trainName = "";
var destination = "";
var firsttrainTime = "";
var frequency = "";


//Button for adding trains to schedule
$("#add-frequency-btn").on("click", function () {
    event.preventDefault
    trainName = $("#train-name-input").val().trim();
    destination = $("#destination-input").val().trim();
    firsttrainTime = $("#trainTime-input").val().trim();
    frequency = $("#frequency").val().trim();

    //to avoid over writing the database change set to push
    firebase.database().ref().push({
        trainName: trainName,
        destination: destination,
        firsttrainTime: firsttrainTime,
        frequency: frequency,
    })   
        
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#trainTime-input").val("");
    $("#frequency").val("");        

})

firebase.database().ref().on("child_added", function (childSnapshot) {
  console.log(childSnapshot.val())
  
  var tname = childSnapshot.val().trainName;
  var dest = childSnapshot.val().destination;
  var ttime = childSnapshot.val().firsttrainTime;
  var freq = childSnapshot.val().frequency;

  // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(tname),
    $("<td>").text(dest),
    $("<td>").text(ttime),
    $("<td>").text(freq),
  );

  // Append the new row to the table
  $("#trainSchedule-table> tbody").append(newRow);
});

//$("restart-button).on("cick", fucntion(){
    // firebase.database().ref().set({
