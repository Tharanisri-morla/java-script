const getdata = async () => {
    let display = document.getElementById("display");
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        display.src = data.message;
        
    } catch (error) {
        console.log(error);
    }
}