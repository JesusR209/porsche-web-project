let grid = document.querySelector('.col-md-4');

fetch('http://localhost:3000/inventory')
.then(res => res.json())
.then(data => {
    for(let value of data){
        addElement(grid, value);
    }
})

function addElement(appendIn, value){
    let div = document.createElement('div');
    div.className = "card md-6 m-3 box-shadow";

    let {image, name} = value;

    div.innerHTML = `
    
    <img class="card-img-top" src="${image}"
    style="height: 225px; width: 100%; display: block;">
    <div class="card-body " style="">
      <p class="card-text" style=""><i>${name}<i></p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-primary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary"><strong>Buy Now<strong></button>
          </div>
        </div>
    </div>
    `

    appendIn.appendChild(div);
}


