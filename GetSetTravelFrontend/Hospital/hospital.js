axios.get("http://localhost:3000/accident").then((res)=>{
    let hospitalArray = res.data
    for(var i = hospitalArray.length-1;i >-1;i-- ){
        let element = hospitalArray[i]
        let date = element.date
        let time = element.time
        let place = element.place
        let level = element.level
        let classvar = "low"
        if (level == "LOW"){
            classvar = "low" 
        }else if(level == "MEDIUM"){
            classvar = "medium"
        }else{
            classvar = "high"
        }
        document.querySelector("body").innerHTML += `<div class = "container">
        <h3>Date: ${date}</h3>
        <h3>Time: ${time}</h3>
        <h3>Place: ${place}</h3>
        <h3 class = ${classvar}>Level: ${level}</h3>
    </div>`
    }

    
}).catch((err)=>{
    
})