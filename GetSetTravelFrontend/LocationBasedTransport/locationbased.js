console.log("connected")
let submits = document.getElementById("report")
submits.addEventListener('click',(f)=>{
    let start = document.getElementById("start")
    let end = document.getElementById("end")
    let body = document.querySelector("body")
    if (end == "chennai"){
        body.innerHTML += `<div class = "container">
        <h3>You can take Bus or Train</h3>
        </div>`
    }else {
        body.innerHTML += `<div class = "container">
        <h3>You can take Auto</h3>
        </div>`
    }
})