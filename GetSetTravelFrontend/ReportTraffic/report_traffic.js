console.log("connected");

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
function showPosition(position) {
    let loc = {lat:position.coords.latitude, long:position.coords.longitude}
    axios.post("http://localhost:3000/rgeo", loc).then((res)=>{
        var placeVal = res.data
        document.getElementById('location').value = placeVal
    }).catch((err)=>{
        console.log(err)
    })
    
  }
document.getElementById("geoLocation").addEventListener('click',(e)=>{
    getLocation()
}
)
document.querySelector("#report").addEventListener('click',(e)=>{
    let level = document.querySelector("#level").value
    let location = document.querySelector("#location").value
    let today = new Date();
    let date = today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let traffic = { date: date, time:time, place:location, level:level}
    axios.post("http://localhost:3000/traffic", traffic).then((res)=>{
        console.log(res.data)
    }).catch((err)=>{
        console.log(err)
    })
})