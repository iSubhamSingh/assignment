let url = "https://icanhazdadjoke.com/";

let list = [];
let i = 1;
while (i <= 5){
    fetch(url, {
    headers: {
        'Accept': 'application/json'  
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
})
.then(data => console.log(data.joke)
)
.catch(error => console.error('There was a problem with the fetch operation:', error));

i++;
}



