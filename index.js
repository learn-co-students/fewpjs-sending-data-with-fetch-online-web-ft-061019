// Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })

        .then(function(response){
            // console.log(response)
            return response.json();
        })
        .then(function(json){
            console.log(json)
            const newId = document.createElement("p")
            newId.innerHTML = json["id"]
            document.body.appendChild(newId)
        })
        .catch(function(error) {
            const elementError = document.createElement("p")
            elementError.innerHTML = error.message
            document.body.appendChild(elementError)
    })
}

// document.addEventListener("DOMContentLoaded", function() {
//     submitData(name, email)
// })