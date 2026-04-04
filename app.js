let recipeData = [
    {
        id: 1,
        name: "Pancakes",
        image: "C:\\Users\\Admin\\images\\photo-1612182062633-9ff3b3598e96.avif",
        description: "Delicious fluffy pancakes perfect for breakfast.",
        category: "breakfast",
        ingredients: "1 cup all-purpose flour\n2 tablespoons sugar\n2 teaspoons baking powder\n1/2 teaspoon salt\n1 cup milk\n1 large egg\n2 tablespoons melted butter",
        directions: "1. In a large bowl, whisk together the flour, sugar, baking powder, and salt. 2. In another bowl, beat the egg and then whisk in the milk and melted butter. 3. Pour the wet ingredients into the dry ingredients and stir until just combined. 4. Heat a non-stick skillet over medium heat and pour 1/4 cup of batter for each pancake. Cook until bubbles form on the surface, then flip and cook until golden brown on the other side. Serve with syrup and your favorite toppings."
    },
    {
        id: 2,
        name: "Caesar Salad",
        image: "C:\\Users\\Admin\\images\\photo-1669283714145-f97867f6c238.avif",
        description: "Crisp romaine lettuce with a creamy Caesar dressing.",
        category: "lunch",
        ingredients: "1 head romaine lettuce\n1/2 cup Caesar dressing\n1 clove garlic, minced\n2 anchovy fillets, minced (optional)\n1 cup croutons\n1/4 cup grated parmesan cheese",
        directions: "1. Wash and chop the romaine lettuce. 2. In a large bowl, whisk together the Caesar dressing, garlic, and anchovies. 3. Add the lettuce to the dressing and toss to coat. 4. Top with croutons and parmesan cheese."
    },
    {
        id: 3,
        name: "Spaghetti Bolognese",
        image: "C:\\Users\\Admin\\images\\photo-1622973536968-3ead9e780960.avif",
        description: "Classic Italian pasta dish with a rich meat sauce.",
        category: "dinner",
        ingredients: "1 lb ground beef\n1 onion, chopped\n2 cloves garlic, minced\n1 can (15 oz) tomato sauce\n1 can (14.5 oz) diced tomatoes\n2 tbsp tomato paste\n1 tsp dried oregano\n1 tsp dried basil\nSalt and pepper to taste\n12 oz spaghetti\nGrated parmesan cheese for serving",
        directions: "1. In a large skillet, heat olive oil over medium heat. Add chopped onions and garlic, and sauté until softened. 2. Add ground beef and cook until browned. 3. Stir in tomato sauce, diced tomatoes, tomato paste, oregano, basil, salt, and pepper. Simmer for 20-30 minutes. 4. Cook spaghetti according to package instructions. Drain and serve topped with the Bolognese sauce and grated parmesan cheese."
    },
    {
        id: 4,
        name: "Chocolate Chip Cookies",
        image: "C:\\Users\\Admin\\Downloads\\photo-1605243614624-277f48f46d52.avif",
        description: "Delicious chocolate chip cookies perfect for a sweet treat.",
        category: "dessert",
        ingredients: "1 cup (2 sticks) unsalted butter, softened\n1 cup granulated sugar\n1 cup packed brown sugar\n2 large eggs\n2 teaspoons vanilla extract\n3 cups all-purpose flour\n1 teaspoon baking soda\n1/2 teaspoon salt\n2 cups semisweet chocolate chips",
        directions: "1. Preheat the oven to 350°F (175°C). 2. In a large bowl, cream together the butter and sugar until light and fluffy. 3. Beat in the eggs one at a time, then stir in the vanilla extract. 4. In another bowl, whisk together the flour, baking soda, and salt. Gradually blend the dry ingredients into the wet mixture. 5. Stir in the chocolate chips. 6. Drop by rounded spoonfuls onto ungreased cookie sheets and bake for 10-12 minutes or until golden brown."
    }
];
const recipeContainer = document.getElementById('recipes');
let currentRecipes = recipeData;
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

searchForm?.addEventListener('submit', function(event) {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    const filteredRecipes = query === ''
        ? recipeData
        : recipeData.filter(recipe =>
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.category.toLowerCase().includes(query)
        );
    displayRecipes(filteredRecipes);
});

function displayRecipes(recipes) {
    currentRecipes = recipes;
    recipeContainer.innerHTML = '';
    if (recipes.length === 0) {
        recipeContainer.innerHTML = '<p class="empty-state">No recipes found. Try another search.</p>';
        return;
    }
    recipes.forEach((recipe, index) => {
        recipeContainer.innerHTML += `
            <div class="recipe-card" data-index="${index}">
                <img src="${recipe.image}" alt="${recipe.name} served on a plate, ${recipe.description}">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <p><strong>Category:</strong> ${recipe.category.toUpperCase()}</p>
            </div>
        `;
    });
}

displayRecipes(recipeData);

recipeContainer.addEventListener('click', (event) => {
    const card = event.target.closest('.recipe-card');
    if (!card) return;

    const index = Number(card.dataset.index);
    const recipe = currentRecipes[index];
    if (!recipe) return;

    window.location.href = `recipe-detail.html?id=${recipe.id}`;
});

document.getElementById('categoryfilter').addEventListener('change', function() {
    const selectedCategory = this.value;
    if (!selectedCategory || selectedCategory === 'all') {
        displayRecipes(recipeData);
    } else {
        const filteredRecipes = recipeData.filter(recipe => recipe.category === selectedCategory);
        displayRecipes(filteredRecipes);
    }
});

document.getElementById('randomrecipe').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * recipeData.length);
    displayRecipes([recipeData[randomIndex]]);
});

document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('addRecipeButton').addEventListener('click', () => {
    const name = document.getElementById('newName').value;
    const image = document.getElementById('newImg').value;
    const description = document.getElementById('newDesc').value;
    const category = document.getElementById('newCategory').value;
    const ingredients = document.getElementById('newIngredients').value;
    const directions = document.getElementById('newDirections').value;


    if (!name || !image || !description || !category || !ingredients || !directions) {
        alert('Please fill in all fields to add a new recipe.');
        return;
    }

    recipeData.push({ name, image, description, category, ingredients, directions });
    displayRecipes(recipeData);
    document.getElementById('newName').value = '';
    document.getElementById('newImg').value = '';
    document.getElementById('newDesc').value = '';
    document.getElementById('newCategory').value = '';
    document.getElementById('newIngredients').value = '';
    document.getElementById('newDirections').value = '';

});

document.getElementById("randomrecipe").addEventListener("click", async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await response.json();
    const meal = data.meals[0];
    sessionStorage.setItem('randomMeal', JSON.stringify(meal));
    window.location.href = 'recipe-detail.html?random=true';
});

