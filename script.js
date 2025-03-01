// Select form and recipe list container
const form = document.querySelector('form');
const recipeList = document.querySelector('#recipe-list');
const noRecipes = document.getElementById('no-recipes');

let recipes = []; // Array to store recipes

function handleSubmit(event) {
  event.preventDefault(); // Prevent form from reloading the page
  
  // Get input values
  const nameInput = document.querySelector('#recipe-name');
  const ingrInput = document.querySelector('#recipe-ingredients');
  const methodInput = document.querySelector('#recipe-method');

  const name = nameInput.value.trim();
  const ingredients = ingrInput.value.trim().split(',').map(i => i.trim());
  const method = methodInput.value.trim();
  
   // Check if all fields are filled
  if (name && ingredients.length > 0 && method) {
    const newRecipe = { name, ingredients, method };
    recipes.push(newRecipe);  // Add recipe to array
    
    // Clear input fields
    nameInput.value = '';
    ingrInput.value = '';
    methodInput.value = '';
    
    displayRecipes(); // Refresh the recipe list
  }
}

function displayRecipes() {
  recipeList.innerHTML = '';
  recipes.forEach((recipe, index) => {
    const recipeDiv = document.createElement('div');

    recipeDiv.innerHTML = `
      <h3>${recipe.name}</h3>
      <p><strong>Ingredients:</strong></p>
      <ul>
        ${recipe.ingredients.map(ingr => `<li>${ingr}</li>`).join('')}
      </ul>
      <p><strong>Method:</strong></p>
      <p>${recipe.method}</p>
      <button class="edit-button" data-index="${index}">Edit</button>
      <button class="delete-button" data-index="${index}">Delete</button>`;
    recipeDiv.classList.add('recipe');
    recipeList.appendChild(recipeDiv);
  });

  // Show or hide "no recipes" message
  if (recipes.length > 0) {
	noRecipes.style.display = 'none';
  }
  else {
	noRecipes.style.display = 'flex';
  }
}

function handleDelete(event) {
  if (event.target.classList.contains('delete-button')) {
    const index = event.target.dataset.index;
    recipes.splice(index, 1); // Remove recipe from array
    displayRecipes(); // Remove recipe from array
	  searchBox.value = '';
  }
}

function handleEdit(event) {
    if (event.target.classList.contains('edit-button')) {
        const index = event.target.dataset.index;
        const recipe = recipes[index];

        // Replace the recipe display with input fields
        const recipeDiv = event.target.parentElement;
        recipeDiv.innerHTML = `
            <input type="text" id="edit-name" value="${recipe.name}">
            <textarea id="edit-ingredients">${recipe.ingredients.join(', ')}</textarea>
            <textarea id="edit-method">${recipe.method}</textarea>
            <button class="update-button" data-index="${index}">Update</button>
            <button class="cancel-button">Cancel</button>
        `;
    }
}

function handleUpdate(event) {
    if (event.target.classList.contains('update-button')) {
        const index = event.target.dataset.index;

        // Get new values
        const recipeDiv = event.target.parentElement;
        const newName = recipeDiv.querySelector('#edit-name').value.trim();
        const newIngredients = recipeDiv.querySelector('#edit-ingredients').value.trim().split(',').map(i => i.trim());
        const newMethod = recipeDiv.querySelector('#edit-method').value.trim();

        // Update the recipe
        if (newName && newIngredients.length > 0 && newMethod) {
            recipes[index] = { name: newName, ingredients: newIngredients, method: newMethod };
            displayRecipes();
        }
    }
}

function handleCancel(event) {
    if (event.target.classList.contains('cancel-button')) {
        displayRecipes(); // Reload recipes to cancel edit mode
    }
}

// Event Listeners
form.addEventListener('submit', handleSubmit);
recipeList.addEventListener('click', handleDelete);
recipeList.addEventListener('click', handleEdit);
recipeList.addEventListener('click', handleUpdate);
recipeList.addEventListener('click', handleCancel);