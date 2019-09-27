function submitData(name, email) {
    let data = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name, 
            email
        })
    };

    return fetch("http://localhost:3000/users", data)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        
        document.body.innerHTML = json["id"]
    })
    .catch(function(error) {
        document.body.innerHTML = "Unauthorized Access"

        console.log(error.message);
    });
}

