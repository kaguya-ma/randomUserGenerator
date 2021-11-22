function generateUser() {
    fetch("https://api.randomuser.me/?nat=us&results=1")
        .then(res => res.json())
        .then(json =>  populateCard(json.results))
}

function populateCard(data) {
    console.log(data)
    document.getElementById("profile").innerHTML=`
    <div class="card mx-auto mt-5" style="width: 18rem">
      <img src="${data[0].picture.large}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${data[0].name.title} ${data[0].name.first} ${data[0].name.last}</h5>
        <p class="card-text"></p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">email: ${data[0].email}</li>
        <li class="list-group-item">tel.: ${data[0].phone}</li>
        <li class="list-group-item">${data[0].location.city}</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
    `
}

// data[0].name.first