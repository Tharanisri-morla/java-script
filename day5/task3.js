let message = document.getElementById("message")


const validateForm = (event) => {
    event.preventDefault()
    let username = event.target.username.value
    let password = event.target.password.value
    if(username === "" && password === "") {
        message.innerHTML = "enter Username and password"
        
    } else if(username === "") {
        message.innerHTML = "Username is required"
       
    } else if(password === "") {
        message.innerHTML = "Password is required"
      
    } else {
        message.innerHTML = ""
    }
}
