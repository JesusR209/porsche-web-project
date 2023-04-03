// // Assume the JSON data is stored in a variable called "porscheModels"
// const modelsContainer = document.querySelector('#models-container');

// porscheModels.models.forEach(model => {
//   // Create the card element
//   const card = document.createElement('div');
//   card.classList.add('card');
  
//   // Create the image element
//   const image = document.createElement('img');
//   image.src = ''; // empty image tag
  
//   // Create the card body element
//   const cardBody = document.createElement('div');
//   cardBody.classList.add('card-body');
  
//   // Create the title element
//   const title = document.createElement('h5');
//   title.classList.add('card-title');
//   title.textContent = model.name;
  
//   // Create the description element
//   const description = document.createElement('p');
//   description.classList.add('card-text');
//   description.textContent = model.description;
  
//   // Create the horsepower element
//   const horsepower = document.createElement('p');
//   horsepower.classList.add('card-text');
//   horsepower.textContent = 'Horsepower: ' + model.horsepower;
  
//   // Create the torque element
//   const torque = document.createElement('p');
//   torque.classList.add('card-text');
//   torque.textContent = 'Torque: ' + model.torque;
  
//   // Create the year element
//   const year = document.createElement('p');
//   year.classList.add('card-text');
//   year.textContent = 'Year: ' + model.year;
  
//   // Create the engine size element
//   const engineSize = document.createElement('p');
//   engineSize.classList.add('card-text');
//   engineSize.textContent = 'Engine Size: ' + model.engine_size;
  
//   // Append all elements to the card body
//   cardBody.appendChild(title);
//   cardBody.appendChild(description);
//   cardBody.appendChild(horsepower);
//   cardBody.appendChild(torque);
//   cardBody.appendChild(year);
//   cardBody.appendChild(engineSize);
  
//   // Append the image and card body to the card
//   card.appendChild(image);
//   card.appendChild(cardBody);
  
//   // Append the card to the models container
//   modelsContainer.appendChild(card);
// });
