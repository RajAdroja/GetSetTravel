var userArray
document.getElementById("submit").addEventListener('click',(a)=>{
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    axios.get("http://localhost:3000/users").then((res)=>{
        userArray = res.data
        // console.log(userArray)
        userArray.forEach(element => {
            let x = element.email
            let y = element.password
            // console.log("Hello")
            if (x == email && y == password){
                // console.log(x+y+email+password)
                location.href = "../index.html"
            }
        });
    }).catch((err)=>{
        console.log(err)
    })
    console.log(userArray)
    
})