//click function for search button also saves search
$("#searchBtn").click(function (e) {
        e.preventDefault()
        var value = $(this).siblings("#citySearch").val();
        var city = $(this).siblings("#citySearch").text();
        search(value, city)
        localStorage.setItem(value, city);

    });

    userInput();
    //gets item
function userInput() {
        $("#citySearch").val(localStorage.getItem(value, city));
}


    function search(city) {
       
        var apiKey = "3ba684f12e9a9d92ba0e3368abcfefdb";
        //adds whatever the userInput was into the api and applies my api key after
        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&apikey=" + apiKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(data) {
            console.log(data)
            //function that calls image icons from openweather
            function createImgUrl(icon) {
                return "https://openweathermap.org/img/wn/" + icon + "@2x.png"
            }
            //Ment to have the city name at the top along with all current day information
            $('#CityName')
            $('TemperatureToday')
            $('WindSpeedToday')
            $('HumidityToday')
            $('UV-IndexToday')
            //1st card that says the the current day 
            // appends the object according to what is the the array 
            //I access the list then the main then the temperature data and so forth
            $('#day1 .temp').append(JSON.stringify(data["list"][0]["main"]["temp"]));
            $('#day1 .date').append(JSON.stringify(data["list"][0]["dt_txt"]));
            $('#day1 .humidity').append(JSON.stringify(data["list"][0]["main"]["humidity"]));
            $('#day1 .wind').append(JSON.stringify(data["list"][0]["wind"]));
            //selects img tag and calls the data from the api object list then selects the weather and gets approriate icon
            $('img')[0].setAttribute('src', createImgUrl(data["list"][0]["weather"][0]["icon"]));
             // 2nd day card information
            $('#day2 .temp').append(JSON.stringify(data["list"][8]["main"]["temp"]));
            $('#day2 .date').append(JSON.stringify(data["list"][8]["dt_txt"]));
            $('#day2 .humidity').append(JSON.stringify(data["list"][8]["main"]["humidity"]));
            $('#day2 .wind').append(JSON.stringify(data["list"][8]["wind"]));
            $('img')[1].setAttribute('src', createImgUrl(data["list"][8]["weather"][0]["icon"]));
              //3rd day card information
            $('#day3 .temp').append(JSON.stringify(data["list"][16]["main"]["temp"]));
            $('#day3 .date').append(JSON.stringify(data["list"][16]["dt_txt"]));
            $('#day3 .humidity').append(JSON.stringify(data["list"][16]["main"]["humidity"]));
            $('#day3 .wind').append(JSON.stringify(data["list"][16]["wind"]));
            $('img')[2].setAttribute('src', createImgUrl(data["list"][16]["weather"][0]["icon"]));
             //4th day card information
            $('#day4 .temp').append(JSON.stringify(data["list"][24]["main"]["temp"]));
            $('#day4 .date').append(JSON.stringify(data["list"][24]["dt_txt"]));
            $('#day4 .humidity').append(JSON.stringify(data["list"][24]["main"]["humidity"]));
            $('#day4 .wind').append(JSON.stringify(data["list"][24]["wind"]));
            $('img')[3].setAttribute('src', createImgUrl(data["list"][24]["weather"][0]["icon"]));
            //5th day card information
            $('#day5 .temp').append(JSON.stringify(data["list"][32]["main"]["temp"]));
            $('#day5 .date').append(JSON.stringify(data["list"][32]["dt_txt"]));
            $('#day5 .humidity').append(JSON.stringify(data["list"][32]["main"]["humidity"]));
            $('#day5 .wind').append(JSON.stringify(data["list"][32]["wind"]));
            $('img')[4].setAttribute('src', createImgUrl(data["list"][32]["weather"][0]["icon"]));






        });

    }


   









