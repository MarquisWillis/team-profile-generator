function generateIntern(intern) {
    return `  <div class="col-sm-4 my-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Manger</h5>
        <ul class="list-group">
          <li class="list-group-item">name: ${intern.name}</li>
          <li class="list-group-item">id:  ${intern.id}</li>
          <li class="list-group-item">email: ${intern.email}</li>
          <li class="list-group-item">OfficeNumber: ${intern.school}</li>
           
        </ul>
      </div>
    </div>
  </div>`
};

module.exports = generateIntern;