const APIKey = b6d36628f0ec0724c4899a8021b18ffe


fetch('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b6d36628f0ec0724c4899a8021b18ffe', {
    method: 'GET',
    headers: {
        'Content-Type': 'appllication/json'
    },
    body: JSON.stringify({
        name: ''
    })
})  
.then (res => {
    return res.json()
    
})
// .then(data =>  console.log(data))
// .catch(error => console.log('error'))