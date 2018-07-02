// Initialize Firebase
var config = {
    apiKey: "AIzaSyBxFNcp9G9MXC-DWgci_hht5q16xigDPG0",
    authDomain: "solar-system-fcdd6.firebaseapp.com",
    databaseURL: "https://solar-system-fcdd6.firebaseio.com",
    projectId: "solar-system-fcdd6",
    storageBucket: "solar-system-fcdd6.appspot.com",
    messagingSenderId: "973836801910"
};
firebase.initializeApp(config);

//   local reference to the firebase
var database = firebase.database();


// Function to grab the planets from db and display them on the page
database.ref().on("child_added", function (cSnap) {

    // Log everything that's coming out of snapshot
    // console.log(cSnap.val());

    // grabbing the planets row, where we will insert the planets from db
    var pRow = $("#planets");

    // creating a new column for the planet and putting the column into the row
    var pCol = $("<div>");
    pCol.attr("class", "col-md-3");
    pRow.append(pCol);

    // creating the planet card that will go in the column and put it in column
    var pCard = $("<div>");
    pCard.attr("class", "card");
    pCol.append(pCard);

    // creating image div
    var cImg = $("<img>").attr({
        class: "card-img-top",
        src: cSnap.val().photo,
        alt: cSnap.val().name,
        id: "clickableImg"
    });

    // creating card body div
    var cBody = $("<div>");
    cBody.attr("class", "card-body");

    // creating title for card body
    var cTitle = $("<h5>");
    cTitle.attr("class", "card-title");
    cTitle.text(cSnap.val().name);

    // creating card button
    // var cButton = $('<a>');
    // cButton.attr("href", cSnap.val().button);
    // cButton.attr("class", "btn btn-primary");
    // cButton.text("X");

    // insert title/button into card body
    // cBody.append(cTitle, cButton);
    cBody.append(cTitle);

    // insert image and card body into planet card
    pCard.append(cImg, cBody);

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

// On click of a planet photo, go to new planet page
$(document).on("click", "#clickableImg", function () {
    var passName = $(this).attr("alt");
    window.location.href = "planet.html?src="+passName;
});