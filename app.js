    // ─── Recipe Data ────────────────────────────────────────────────────────────
// Bug fix: image paths were absolute Windows local paths (C:\Users\Admin\...)
// Fixed to use relative paths pointing to images in the project folder.
// The Chocolate Chip Cookies image was missing from the repo entirely —
// replaced with a reliable public placeholder.
let recipeData = [
    {
        id: 1,
        1.name: "Pancakes",
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
        
      2.name:"Mega cheese Toastie",
        image:"https://www.bing.com/images/search?view=detailV2&ccid=aJT%2fJ649&id=AB6FC9A04FD21FB7949E44B29A149142B19E9159&thid=OIP.aJT_J649Jd3R9YUu2XNr_wHaE8&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.6894ff27ae3d25ddd1f5852ed9736bff%3frik%3dWZGesUKRFJqyRA%26riu%3dhttp%253a%252f%252fignitemag.co.uk%252fwp-content%252fuploads%252f2024%252f02%252fLagomchef-2-jpg.webp%26ehk%3dAXMjBbx9Hh7M3U6wAtEMIpdt8KX8zrAeLbGFpEc7nI8%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=667&expw=1000&q=MEGA+CHEESE+TOASTIE&FORM=IRPRST&ck=5EB1034B81FA4A72465B5AEE152688A9&selectedIndex=11&itb=0",
        description:"The ultimate comfort food,featuring layers of mature cheddar,mozzarella melted to perfection",
        category:"lunch", 
        Ingredients: [
            "4 tablespoons unsalted butter, at room temperature",
            "1/4 cup mayonnaise",
            "1/2 teaspoon smoked paprika",
            "Salt and freshly ground black pepper",
            "8 slices sourdough bread",
            "2 tablespoons cream cheese, at room temperature",
            "1 cup shredded Cheddar",
        ],
        directions:[
            "Preheat a skillet over medium heat. Mix the butter, mayo and smoked paprika in a small bowl until well combined.",
            "Sprinkle with salt and pepper.",
            "Lightly butter one side of each of the bread slices with the mayo mixture.",
            "Add the cream cheese to the remaining mayo mixture and mix well to combine.",
            "Spread some of the cream cheese mixture on the other side of each of the bread slices.",
            "Distribute the Cheddar on the cream cheese-side of 4 of the bread slices.",
            "Place the remaining 4 bread slices on top.",
            "Place the sandwiches in the skillet and cook until golden on the bottom, about 3 minutes.",
            "Flip the sandwiches and place a heavy-bottomed skillet on top of the sandwiches and cook until golden brown and the cheese is melted, about 4 minutes.",
        ]

        3.name:"Chicken Burgers",
        image:"https://www.bing.com/images/search?view=detailV2&ccid=fkHNaA%2bF&id=3EF850FD514283D6163EA544C3B76763FA7EDB25&thid=OIP.fkHNaA-FZYcZEC3N-uBuAgHaJ2&mediaurl=https%3a%2f%2fwww.tamingtwins.com%2fwp-content%2fuploads%2f2023%2f06%2fimage-25.jpeg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.7e41cd680f85658719102dcdfae06e02%3frik%3dJdt%252b%252bmNnt8NEpQ%26pid%3dImgRaw%26r%3d0&exph=1597&expw=1200&q=chicken+burger&FORM=IRPRST&ck=5F7E7CD2195B0549DBEA1D2BF4A19BC1&selectedIndex=3&itb=0",
        description:"sandwich with a chicken-based patty served between bun halves",
        category:"lunch", 
        Ingredients:[
            "1 pound ground white meat chicken",
            "2 cups coarse to fine fresh bread crumbs, divided (not canned)",
            "1/2 cup low-fat milk",
            "3 tablespoons grated sweet onion (or finely, finely minced)",
            "1/4 teaspoon cayenne pepper",
            "3/4 teaspoon coarse grained salt",
            "Cracked black pepper",
            "1 teaspoon olive oil",
        ],
        directions:[,
            "Be sure to use ground white meat chicken.",
            "If you're buying your ground chicken from the grocery story, ring the bell and ask them if they've got what you're looking for or if they'll grind some chicken breast for you.",
            "You can also grind it yourself in a food processor.",
            "Remove all excess fat and cartilage from boneless, skinless chicken breast and tenders, cut into 1-inch cubes and pulse until coarsely chopped.",
            "Use fresh bread crumbs.",
            "It only takes a few extra minutes.",
            "Remove crusts from good bread or don't remove the crusts, tear into chunks and pulse in a mini chopper or food processor. Make a giant batch and freeze them so next time you can skip this step.",
            "Place chicken in a mixing bowl. Using a rubber spatula, fold in milk, 1/2 cup bread crumbs, onion, cayenne, salt and pepper.",
            "The mixture will be very wet which means it will be a tiny bit icky forming it into patties but forge ahead.",
            "Place remaining 1 1/2 cups bread crumbs on a dinner plate or cookie sheet.",
            "Divide chicken meat into 4 or 5 piles (you decide which portion size is best for you) and using your hands, shape into patties.",
            "Coat each patty with bread crumbs. Heat olive oil in a large non-stick skillet over medium heat and fry patties until golden and cooked through, about 5 minutes per side.",
            "Serve immediately.",
     ]
        
      4.name:"Chicken Bacon Ranch Panini",
        image:"https://www.bing.com/images/search?view=detailV2&ccid=Z5BVF2Jf&id=5D31950E14B0FBA8D62B21399BCCAA5E6454C0AC&thid=OIP.Z5BVF2Jfp-ESube2XHtn-gHaEK&mediaurl=https%3a%2f%2fheidishomecooking.com%2fwp-content%2fuploads%2fChicken-Bacon-Ranch-Paninis-scaled.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.67905517625fa7e112b9b7b65c7b67fa%3frik%3drMBUZF6qzJs5IQ%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1923&q=Chicken+Bacon+Ranch+Panini&FORM=IRPRST&ck=24D9831B4B933F9E7B1E0B478A951A1B&selectedIndex=5&itb=0",
        description:"comforting ,hearty and quick to prepare hot pressed sandwich",
        category: "lunch",
        Ingredients:[
                "2 chicken breasts, each cut in half through the middle to make 2 thinner breasts"<
                "5 tablespoons butter, softened",
                "1 tablespoon rapeseed oil",
                "Spicy mustard, for spreading",
                "8 slices crusty French bread",
                "Ranch dressing, homemade or bottled, for spreading",
                "8 slices sharp Cheddar",
                "8 slices cooked bacon",
        ],
          directions:[
               "Fry the chicken breasts in 1 tablespoon butter and the rapeseed oil in a skillet over medium-high heat until done in the middle, about 8 minutes. Set aside.",
                "To assemble the sandwiches, spread a generous amount of mustard on half of the bread slices. Spread a generous amount of ranch dressing on the other half. (Definitely be generous; when the sandwiches cook, these will turn into more of a "sauce.")",
                "On the ranch-covered slices of bread, place a slice of cheese, a piece of chicken, 2 slices of bacon and a second slice of cheese.",
                "Top each with the mustard-covered slice of bread. Butter the outsides of the bread generously with the remaining 4 tablespoons butter, then grill in a panini maker. (If you do not have a panini maker, you can grill the sandwiches in a skillet, laying a heavy skillet on top of the sandwiches to press them together. Turn to grill the other side in the same way.)",
                "Slice the sandwiches in half and gobble them down immediately",
            ]
        
        5.name:"Macaroni cheese with ham",
        image:"https://www.tasteandtellblog.com/wp-content/uploads/2022/03/Mac-Cheese-Ham-1.jpg",
        description:"comfort food dish consisting of tender pasta noodles enveloped in a velvety sheese sauce",
        category: "lunch",
        Ingredients:[
                "500g cavatappi (hollow corkscrew-shaped pasta) or macaroni",
                "45g butter",
                "45g plain flour",
                "250ml chicken stock",
                "375ml whole milk",
                "Freshly ground black pepper",
                "A few grates nutmeg",
                "125g cup grated Gruyere cheese",
                "125g grated white sharp Cheddar cheese",
                "2 tbsps Dijon mustard",
                "125g French ham, deli sliced, finely chopped",
        ],
        directions:[
            "Bring a large pot of salted water to a boil and add the pasta. Cook pasta to just shy of al dente.",
            "Heat a saucepan with butter over medium heat, whisk in flour and cook for 1 minute.",
            "Whisk in stock then milk and allow the sauce to thicken.",
            "Season with salt, pepper and nutmeg. Stir in cheeses in a figure eight motion.",
            "Stir in the Dijon and ham and remove the sauce from heat.",
            "Drain pasta and combine with sauce.",
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


