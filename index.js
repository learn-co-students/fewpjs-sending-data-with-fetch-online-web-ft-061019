function submitData(name, email) {
    
    return fetch('http://localhost:3000/users', {method: 'POST', headers: {'Content-Type': 'application/json', 'Accept': 'application/json'
},
    body: JSON.stringify({
        name, 
        email 
    })
} )
        .then(function(resp){
            return resp.json()
        })
        .then(function(json){
            console.log(json)
            const newId = document.createElement("p")
            newId.innerHTML = json["id"]
            document.body.appendChild(newId)
        })
        .catch(function(error){
            const elementError = document.createElement("p")
            elementError.innerHTML = error.message
            document.body.appendChild(elementError)
        })
}