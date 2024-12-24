const apikey="2cf940581be23da7f2a0a6f5fa362aac"
const apiurl='https://api.openweathermap.org/data/2.5/weather?units=metric&q='
var search=document.querySelector('.search input')
const weatherIcon=document.querySelector('.weather-icon')

async function checkweather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    var data=await response.json();
    console.log(data)

    document.querySelector('.city').innerHTML=data.name
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C"
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%"
    document.querySelector('.wind').innerHTML=data.wind.speed+"km/hr"

    if(data.weather[0].main =='Clouds'){
        weatherIcon.src="assets/clouds.png";
    }
    else if(data.weather[0].main =='Clear'){
        weatherIcon.src="assets/clear.png";
    }
     else if(data.weather[0].main =='Rain'){
        weatherIcon.src="assets/rain.png";
    }
    else if(data.weather[0].main =='Drizlle'){
        weatherIcon.src="assets/drizzle.png";
    }
    else if(data.weather[0].main =='Mist'){
        weatherIcon.src="assets/mist.png";
    }
    else if(data.weather[0].main =='Snow'){
        weatherIcon.src="assets/snow.png";
    }


}
function city(){
    checkweather(search.value)
}
setTimeout(() => {
    checkweather(search)
}, 1000);