let API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
let search = document.getElementById('userinput');
let form =  document.getElementById('form');
let info = document.getElementById('whether');
let message = document.getElementById('message');
// let API =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
// let IMG = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

let getinfo = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response =  await fetch(url);
     let data = await response.json();
     console.log(data.message);
    message.innerText = data.message;

}
form.addEventListener(
    'submit',
    function(event)
    {
        event.preventDefault();
        let city = search.ariaValueMax;
        getinfo(city);
    
    }
)   
