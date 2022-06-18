// http://api.weatherstack.com/current

// http://api.weatherstack.com/current?access_key=61eeae202d51674e9650399265bde39c&query=New%20York


let searchButton = document.getElementById("searchButton")
let inputField = document.getElementById("input-box")
let weatherbox = document.querySelector(".weather-box")

searchButton.addEventListener("click",function(){
    
    let valueOfField = inputField.value

    console.log(valueOfField)

    async function apiaccess(){
        let fetch_weather_api = await fetch("http://api.weatherstack.com/current?access_key=61eeae202d51674e9650399265bde39c&query="+valueOfField)
        let response = fetch_weather_api.json()    
        return response
    }
    let city = document.getElementById("city")
    let date = document.getElementById("date")
    let temp = document.getElementById("temp")
    let observation_time = document.getElementById("observation_time")
    let weatherDes = document.getElementById("weather")
    let humid = document.getElementById("humid")

    apiaccess().then(function(response){
        let errorss = document.getElementById("Error")

        errorss.innerHTML = ""

        console.log(response)

        // 3 response is coming from api 
        // 1. dot curreent  
        // 2. dot location 
        // 3. dot request  


        // ************** city **************** 
        let location = response.location.name
        let state = response.location.region
        let country = response.location.country
        city.innerHTML = location +", "+ state +", " + country
        
        // ************** date time **************** 
        let time = response.location.localtime
        date.innerHTML = time

        // ************** tempertaure **************** 
        let currentTemp = response.current.temperature   
        temp.innerHTML = currentTemp + "&deg;C"

        // ************** Observation Time **************** 
        let obstime = response.current.observation_time
        observation_time.innerHTML = obstime

        // ************** type **************** 
        let weathertype = response.current.weather_descriptions[0]
        weatherDes.innerHTML= weathertype

        // ************** Humidity **************** 
        let humiditytype = response.current.humidity
        humid.innerHTML = humiditytype

        // **************** making block visible ****************** 
        weatherbox.style.display = "block"
        
    }).catch(function(reject){
        console.log(reject)
        let errorss = document.getElementById("Error")
        errorss.innerHTML = "Sorry This city is not found in our database please search nearby top city"
        weatherbox.style.display = "None"
    })

  

})