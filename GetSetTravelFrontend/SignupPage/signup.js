document.querySelector('#reg_b').addEventListener('click',(e)=>{
    let fn = document.querySelector('#name').value
    let adhar = document.querySelector('#aadhar').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let user_type = "Normal User"

    let new_user = {name:fn, email: email, aadhar:Number(adhar), password:password, user_type: user_type }

    console.log(new_user)
    axios.post('http://localhost:3000/users',new_user,{
        headers:{
            'Content-type':'application/json'
        }
    }).then((res)=>{
        console.log(res.data)
        window.location.href="../LoginPage/index.html"
    }).catch(function (error) {
        console.log(error);
    })
    }
)