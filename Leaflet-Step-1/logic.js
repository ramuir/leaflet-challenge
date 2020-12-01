var myMap = L.map("mapid", {
    center: [39.52, -98.67],
    zoom: 2
  });
  
  // Adding a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
 L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
  }).addTo(myMap);


  var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson";

  d3.json(url, function(response){

      function colorPick(n){
            var color = "";
            if (n < 10) {
              color = "#7a0177";
            }
            else if (n < 30) {
              color = "#BD0026";
            }
            else if (n < 50) {
              color = "#E31A1C";
            }
            else if (n < 70) {
              color = "#FC4E2A";
            }
            else if (n < 90){
                color = "#FD8D3C"
            }
            else {
              color = "#FEB24C"
            }
            return color;
        }

        function radius(n){
            if (n === 0){
            return 1;
        }
        return 10**n/30000 ;
    }


        function styleChoice(feature){
            // console.log(feature.properties.mag);
    return {
        radius: radius(feature.properties.mag),
        fillColor: colorPick(feature.geometry.coordinates[2]),
        color:  colorPick(feature.geometry.coordinates[2]),
        weight: 0.5,
        opacity: 1,
        fillOpacity: 0.5,
        stroke: 1,
      
    }
}

    L.geoJSON(response, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },
        style:styleChoice,
        onEachFeature : function(feature,layer){
          layer.bindPopup("<h1>" + feature.properties.place + "</h1>" + "<hr> <h3>Magnitude: " + feature.properties.mag + "</h3>");//.addTo(myMap);
        }
      
    }).addTo(myMap);

    function getColor(dep){
      return dep >5 ? "#7a0177":
      dep >4 ? "#BD0026":
      dep >3 ?"#E31A1C":
      dep >2 ?"#FC4E2A":
      dep >1 ?"#FD8D3C":
      dep >0 ?"#FEB24C":
      "#FFFFFF"
    }

    var legend = L.control({
      position: 'bottomright'});

    legend.onAdd = function () {

    var div = L.DomUtil.create('div', 'info legend');
    // var labels = ['<strong>Depth By Color</strong>'];
    var categories = [-10,10,30,50,70,90];
    var colors = ["#7a0177","#BD0026","#E31A1C","#FC4E2A","#FD8D3C","#FEB24C"];

    for (var i = 0; i < categories.length; i++) {
//console.log(colorPick(categories))
            div.innerHTML += '<i style="background:' +  colors[i] + '"></i>' 
            + categories[i] + (categories[i+1] ? '&ndash;' + categories[i+1] + '<br>' : '+');
 
        };
        // div.innerHTML = labels.join('<br>');
    return div;
    };
    legend.addTo(myMap);

});
