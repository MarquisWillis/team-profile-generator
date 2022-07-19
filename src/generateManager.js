function generateManager(manager) {
    return `  <div class="col-sm-4 my-3">
    <div class="card d-flex text-center">
      <div class="card-body bg-secondary">
        <h3 class="card-title text-white">${manager.name}</h3>
        <h3 class="card-title text-white">${manager.getRole()}</h3>
        <ul class="list-group">
          <li class="list-group-item">Id:  ${manager.id}</li>
          <li class="list-group-item">Email: ${manager.email}</li>
          <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
      </div>
    </div>
  </div>`
};

module.exports = generateManager;