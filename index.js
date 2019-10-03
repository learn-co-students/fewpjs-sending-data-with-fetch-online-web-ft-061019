// Add your code here

const submitData = (name, email) => {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email})
  })
  .then(parseJson)
  .then(displayData)
  .catch(displayErrors)
}

const displayData = json => {
  let li = document.createElement('li');
  li.textContent = json.id;
  document.querySelector('ul').appendChild(li)
}

const parseJson = resp => {
  if(resp.status !== 201) {
    throw new error(resp.statusText);
  } else {
    return resp.json()
  }
};

const displayErrors = errors => {
  document.querySelector('p').textContent = errors;
}