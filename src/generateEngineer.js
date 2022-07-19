function generateEngineer(engineer) {
    return  `<div class="col-sm-4 my-3">
    <div class="card d-flex text-center">
      <div class="card-body bg-secondary">
        <h3 class="card-title text-white">${engineer.name}</h3>
        <h3 class="card-title text-white">${engineer.getRole()}</h3>
        <ul class="list-group">
          <li class="list-group-item">Id: ${engineer.id}</li>
          <li class="list-group-item">Email: ${engineer.email}</li>
          <li class="list-group-item">GitHub: ${engineer.github}</li>  
        </ul>
      </div>
    </div>
  </div>`
};

module.exports = generateEngineer;