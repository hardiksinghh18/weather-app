






const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4dc611d31cmsh0f3c90857abe156p11281djsn72270e2b734e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

	const getweather = ((city)=>{
		
		
		document.getElementById('cityname').innerHTML =city.value.toUpperCase()
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city.value,options)
	.then((response)=>{
		return response.json()
	}).then((v)=>{
		// console.log(v)

	    document.getElementById("temp").textContent =v.temp 
		document.getElementById("feels_like").textContent =v.feels_like
		document.getElementById("min_temp").textContent =v.min_temp
		document.getElementById("max_temp").textContent =v.max_temp
		document.getElementById("wind_speed").textContent =v.wind_speed
		document.getElementById("wind_degrees").textContent =v.wind_degrees
		document.getElementById("humidity").textContent =v.humidity
		document.getElementById("cloud_pct").textContent =v.cloud_pct 
		document.getElementById("sunrise").textContent =v.sunrise
		document.getElementById("sunset").textContent =v.sunset
		
	})

})






