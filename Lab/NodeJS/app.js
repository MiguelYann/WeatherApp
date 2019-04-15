var http = require('http')


function printCity(city, location, current, condition) {
    console.log(" La ville " + city + " a les corrdonees suivantes\n" +
        "location-> " + location + " \n" +
        " current-> " + current + " \n" +
        " condition->" + condition + " \n"

    )
};

function getCity(city) {
    var request = http.get("http://api.apixu.com/v1/current.json?key=12e4d11ed34241b386f73205191504&q=" + city, function(res) {

        //    console.log(res.statusCode);
        var body = '';

        res.on('data', function(chunk) {
            body += chunk;
        });
        res.on('end', function() {
            if (res.statusCode === 200) {

                try {
                    var dataWeather = JSON.parse(body)
                    printCity(city, dataWeather.location.region, dataWeather.current, dataWeather.condition);
                } catch (e) {
                    console.error()
                }


            } else {

            }



        });


    });
}
getCity("Lyon")