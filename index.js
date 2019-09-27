function submitData(name, email) {
    let data = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com"
        })
    };

    fetch("http://localhost:3000/users", data)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function(error) {
        alert("Unauthorized Access");

        console.log(error.message);
    });
}

