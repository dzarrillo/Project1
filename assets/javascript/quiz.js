
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

    // https://media1.giphy.com/media/vDV9WHgNKReBW/giphy.gif

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

        arrPlanets[count] = answer;
        count += 1;
    });

    // var delayQuiz = setTimeout("do nothing", 5000);
    // var timer = setInterval(function(){
    //     populateQuiz();
    // }, 5000);

    $("#startmyquiz").on("click", function () {
        // console.log("Start quiz clicked")
        populateQuiz();
    });

    $("#btn-submit").on("click", function () {
        var msg = "";
        event.preventDefault();

        // check to see if radiobutton was selected
        if ($(".form-check-input").is(":checked")) {
            questionCount += 1;
            console.log("Count: " + questionCount);
            if (correctAnswer == guessedAnswer) {
                // alert("correct " + correctAnswer + "  Guessed: " + guessedAnswer);
                totalCorrect += 1;
                msg = "Correct, You rock!";
            } else {
                // alert("Wrong  " + correctAnswer + "  Guessed: " + guessedAnswer);
                totalWrong += 1;
                msg = "Nice try! The correct answer is " + correctAnswer;
            }

            $('#navigation ul li').css('display', 'inline-block');
            modal.css({ display: "block" });
            message.text(msg);

            if (questionCount < count) {

                populateQuiz();
            } else {
                // alert("Quiz completed show results: correct - " + totalCorrect + " wrong: " + totalWrong);
                // msg = "Quiz completed! "
                // msg += msg + "Correct: " + totalCorrect + " ";
                // msg += msg + "Wrong: " + totalWrong;

                // modal.css("display", "block");
                // message.text(msg);
            }
            // refresh buttons
            // $(".form-check-input").prop("checked", false ).checkboxradio("refresh");
            $(".form-check-input").prop("checked", false);

            if (questionCount == 8) {
                // Quiz over
                // alert("Quiz completed show results: correct - " + totalCorrect + " wrong: " + totalWrong);
                var score = getScore(totalCorrect);
                
                msg = "Quiz completed "
                // msg += "Your score " + score;
                msg += "Correct: " + totalCorrect + " ";
                msg += "Wrong: " + totalWrong;

                modal.css("display", "block");
                message.text(msg);
            }

        } else {
            msg = "Please select one of the planets before hitting submit!"

            modal.css("display", "block");
            message.text(msg);
        }

    });

    function getScore(totalCorrect){
        switch (totalCorrect) {
            case 9:
                score = "100%"
                break;
            case 8:
                score = "88%"
                break;
            case 7:
                score = "77%"
                break;
            case 6:
                score = "66%"
                break;
            case 5:
                score = "55%"
                break;
            case 4:
                score = "44%"
                break;
            case 3:
                score = "33%"
                break;
            case 2:
                score = "22%"
                break;
            case 1:
                score = "11%"
                break;
            case 0:
                score = "0%"
                break;
        }
        return score;
    }
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
        // for (var z = 0; z < arrPlanets.length; z++) {
        //     console.log("arrPlanets " + arrPlanets[z]);
        // }

        // Clear the array
        arrAnsw = [];

        // save room for the correct planet
        for (var j = 0; j < 3; j++) {
            arrAnsw[j] = arrPlanets[j];
        }

        if (arrAnsw.includes(correctAnswer, 0)) {
            num = arrPlanets.length - 1;
            arrAnsw.push(arrPlanets[num]);
        } else {
            arrAnsw.push(correctAnswer);
        }
        // shuffle the arrAnsw array - I don't want the answer to be in the same position for each question
        arrAnsw = shuffle(arrAnsw);

        // console.log("Coorect answer is " + correctAnswer);
        $("#option1").text(arrAnsw[0]);
        $("#option2").text(arrAnsw[1]);
        $("#option3").text(arrAnsw[2]);
        $("#option4").text(arrAnsw[3]);
        // questionCount += 1;
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