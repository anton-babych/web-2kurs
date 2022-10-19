const link = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&lang=ua&appid=148c775a13c20825268d5d6f2a1af42b';

fetch(link)
    .then(res => res.json())
    .then(json => createWidget(json));
    //.then(json => console.log(json));

function createWidget({main, name, weather}){
    const temp = main.temp,
        city = name,
        icon = weather[0].icon,
        status = weather[0].main;

    const el = document.createElement('div');
    el.classList.add('weather');
    el.innerHTML = `
        <p class="weather__degrees">${Math.floor(temp)}°C</p>
        <img src="https://openweathermap.org/img/w/${icon}.png" alt="іконка погоди" class="weather__icon"></img>
        <p class="weather__status">${status}</p>`;
    
    const textEl = document.createElement('div');
    textEl.classList.add('text-holder');
    textEl.innerHTML = `
        <p class="title-1">Вітаю!</p>
        <span class="title-2">Я бачу у вас</span>
        <span class="title-2 ${temp > 15 ? "warm" : "cold"} marked">${temp > 15 ? "тепло" : "холодно"}</span>
        <span class="title-2">у місті</span>
        <span class="title-2 marked">${city}.</span>
        <span class="title-2">Не забудьте ${temp > 15 ? "насолодитися теплими днями" : "одягтись тепліше"}!</span>
    `;
    
    const holder = document.querySelector(".weather-container");
    holder.append(el);
    holder.append(textEl);
}
