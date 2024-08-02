
let data = [];
let days = [];
let icons = ['T','P','S',4,5];

/* Get Weather Data */

async function getWeatherData() {
    const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Ostrava?unitGroup=metric&key=6J365WLE469QG4FZLEN2W9VQ9&contentType=json')
    data = await response.json();
    getDays();
    domHandler();
}

function getDays() {
    days = data.days;
}

function appendChild(parent, child){
    document.querySelector(parent).appendChild(child);
}

function domHandler() {
    let currLoc = document.createElement('h1');
    currLoc.innerText = data.resolvedAddress;
    appendChild('#currDay', currLoc);

    let currTemp = document.createElement('div');
    currTemp.innerText = icons[0]+days[0].temp;
    appendChild('#currDay', currTemp);

    let currIcon = document.createElement('div');
    currIcon.innerText = days[0].icon;
    appendChild('#currDay', currIcon);

    let currPrecip = document.createElement('div');
    currPrecip.innerText = icons[1]+days[0].precip;
    appendChild('#currDay', currPrecip);

    let currWind = document.createElement('div');
    currWind.innerText = icons[2]+days[0].windspeed;
    appendChild('#currDay', currWind);

    let currWindDir = document.createElement('div');
    currWindDir.innerText = Math.round(days[0].winddir);
    appendChild('#currDay', currWindDir);

/*     for (i = 0; i <= 7; i++){
        const temp = document.createElement('div');
        temp.innerText = icons[1]+days[0].temp;
        document.querySelector('#currDay').appendChild('temp');
    } */
}





getWeatherData();





 
/* LINK FOR API:

https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Ostrava?unitGroup=metric&key=6J365WLE469QG4FZLEN2W9VQ9&contentType=json

*/