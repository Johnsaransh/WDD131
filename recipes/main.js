
import { recipes } from './recipes.mjs';

window.addEventListener('DOMContentLoaded', () => {
    const recipesContainer = document.getElementById('recipes-container');

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image;
        recipeImage.alt = recipe.title;
        recipeCard.appendChild(recipeImage);

        const recipeTitle = document.createElement('h2');
        recipeTitle.textContent = recipe.title;
        recipeCard.appendChild(recipeTitle);

        const recipeDescription = document.createElement('p');
        recipeDescription.textContent = recipe.description;
        recipeCard.appendChild(recipeDescription);

        const viewMoreButton = document.createElement('button');
        viewMoreButton.textContent = 'View Recipe';
        viewMoreButton.addEventListener('click', () => {
            alert(`${recipe.title}\n\nIngredients:\n${recipe.ingredients.join('\n')}\n\nInstructions:\n${recipe.instructions}`);
        });
        recipeCard.appendChild(viewMoreButton);

        recipesContainer.appendChild(recipeCard);
    });
});
