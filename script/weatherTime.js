//get time and date 
const month = new Array();
month[0] = 'januar';
month[1] = 'februar';
month[2] = 'mars';
month[3] = 'april';
month[4] = 'mai';
month[5] = 'juni';
month[6] = 'juli';
month[7] = 'august';
month[8] = 'september';
month[9] = 'oktober';
month[10] = 'november';
month[11] = 'desember';

setInterval(() => {
const tidspunkt = new Date();
const this_month = month[tidspunkt.getMonth()];
const dager = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag','Fredag', 'Lørdag', 'Søndag'];
const dag = dager[tidspunkt.getDay()];
const timer = tidspunkt.getHours();
const dato = tidspunkt.getDate();
const minutter = tidspunkt.getMinutes();
const sekunder = tidspunkt.getSeconds();



const date_time = document.querySelector('.date_time');

    async function showtime() {
        await getWeather();
        

        // console.log (sunrise_seconds_hoisted)
        const date = new Date(sunrise_seconds_hoisted * 1000);
        const hours = date.getHours();
        const minutes = '0' + date.getMinutes();
        const seconds = '0' + date.getSeconds();

        const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        // console.log(formattedTime)

        const date_set = new Date(sunset_seconds_hoisted * 1000);
        const hours_set = date_set.getHours();
        const minutes_set = '0' + date_set.getMinutes();
        const seconds_set = '0' + date_set.getSeconds();

        const formattedTime_set = hours_set + ':' + minutes_set.substr(-2) + ':' + seconds_set.substr(-2);


        

        date_time.innerHTML = dag + ' ' + dato + '. ' + this_month + ' ' + timer + ':' + minutter + ', sol opp & ned: ' + formattedTime + ' & ' + formattedTime_set;
    }
    showtime();
}, 20000);


// weather


//OPEN-WEATHER API
const openweather_api = "hidden";

const forecast_api = "hidden";

let sunrise_seconds_hoisted;

const innervar = ovar => {
    return ovar;
}

let sunset_seconds_hoisted;

const innervar_set = ovar_set => {
    return ovar_set;
}


async function getWeather() {
    console.log('run weather function first')
    const response = await fetch(openweather_api);  
    const json = await response.json();
    
    const fuktighet = `${json.main.humidity}`;
    const temperatur = `${json.main.temp}`;
    // console.log(json)
    // console.log(json.weather[0].description)
    // console.log(json.sys.sunrise);
    

    const sunrise_seconds = `${json.sys.sunrise}`
    const sunset_seconds = `${json.sys.sunset}`
   
    sunrise_seconds_hoisted = innervar(sunrise_seconds);

    sunset_seconds_hoisted = innervar_set(sunset_seconds);


        document.querySelector('.weather').innerHTML = 'Min / maks temp:  ' + `${json.main.temp_min}` + ' /' + `${json.main.temp_max}` + ' &#8451';

}

getWeather();
