
$(document).ready(function () {

    // document.querySelector('#button').onclick = function () {

    //     fetch('/api/speech-to-text/token')
    //     .then(function(response) {
    //         return response.text();
    //     }).then(function (token) {

    //       var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
    //           token: token,
    //           outputElement: '#output' // CSS selector or DOM Element

    //       });

    //       stream.on('error', function(err) {
    //           console.log(err);
    //       });

    //       document.querySelector('#stop').onclick = function() {
    //         stream.stop();
    //       };

    //     }).catch(function(error) {
    //         console.log(error);
    //     });
    //     console.log(error);

    //   };



    //   $("#button").on("click", function(){
    //       console.log("Button clicked!");

    //     fetch('/api/speech-to-text/token')
    //     .then(function(response) {
    //         return response.text();
    //     }).then(function (token) {

    //       var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
    //           token: token,
    //           outputElement: '#output' // CSS selector or DOM Element

    //       });

    //       stream.on('error', function(err) {
    //           console.log(err);
    //       });

    //       document.querySelector('#stop').onclick = function() {
    //         stream.stop();
    //       };

    //     }).catch(function(error) {
    //         console.log(error);
    //     });


    //   });



    $("#button").on("click", function () {
        //   console.log("Button clicked!");



        // $.ajax({
        //     type: "GET",
        //     url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix",
        //     contentType: "application/json; charset=utf-8",
        //     async: false,
        //     dataType: "json",
        //     success: function (data, textStatus, jqXHR) {
        //         console.log(data);
        //     },
        //     error: function (errorMessage) {
        //     }
        // });



        $.ajax({
            //https://en.wikipedia.org/w/api.php?action=query&titles=earth&prop=revisions&rvprop=content&format=json&formatversion=2
            // url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + "earth" + "&prop=info&inprop=url&utf8=&format=json",
             url: "https://en.wikipedia.org/w/api.php?action=query&titles=earth&prop=revisions&rvprop=content&format=json&formatversion=2",
            dataType: "jsonp",
            success: function (response) {
                console.log(response.query.pages[0].revisions[1]);
                // if (response.query.searchinfo.totalhits === 0) {
                //     //    showError(keyword);
                //     console.log(keyword);
                // }
                // else {
                //     //    showResults(response);
                //     var snip = response.query.search[0].snippet;
                //     console.log("snippet " + response); //response.query.search[0].snippet);
                //     // $("p").text(response.query.search[0].snippet);
                //     // $("p").html( response.query.search[0].snippet);
                //     // $("p").html( response.query.search[0].snippet);
                // }
            },
            error: function () {
                alert("Error retrieving search results, please refresh the page");
            }

        });
    });

});


