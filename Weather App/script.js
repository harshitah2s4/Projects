const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8a5f6d2931mshe143b46c2745ef4p1cd00djsn55f04651ae9f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather=(city)=>{    //getting arguement city value from line 29
    cityName.innerHTML=city //in span of line 47 fill city input in the function getweather
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='  +city, options)
	.then(response => response.json())
	.then((response) =>{
      //you will have to include all values one by one in your html code
    console.log(response)
    cloud_pct.innerHTML=response.cloud_pct//cloud_pct,min_temp,max_temp,humidity etc are all ids in spans
feels_like.innerHTML=response.feels_like
humidity.innerHTML=response.humidity
humidity1.innerHTML=response.humidity
max_temp.innerHTML=response.max_temp
min_temp.innerHTML=response.min_temp
sunrise.innerHTML=response.sunrise
sunset.innerHTML=response.sunset
temp.innerHTML=response.temp
temp1.innerHTML=response.temp
temp1.innerHTML=response.temp
wind_degrees.innerHTML=response.wind_degrees
wind_speed1.innerHTML=response.wind_speed 
wind_speed.innerHTML=response.wind_speed 
})
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{  //submit id from line 40 in index.html
    e.preventDefault()
    getweather(city.value)              //city id from line 39 , uski input ki vlaue fetch ho rhi hain jo ki getweather function mein daali jaa rhi hain
})
getweather("Delhi")