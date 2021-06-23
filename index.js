function submitData(userName, userEmail) {
    let data = {
        name: `${userName}`,
        email: `${userEmail}`
      };
    let configObj = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };
    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            let id = object.id.toString()
            const p = document.createElement('p');
            p.innerHTML = `${id}`
            document.body.appendChild(p);
        })
        .catch(function(error) {
            alert("Error alert!");
            const p = document.createElement('p');
            p.innerHTML = `${error.message}`
            document.body.appendChild(p);
        });
}