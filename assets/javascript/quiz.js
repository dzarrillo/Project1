
$(document).ready(function () {
    // array of myquiz objects - questions/answers
    var arrMyQuiz = [];
    var count = 0;
    // an array with 3 radom planets & correct planet
    var arrAnsw = [];
    // Array of planets to randomize for the answer array
    var arrPlanets = [];
    var correctAnswer = "";
    var guessedAnswer = "";
    var questionCount = 0;
    var totalCorrect = 0;
    var totalWrong = 0;
    var modal = $("#myModal");
    var message = $("#message");

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAqI-ILfwuVugMapd2Q_2CyHTKxPeY3Uwo",
        authDomain: "mymusic-f24cb.firebaseapp.com",
        databaseURL: "https://mymusic-f24cb.firebaseio.com",
        projectId: "mymusic-f24cb",
        storageBucket: "mymusic-f24cb.appspot.com",
        messagingSenderId: "745921920653"
    };
    firebase.initializeApp(config);

    //Get the data
    var databaseReference = firebase.database().ref("quiz/");

    databaseReference.on("child_added", function (snapshot) {
        var question = snapshot.val().question;
        var answer = snapshot.val().answer;
        var myQuiz = { question: "", answer: "" };

        // console.log("question " + question);
        // console.log("Answer: " + answer);

        myQuiz.question = question;
        myQuiz.answer = answer;
        arrMyQuiz[count] = myQuiz;
        // use this to shuffle answer to get random planets
        arrPlanets[count] = answer;
        count += 1;
    });

    $("#startmyquiz").on("click", function () {
        // console.log("Start quiz clicked")
        populateQuiz();
    });

    $("#btn-submit").on("click", function () {
        var msg = "";
        event.preventDefault();

        if (correctAnswer == guessedAnswer) {
            // alert("correct " + correctAnswer + "  Guessed: " + guessedAnswer);
            totalCorrect += 1;
            msg = "You rock!";
        } else {
            // alert("Wrong  " + correctAnswer + "  Guessed: " + guessedAnswer);
            totalWrong += 1;
            msg = "Nice try! The correct answer is " + correctAnswer;
        }

        $('#navigation ul li').css('display', 'inline-block');
        modal.css({ display: "block" });
        message.text(msg);

        if (questionCount < count) {
            questionCount += 1;
            populateQuiz();
        } else {
            // alert("Quiz completed show results: correct - " + totalCorrect + " wrong: " + totalWrong);
            msg = "Quiz completed \r \n"
            msg += msg + "Correct: " + totalCorrect + " ";
            msg += msg + "Wrong: " + totalWrong;

            modal.css("display", "block");
            message.text(msg);
        }
        // refresh buttons
        // $(".form-check-input").prop("checked", false ).checkboxradio("refresh");
        $(".form-check-input").prop("checked", false);
    });

    // When the user clicks on <span> (x), close the modal
    $("span").on("click", function () {
        modal.css("display", "none");
    })

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.css("display", "block");
        }
    }

    $(".form-check-input").on("click", function () {
        guessedAnswer = $("form input[type='radio']:checked").parent().text().trim();
        // alert("checked " + guessedAnswer); 
    })

    
    // Populate form
    function populateQuiz() {

        $("#form-Question").text(arrMyQuiz[questionCount].question);
        // this is the correct answer
        correctAnswer = arrMyQuiz[questionCount].answer

        // shuffle
        arrPlanets = shuffle(arrPlanets);  //arrPlanets[count]
        for (var z = 0; z < arrPlanets.length; z++) {
            console.log("arrPlanets " + arrPlanets[z]);
        }

        // Clear the array
        arrAnsw = [];

        // save room for the correct planet
        for (var j = 0; j < 3; j++) {
            if (arrPlanets[j].includes(correctAnswer, 0)) {
                var num = j + 1;
                arrAnsw[j] = arrPlanets[num];
            } else {
                arrAnsw[j] = arrPlanets[j];
            }
        }

        arrAnsw.push(correctAnswer);
        // shuffle the arrAnsw array - I don't want the answer to be in the same position for each question
        arrAnsw = shuffle(arrAnsw);

        console.log("Coorect answer is " + correctAnswer);
        $("#option1").text(arrAnsw[0]);
        $("#option2").text(arrAnsw[1]);
        $("#option3").text(arrAnsw[2]);
        $("#option4").text(arrAnsw[3]);

    }

    function shuffle(array) {
        var currentIndex = array.length
            , temporaryValue
            , randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
});