var Mercury_Facts =["Equatorial Diameterr</td>	<td>142,984 km ",
            "Polar Diameter</td>  <td>	133,709 km ",
            "Mass</td><td>	1.90 × 10^27 kg (318 Earths) ",
            "Moons</td><td>	67 (Io, Europa, Ganymede & Callisto) ",
            "Rings</td><td>	4 ",
            "Orbit Distance</td><td>	778,340,821 km (5.20 AU) ",
            "Orbit Period</td><td>	4,333 days (11.9 years) ",
            "Effective Temperature</td><td>	-148 °C ",
            "First Record</td><td>	7th or 8th century BC ",
            "Recorded By</td> <td>	Babylonian astronomers"]; 
        var Venus_Facts = ["Diameter:</td><td>	12,104 km",
            "Mass:</td><td>	4.87 x 10^24 kg (81.5% Earth)",
            "Moons:</td><td>	None",
            "Orbit Distance:</td><td>	108,209,475 km (0.73 AU)",
            "Orbit Period:</td><td>	225 days",
            "Surface Temperature:</td><td>	462 °",
            "First Record:</td><td>	17th century BC",
            "Recorded By:</td><td>	Babylonian astronomers"]    
        var Earth_Facts = ["Equatorial Diameter:</td><td>	12,756 km",
            "Polar Diameter:</td><td>	12,714 km",
            "Mass:</td><td>	5.97 x 10^24 kg",
            "Moons:</td><td>	1 (The Moon)",
            "Orbit Distance:</td><td>	149,598,262 km (1 AU)",
            "Orbit Period:</td><td>	365.24 days",
            "Surface Temperature:</td><td>	-88 to 58°C"]
        var Mars_Facts = ["Equatorial Diameter:</td><td>	6,792 k",
            "Polar Diameter:</td><td>	6,752 km",
            "Mass:</td><td>	6.42 x 10^23 kg (10.7% Earth)",
            "Moons:</td><td>	2 (Phobos & Deimos)",
            "Orbit Distance:</td><td>	227,943,824 km (1.52 AU)",
            "Orbit Period:</td><td>	687 days (1.9 years)",
            "Surface Temperature:</td><td>	-153 to 20 °C",
            "First Record:</td><td>	2nd millennium BC",
            "Recorded By:</td><td>	Egyptian astronomers"];
         var Jupiter_Facts = ["Equatorial Diameter:</td><td>	142,984 km",
            "Polar Diameter:</td><td>	133,709 km",
            "Mass:</td><td>	1.90 × 10^27 kg (318 Earths)",
            "Moons:</td><td>	67 (Io, Europa, Ganymede & Callisto)",
            "Rings:</td><td>	4",
            "Orbit Distance:</td><td>	778,340,821 km (5.20 AU)",
            "Orbit Period:</td><td>	4,333 days (11.9 years)",
            "Effective Temperature:</td><td>	-148 °C",
            "First Record:</td><td>	7th or 8th century BC",
            "Recorded By:</td><td>	Babylonian astronomers"];
        var Saturn_Facts = [ "Equatorial Diameter:</td><td>	120,536 km",
            "Polar Diameter:</td><td>	108,728 km",
            "Mass:</td><td>	5.68 × 10^26 kg (95 Earths)",
            "Moons:</td><td>	62 (Titan, Enceladus, Iapetus & Rhea)",
            "Rings:</td><td>	30+ (7 Groups)",
            "Orbit Distance:</td><td>	1,426,666,422 km (9.54 AU)",
            "Orbit Period:</td><td>	10,756 days (29.5 years)",
            "Effective Temperature:</td><td>	-178 °C",
            "First Record:</td><td>	8th century BC",
            "Recorded By:</td><td>	Assyrians"]
        var Uranus_Facts = ["Equatorial Diameter:</td><td>	51,118 km",
            "Polar Diameter:</td><td>	49,946 km",
            "Mass:</td><td>	8.68 × 10^25 kg (15 Earths)",
            "Moons:</td><td>	27 (Miranda, Titania, Ariel, Umbriel & Oberon)",
            "Rings:</td><td>	13",
            "Orbit Distance:</td><td>	2,870,658,186 km (19.19 AU)",
            "Orbit Period:</td><td>	30,687 days (84.0 years)",
            "Effective Temperature:</td><td>	-216 °C",
            "Discovery Date:</td><td>	March 13th 1781",
            "Discovered By:</td><td>	William Herschel"]
        var Neptune_Facts = ["Equatorial Diameter:</td><td>	49,528 km",
            "Polar Diameter:</td><td>	48,682 km",
            "Mass:</td><td>	1.02 × 10^26 kg (17 Earths)",
            "Moons:</td><td>	14 (Triton)",
            "Rings:</td><td>	5",
            "Orbit Distance:</td><td>	4,498,396,441 km (30.10 AU)",
            "Orbit Period:</td><td>	60,190 days (164.8 years)",
            "Effective Temperature:</td><td>	-214 °C",
            "Discovery Date:</td><td>	September 23rd 1846",
            "Discovered By:</td><td>	Urbain Le Verrier & Johann Galle"]
        var Sun_Facts =[ "Age:</td><td>	4.6 Billion Years",
            "Type:</td><td>	Yellow Dwarf (G2V)",
            "Diameter:</td><td>	1,392,684 km",
            "Equatorial Circumference:</td><td>	4,370,005.6 km",
            "Mass:</td><td>	1.99 × 10^30 kg (333,060 Earths)",
            "Surface Temperature:</td><td>	5,500 °C"]

   load_image("Mars");
   var planet_image = ""; 
   var header = "";   
   function load_image (planet) {
       var movieDiv =$("<div class='planet'>");
       if (planet === "Mercury") 
          planet_image = "<img src=mercury.jpg";                   
      else if (planet === "Venus") 
          planet_image = "<img src=Venus.jpg" 
      else if (planet === "Mars") 
          planet_image = "<img src=Mars.jpg" 
      else if ( planet === "Earth")
           planet_image = "<img src=earth.jpg"
      else if (planet === "Jupiter")
           planet_image = "<img src=Jupiter.jpg"
     else if (planet === "Saturn")
           planet_image = "<img src=Saturn.jpg"
      else if (planet === "Uranus")
           planet_image = "<img src=Uranus.jpg"
      else if (planet === "Neptune")
           planet_image = "<img src=neptune.jpg"
      else if (planet === "Sun")
           planet_image = "<img src=Sun.jpg"                          
        console.log(planet_image);
        $("#header").append("<h1>" + planet + "</h1>");
        var planet_image_display = planet_image + " height='342' width='342'>"
         $("#planet_view").append(planet_image_display);    
         $("#planet_header").text(planet + " Planet Profile");         
        planet_text(planet);
        // $("#planet_view").append("<img id='theImg' src='Jupiter.jpg' />");    
   }    
   function planet_text(Planet){ 
    if (Planet === "Mercury") {   
    for (i=0;i<Mercury_Facts.length;i++) {
            $("#planet-table").append("<tr><td>" + Mercury_Facts[i] + "</tr><td>");
       }}
    if (Planet === "Venus") {         
    for (i=0;i<Venus_Facts.length;i++) {
            $("#planet-table").append("<tr><td>" + Venus_Facts[i] + "</tr><td>");
       }}
       if (Planet === "Earth") {         
    for (i=0;i<Earth_Facts.length;i++) {
            $("#planet-table").append("<tr><td>" + Earth_Facts[i] + "</tr><td>");
       }}
       if (Planet === "Mars") {         
    for (i=0;i<Mars_Facts.length;i++) {
            $("#planet-table").append("<tr><td>" + Mars_Facts[i] + "</tr><td>");
       }}
       if (Planet === "Jupiter"){         
    for (i=0;i<Jupiter_Facts.length;i++) {
            $("#planet-table").append("<tr><td>" + Jupiter_Facts[i] + "</tr><td>");
        }}         
       if (Planet === "Saturn") {         
    for (i=0;i<Saturn_Facts.length;i++) {
            $("#planet-table").append("<tr><td>" + Saturn_Facts[i] + "</tr><td>");
       }}
       if (Planet === "Uranus") {         
    for (i=0;i<Uranus_Facts.length;i++) {
            $("#planet-table").append("<tr><td>" + Uranus_Facts[i] + "</tr><td>");
       }}
       if (Planet === "Neptune") { 
       for (i=0;i<Neptune_Facts.length;i++) {
            $("#planet-table").append("<tr><td>" + Neptune_Facts[i] + "</tr><td>");
       }}  
       if (Planet === "Sun") {
        for (i=0;i<Sun_Facts.length;i++) {
            $("#planet-table").append("<tr><td>" + Sun_Facts[i] + "</tr><td>");
       }}  
       
      
   }