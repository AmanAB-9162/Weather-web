const apiKey = "94b68ce893ea32ef22aaa89f77d3c613";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");


    async function checkWeather (city)  {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      

      if(response.status == 404){
        document.querySelector(".error").style.display = "block";
       
        document.querySelector(".weather").style.display = "none";
      }

      else{
      var data = await response.json();
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

      if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/cloud.png";
      }
      else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/sunny.png";

      }
      else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/thunder.jpg";
       
      }
      else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/sun-rain-cloud.png";
       
      }
      else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
       
      }
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
      
    }
}
    
   searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
   }
   )
