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
      // for (var i = 0; i < response.length; i++){
      
      function colorPick(n){
            var color = "";
            if (n < 10) {
              color = "lime-green";
            }
            else if (n < 30) {
              color = "yellow-green";
            }
            else if (n < 50) {
              color = "orange";
            }
            else if (n < 70) {
              color = "burnt orange";
            }
            else if (n < 90){
                color = "brown"
            }
        }

        function radius(magnitude){
            if (magnitude === 0){
            return 1;
        }
        return magnitude * 1.5;
    }


        function style(feature){
    return {
        radius: radius(feature.properties.mag),
        fillColor: colorPick(feature.geometry.coordinates[2]),
        color:  colorPick(feature.geometry.coordinates[2]),
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    }
}

    L.geoJSON(response, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng)
        },
        style:style,
        onEachFeature : function(feature,layer){
          layer.bindPopup("<h1>" + feature.properties.place + "</h1>" + "<hr> <h3>Magnitude: " + feature.properties.mag + "</h3>");//.addTo(myMap);
        }
      
    }).addTo(myMap);
});