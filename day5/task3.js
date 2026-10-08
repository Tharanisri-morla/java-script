const validateForm = (event) => {
    event.preventDefault()
    let username = event.target.username.value
    let password = event.target.password.value
    if(username === "" && password === "") {
        console.log("Username and password are required")
    } else if(username === "") {
        console.log("Username is required")
    } else if(password === "") {
        console.log("Password is required")
    }
}
