## My-Recipe-Book ##

**Description**
This code creates a simple Recipe Book web app that allows users to add, edit, and delete recipes. The app uses HTML, CSS, and JavaScript to provide an interactive interface for managing recipes.

**Features**

-Add a new recipe by entering its name, ingredients, and method.
-View all saved recipes in a structured layout.
-Edit a recipe's details.
-Delete a recipe from the list.
-Responsive and user-friendly design.

**Technologies Used**

-HTML5
-CSS3
-JavaScript (ES6)

**File Structure**

MyRecipeBook/
│── index.html  # Main HTML file
│── style.css   # Stylesheet for the UI
│── script.js   # JavaScript for app functionality
│── background.png  # Background image for the navigation bar

**How to Use**

-Open index.html in a web browser.
-Enter the recipe details in the provided form.
-Click on the "Add Recipe" button to save the recipe.
-The added recipe will appear in the list on the right.
-Click "Edit" to modify a recipe or "Delete" to remove it.

**JavaScript Functions**

handleSubmit(event)
-Prevents the form from refreshing the page.
-Retrieves input values and stores them in an array.
-Clears the form fields after submission.
-Calls displayRecipes() to update the UI.

displayRecipes()
-Populates the recipe list dynamically.
-Hides the "No Recipes" message when recipes exist.

handleDelete(event)
-Deletes a recipe from the array and updates the list.

handleEdit(event)
-Replaces recipe details with input fields for editing.

handleUpdate(event)
-Saves the modified recipe data and refreshes the list.

handleCancel(event)
-Cancels editing and reloads the recipes list.

**Future Improvements**

-Implement local storage to persist recipes.
-Add categories for different types of recipes.
-Allow users to upload images for their recipes.

Author
Created by Ramsha as a simple recipe management tool.
