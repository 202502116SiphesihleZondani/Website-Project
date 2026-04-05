    // ─── Recipe Data ────────────────────────────────────────────────────────────
// Bug fix: image paths were absolute Windows local paths (C:\Users\Admin\...)
// Fixed to use relative paths pointing to images in the project folder.
// The Chocolate Chip Cookies image was missing from the repo entirely —
// replaced with a reliable public placeholder.
let recipeData = [
    {
        id: 1,
        name: "Pancakes",
        image: "photo-1612182062633-9ff3b3598e96.avif",
        description: "Delicious fluffy pancakes perfect for breakfast.",
        category: "breakfast",
        ingredients: [
            "1 cup all-purpose flour",
            "2 tablespoons sugar",
            "2 teaspoons baking powder",
            "1/2 teaspoon salt",
            "1 cup milk",
            "1 large egg",
            "2 tablespoons melted butter"
        ],
        directions: [
            "In a large bowl, whisk together the flour, sugar, baking powder, and salt.",
            "In another bowl, beat the egg and then whisk in the milk and melted butter.",
            "Pour the wet ingredients into the dry ingredients and stir until just combined.",
            "Heat a non-stick skillet over medium heat and pour 1/4 cup of batter for each pancake.",
            "Cook until bubbles form on the surface, then flip and cook until golden brown on the other side.",
            "Serve with syrup and your favorite toppings."
        ]
    },
    {
        id: 2,
        name: "Caesar Salad",
        image: "photo-1669283714145-f97867f6c238.avif",
        description: "Crisp romaine lettuce with a creamy Caesar dressing.",
        category: "lunch",
        ingredients: [
            "1 head romaine lettuce",
            "1/2 cup Caesar dressing",
            "1 clove garlic, minced",
            "2 anchovy fillets, minced (optional)",
            "1 cup croutons",
            "1/4 cup grated parmesan cheese"
        ],
        directions: [
            "Wash and chop the romaine lettuce.",
            "In a large bowl, whisk together the Caesar dressing, garlic, and anchovies.",
            "Add the lettuce to the dressing and toss to coat.",
            "Top with croutons and parmesan cheese."
        ]
    },
    {
        id: 3,
        name: "Spaghetti Bolognese",
        image: "photo-1622973536968-3ead9e780960.avif",
        description: "Classic Italian pasta dish with a rich meat sauce.",
        category: "dinner",
        ingredients: [
            "1 lb ground beef",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 can (15 oz) tomato sauce",
            "1 can (14.5 oz) diced tomatoes",
            "2 tbsp tomato paste",
            "1 tsp dried oregano",
            "1 tsp dried basil",
            "Salt and pepper to taste",
            "12 oz spaghetti",
            "Grated parmesan cheese for serving"
        ],
        directions: [
            "In a large skillet, heat olive oil over medium heat. Add chopped onions and garlic, and sauté until softened.",
            "Add ground beef and cook until browned.",
            "Stir in tomato sauce, diced tomatoes, tomato paste, oregano, basil, salt, and pepper. Simmer for 20–30 minutes.",
            "Cook spaghetti according to package instructions.",
            "Drain and serve topped with the Bolognese sauce and grated parmesan cheese."
        ]
    },
    {
        id: 4,
        name: "Chocolate Chip Cookies",
        image: "https://images.unsplash.com/photo-1605243614624-277f48f46d52?w=600&auto=format&fit=crop",
        description: "Delicious chocolate chip cookies perfect for a sweet treat.",
        category: "dessert",
        ingredients: [
            "1 cup (2 sticks) unsalted butter, softened",
            "1 cup granulated sugar",
            "1 cup packed brown sugar",
            "2 large eggs",
            "2 teaspoons vanilla extract",
            "3 cups all-purpose flour",
            "1 teaspoon baking soda",
            "1/2 teaspoon salt",
            "2 cups semisweet chocolate chips"
        ],
        directions: [
            "Preheat the oven to 350°F (175°C).",
            "In a large bowl, cream together the butter and sugars until light and fluffy.",
            "Beat in the eggs one at a time, then stir in the vanilla extract.",
            "In another bowl, whisk together the flour, baking soda, and salt. Gradually blend the dry ingredients into the wet mixture.",
            "Stir in the chocolate chips.",
            "Drop by rounded spoonfuls onto ungreased cookie sheets and bake for 10–12 minutes or until golden brown."
        ]
    }
];

// ─── DOM References ──────────────────────────────────────────────────────────
const recipeContainer = document.getElementById('recipes');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
let currentRecipes = recipeData;

// ─── Display ─────────────────────────────────────────────────────────────────
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

// ─── Card Click → Detail Page ────────────────────────────────────────────────
recipeContainer.addEventListener('click', (event) => {
    const card = event.target.closest('.recipe-card');
    if (!card) return;
    const index = Number(card.dataset.index);
    const recipe = currentRecipes[index];
    if (!recipe) return;
    // Store the recipe so recipe-detail.html can read it without duplicating data
    sessionStorage.setItem('selectedRecipe', JSON.stringify(recipe));
    window.location.href = `recipe-detail.html?id=${recipe.id}`;
});

// ─── Search ───────────────────────────────────────────────────────────────────
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    const filtered = query === ''
        ? recipeData
        : recipeData.filter(r =>
            r.name.toLowerCase().includes(query) ||
            r.description.toLowerCase().includes(query) ||
            r.category.toLowerCase().includes(query)
        );
    displayRecipes(filtered);
});

// ─── Category Filter ──────────────────────────────────────────────────────────
document.getElementById('categoryfilter').addEventListener('change', function() {
    const sel = this.value;
    displayRecipes(!sel || sel === 'all' ? recipeData : recipeData.filter(r => r.category === sel));
});

// ─── Random Recipe ────────────────────────────────────────────────────────────
// Bug fix: there were two conflicting listeners on this button.
// Combined into one: fetches from MealDB and redirects to detail page.
document.getElementById('randomrecipe').addEventListener('click', async () => {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        const meal = data.meals[0];
        sessionStorage.setItem('randomMeal', JSON.stringify(meal));
        window.location.href = 'recipe-detail.html?random=true';
    } catch (err) {
        // Fallback: show a random local recipe if the API fails
        const randomIndex = Math.floor(Math.random() * recipeData.length);
        displayRecipes([recipeData[randomIndex]]);
    }
});

// ─── Dark Mode ────────────────────────────────────────────────────────────────
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// ─── Add Recipe ───────────────────────────────────────────────────────────────
// Bug fix: newIngredients and newDirections fields now exist in index.html.
document.getElementById('addRecipeButton').addEventListener('click', () => {
    const name        = document.getElementById('newName').value.trim();
    const image       = document.getElementById('newImg').value.trim();
    const description = document.getElementById('newDesc').value.trim();
    const category    = document.getElementById('newCategory').value;
    const ingredients = document.getElementById('newIngredients').value.trim();
    const directions  = document.getElementById('newDirections').value.trim();

    if (!name || !image || !description || !category || !ingredients || !directions) {
        alert('Please fill in all fields to add a new recipe.');
        return;
    }

    const newRecipe = {
        id: Date.now(),
        name,
        image,
        description,
        category,
        ingredients: ingredients.split('\n').map(s => s.trim()).filter(Boolean),
        directions:  directions.split('\n').map(s => s.trim()).filter(Boolean)
    };

    recipeData.push(newRecipe);
    displayRecipes(recipeData);

    // Clear form
    ['newName','newImg','newDesc','newCategory','newIngredients','newDirections']
        .forEach(id => document.getElementById(id).value = '');
});


