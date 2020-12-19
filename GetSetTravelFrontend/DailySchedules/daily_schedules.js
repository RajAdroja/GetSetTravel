document.getElementById("report").addEventListener('click',(e)=>{
    let start = document.getElementById("start").value
    let end = document.getElementById("end").value
    let body = document.querySelector("body")
    body.innerHTML += `<div class = "subheading">
    <img src="metro.png" alt="icon" style="float: left; height:50px; width:50px; padding-left: 15px; padding-top: 15px">

            <h3>Metro Schedules</h3>
        </div>
        <div class = "container">
            <h2>No Metros on this Route</h2>
        </div>
        `
    
    axios.get("http://localhost:3000/train").then((res)=>{
        // console.log(res.data)
        let train = res.data[0].train
        console.log(train)
        // <img src="travel.png" alt="icon" style="float: left; height:50px; width:50px; padding-left: 15px; padding-top: 15px">
        body.innerHTML += `<div class = "subheading">
            <img src="train.png" alt="icon" style="float: left; height:50px; width:50px; padding-left: 15px; padding-top: 15px">

            <h3>Train Schedules</h3>
        </div>`
        for(var i =0;i < train.length; i++){
            let start = train[i].start
            let end = train[i].end
            let name = train[i].name
            let from = train[i].from
            let to = train[i].to
            let dep = train[i].dep
            let arr = train[i].arr
            
            body.innerHTML += `<div class = "container">
            <h2>Name: ${name}</h2>
            <h2>From: ${from}</h2>
            <h2>To: ${to}</h2>
            <h2> Departure Time: ${dep}</h2>
            <h2> Arrival Time: ${arr}</h2>
        </div>`        }

    }).catch((err)=>{
        console.log(err)
    })

    

    axios.get("http://localhost:3000/bus").then((res)=>{
        let bus = res.data[0].bus
        console.log(bus)
        body.innerHTML += `<div class = "subheading">
        <img src="bus.ico" alt="icon" style="float: left; height:50px; width:50px; padding-left: 15px; padding-top: 15px">

            <h3>Bus Schedules</h3>
        </div>`
        for(var i =0;i < bus.length; i++){

            let name = bus[i].name
            let from = bus[i].from
            let to = bus[i].to
            let time = bus[i].time
            let station = bus[i].station

            body.innerHTML += `<div class = "container">
            <h2>Name: ${name}</h2>
            <h2>From: ${from}</h2>
            <h2>To: ${to}</h2>
            <h2> Departure Time: ${time}</h2>
            <h2> Arrival Time: ${station}</h2>
        </div>` 
        }
    }).catch((err)=>{
        console.log(err)
    })
})