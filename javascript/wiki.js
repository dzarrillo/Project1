$(document).ready(function () {

  // $("#btnInfo").on("click", function () {

    var querystring = window.location.search;
    var celestialAr = querystring.split("=");
    var searchTerm = celestialAr[1];
    console.log("Search value: " + searchTerm);
    // var value = "earth"
    // var value = "mars";
    // var value = "jupiter";
    // var value = "venus";
    // var value = "neptune";
    // var value = "uranus";
    // var value = "mercury_(planet)";
    if (searchTerm === "Mercury") {
      searchTerm = "mercury_(planet)";
    }

    $.ajax({
      type: "GET",
      url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + searchTerm + "&callback=?",
      contentType: "application/json; charset=utf-8",
      async: false,
      dataType: "json",
      success: function (data, textStatus, jqXHR) {
        var markup = data.parse.text["*"];
        var blurb = $('<div></div>').html(markup);
        // remove links as they will not work
        blurb.find('a').each(function () { $(this).replaceWith($(this).html()); });
        // remove any references
        blurb.find('sup').remove();
        // remove cite error
        blurb.find('.mw-ext-cite-error').remove();
        $('#article').html($(blurb).find('p'));
      },
      error: function (errorMessage) {
      }
    });

    //show video
    // Select the correct url video for planet
    var url = getCorrectURL(searchTerm);
    // set iframe src
    $('#video_frame').attr('src', url);

  // });

  function getCorrectURL(searchTerm) {
    console.log("Searchterm: " + searchTerm);
    switch (searchTerm) {
      case "Earth":
        url = "https://www.youtube.com/embed/JrGuomu9NGY";
        break;
      case "Mars":
        // url = "https://www.youtube.com/embed/cXLk879Glbk";
        url = "https://www.youtube.com/embed/D8pnmwOXhoY";
        break;
      case "Saturn":
        url = "https://www.youtube.com/embed/epZdZaEQhS0";
        break;
      case "Neptune":
        url = "https://www.youtube.com/embed/faKnto4Pb6c";
        break;
      case "Uranus":
        url = "https://www.youtube.com/embed/faKnto4Pb6c";
        break;
      case "Jupiter":
        url = "https://www.youtube.com/embed/NmHOj8VQvNE";
        break;
      case "mercury_(planet)":
        url = "https://www.youtube.com/embed/m3ZUhpisWeQ";
        break;
      case "Venus":
        url = "https://www.youtube.com/embed/yzqbN6z8ncc"
        break;
      case "Sun":
        url = "https://www.youtube.com/embed/2HoTK_Gqi2Q";
        break;
      default:
        url = "https://www.youtube.com/embed/I16J4voZ5lA";
    }

    return url;
  }


});