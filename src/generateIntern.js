function generateIntern(intern) {
    return `  <div class="col-sm-4 my-3">
    <div class="card d-flex text-center">
      <div class="card-body bg-secondary">
        <h3 class="card-title text-white">${intern.name}</h3>
        <h3 class="card-title text-white">${intern.getRole()}</h3>
        <ul class="list-group">
          <li class="list-group-item">Id:  ${intern.id}</li>
          <li class="list-group-item">Email: ${intern.email}</li>
          <li class="list-group-item">School: ${intern.school}</li> 
        </ul>
      </div>
    </div>
  </div>`
};

module.exports = generateIntern;