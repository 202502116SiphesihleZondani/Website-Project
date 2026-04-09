    // ─── Recipe Data ────────────────────────────────────────────────────────────
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
        name: "Mega Cheese Toastie",
        // FIX: was "Cheese Toast.webp" which didn't exist — using image1.webp (available in repo)
        image: "image1.webp",
        description: "The ultimate comfort food, featuring layers of mature cheddar, mozzarella melted to perfection",
        category: "lunch",
        ingredients: [
            "3 tablespoons unsalted butter, at room temperature",
            "1/4 cup mayonnaise",
            "1/2 teaspoon smoked paprika",
            "Salt and freshly ground black pepper",
            "6 slices sourdough bread",
            "2 tablespoons cream cheese, at room temperature",
            "1/2 cup shredded Cheddar"
        ],
        directions: [
            "Preheat a skillet over medium heat. Mix the butter, mayo and paprika in a small bowl until well combined.",
            "Sprinkle with salt and pepper.",
            "Lightly butter one side of each of the bread slices with the mayo mixture.",
            "Add the cream cheese to the remaining mayo mixture and mix well.",
            "Spread some of the cream cheese mixture on one side of each of the bread slices.",
            "Distribute the Cheddar on the cream cheese-side of 3 of the bread slices.",
            "Place the remaining 3 bread slices on top.",
            "Place the sandwiches in the skillet and cook until golden on the bottom, about 3 minutes.",
            "Flip the sandwiches and place a heavy-bottomed skillet on top and cook until golden brown and the cheese is melted, about 4 minutes."
        ]
    },
    {
        id: 4,
        name: "Chicken Burgers",
        // FIX: was a Bing search page URL — replaced with direct image URL
        image: "https://www.tamingtwins.com/wp-content/uploads/2023/06/image-25.jpeg",
        description: "A sandwich with a chicken-based patty served between bun halves.",
        category: "lunch",
        ingredients: [
            "1 pound ground white meat chicken",
            "1½ cups coarse to fine fresh bread crumbs, divided",
            "1/2 cup low-fat milk",
            "2½ tablespoons grated sweet onion",
            "1/4 teaspoon cayenne pepper",
            "3/4 teaspoon coarse grained salt",
            "Cracked black pepper",
            "1 teaspoon olive oil"
        ],
        directions: [
            "Use ground white meat chicken. Grind it yourself in a food processor — remove all excess fat and cartilage from boneless, skinless chicken breast, cut into 1-inch cubes and pulse until coarsely chopped.",
            "Use fresh bread crumbs: tear bread into chunks and pulse in a food processor.",
            "Place chicken in a mixing bowl. Using a rubber spatula, fold in milk, 1/2 cup bread crumbs, onion, cayenne, salt and pepper. The mixture will be very wet.",
            "Place remaining 1 cup bread crumbs on a plate. Divide chicken into 4–5 portions and shape into patties. Coat each patty with bread crumbs.",
            "Heat olive oil in a large non-stick skillet over medium heat and fry patties until golden and cooked through, about 5 minutes per side.",
            "Serve immediately."
        ]
    },
    {
        id: 5,
        name: "Chicken Bacon Ranch Panini",
        // FIX: was a Bing search page URL — using the actual image file from the repo
        image: "chicken-bacon-ranch.webp",
        description: "Comforting, hearty and quick to prepare hot pressed sandwich.",
        category: "lunch",
        ingredients: [
            "2 chicken breasts, each cut in half through the middle",
            "4 tablespoons butter, softened",
            "1 tablespoon rapeseed oil",
            "Spicy mustard, for spreading",
            "6 slices crusty French bread",
            "Ranch dressing, homemade or bottled, for spreading",
            "6 slices sharp Cheddar",
            "6 slices cooked bacon"
        ],
        directions: [
            "Fry the chicken breasts in 1 tablespoon butter and the rapeseed oil in a skillet over medium-high heat until done in the middle, about 8 minutes. Set aside.",
            "To assemble the sandwiches, spread a generous amount of mustard on half of the bread slices. Spread ranch dressing on the other half.",
            "On the ranch-covered slices, place a slice of cheese, a piece of chicken, 2 slices of bacon and a second slice of cheese.",
            "Top each with the mustard-covered slice of bread. Butter the outsides of the bread generously, then grill in a panini maker (or press in a skillet with a heavy pan on top).",
            "Slice the sandwiches in half and serve immediately."
        ]
    },
    {
        id: 6,
        name: "Macaroni Cheese with Ham",
        // Using the local image file from the repo
        image: "mac-cheese-ham.jpg",
        description: "Comfort food consisting of tender pasta noodles in a velvety cheese sauce.",
        category: "lunch",
        ingredients: [
            "500g cavatappi or macaroni",
            "45g butter",
            "45g plain flour",
            "250ml chicken stock",
            "375ml whole milk",
            "Freshly ground black pepper",
            "A few grates nutmeg",
            "125g grated Gruyere cheese",
            "125g grated white sharp Cheddar cheese",
            "2 tbsp mustard",
            "125g French ham, finely chopped"
        ],
        directions: [
            "Bring a large pot of salted water to a boil and add the pasta. Cook pasta to just shy of al dente.",
            "Heat a saucepan with butter over medium heat, whisk in flour and cook for 1 minute.",
            "Whisk in stock then milk and allow the sauce to thicken.",
            "Season with salt, pepper and nutmeg. Stir in cheeses in a figure eight motion.",
            "Stir in mustard and ham and remove the sauce from heat.",
            "Drain pasta and combine with sauce."
        ]
    },
    {
        id: 7,
        name: "Spaghetti Bolognese",
        image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        id: 8,
        name: "Beef Stew and Rice",
        // FIX: was a local Windows path — replaced with a public placeholder image
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop",
        description: "A hearty comfort food classic.",
        category: "dinner",
        ingredients: [
            "2 lbs beef chuck, cut into 1-inch cubes",
            "1 tbsp olive oil",
            "1 large onion, diced",
            "3 cloves garlic, minced",
            "4 cups beef broth",
            "2 cups water",
            "3 carrots, sliced",
            "2 potatoes, cubed",
            "1 tsp thyme",
            "1 tsp rosemary",
            "Salt and pepper to taste",
            "2 cups cooked rice"
        ],
        directions: [
            "Heat the olive oil in a large pot over medium-high heat. Add the beef cubes in batches and brown on all sides.",
            "Add the diced onion and minced garlic, sautéing until soft and fragrant, about 3 minutes.",
            "Return the beef to the pot along with the broth, water, carrots, potatoes, thyme, and rosemary. Bring to a boil, then reduce heat, cover, and simmer for 1.5–2 hours until the beef is tender.",
            "Season with salt and pepper to taste.",
            "Ladle the hot stew over cooked rice and garnish with chopped parsley if desired."
        ]
    },
    {
        id: 9,
        name: "Grilled Moroccan Chicken",
        // FIX: was a local Windows path — replaced with a public placeholder image
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&auto=format&fit=crop",
        description: "Flavorful, aromatic dish inspired by the bold spices and cooking traditions of Morocco.",
        category: "dinner",
        ingredients: [
            "1½ to 1¾ lbs boneless skinless chicken breasts",
            "¼ cup extra-virgin olive oil",
            "1 teaspoon salt",
            "1 teaspoon sugar",
            "3 cloves garlic, minced",
            "2 teaspoons paprika",
            "1 teaspoon ground cumin",
            "½ teaspoon ground coriander",
            "¼ teaspoon ground ginger",
            "¼ teaspoon ground turmeric",
            "¼ teaspoon ground cinnamon",
            "⅛ teaspoon cayenne pepper"
        ],
        directions: [
            "Place chicken breasts between 2 pieces of parchment paper and pound to an even ½-inch thickness.",
            "Mix all ingredients except chicken together in a small bowl. Add chicken to a zip-lock bag with the marinade, press out air, seal, and massage to coat evenly.",
            "Refrigerate for at least 5 hours or overnight.",
            "Preheat grill to high. Grill chicken, covered, for 2–3 minutes per side. Do not overcook."
        ]
    },
    {
        id: 10,
        name: "Blackened Catfish with Mango Avocado Salsa",
        // FIX: was a local Windows path — replaced with a public placeholder image
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop",
        description: "A vibrant dish combining deep smoky heat with cool tropical freshness.",
        category: "dinner",
        ingredients: [
            "2 teaspoons dried oregano",
            "2 teaspoons ground cumin",
            "2 teaspoons paprika",
            "2¼ teaspoons pepper, divided",
            "¾ teaspoon salt, divided",
            "4 catfish fillets (6 oz each)",
            "1 medium mango, peeled and cubed",
            "1 medium ripe avocado, peeled and cubed",
            "⅓ cup finely chopped red onion",
            "2 tablespoons minced fresh cilantro",
            "2 tablespoons lime juice",
            "2 teaspoons olive oil"
        ],
        directions: [
            "Combine the oregano, cumin, paprika, 2 teaspoons pepper and ½ teaspoon salt; rub over fillets. Refrigerate for at least 30 minutes.",
            "Meanwhile, combine the mango, avocado, red onion, cilantro, lime juice and remaining salt and pepper. Chill until serving.",
            "In a large cast-iron skillet, cook fillets in oil over medium heat until fish flakes easily with a fork, 5–7 minutes on each side. Serve with salsa."
        ]
    },
    {
        id: 11,
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
            "Whisk together the flour, baking soda, and salt. Gradually blend into the wet mixture.",
            "Stir in the chocolate chips.",
            "Drop by rounded spoonfuls onto ungreased cookie sheets and bake for 10–12 minutes or until golden brown."
        ]
    },
    {
        id: 12,
        name: "Raspberry Mousse",
        // FIX: was a local Windows path — replaced with a public placeholder image
        image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=600&auto=format&fit=crop",
        description: "Light, tangy whipped raspberry treat with a silky texture.",
        // FIX: was "cateegory" (typo) — fixed to "category"
        category: "dessert",
        ingredients: [
            "2 cups fresh raspberries",
            "1/2 cup sugar",
            "1 tablespoon lemon juice",
            "1½ teaspoons unflavored gelatin",
            "1/4 cup cold water",
            "1 cup heavy whipping cream",
            "Fresh mint leaves, optional"
        ],
        directions: [
            "Place the raspberries in a food processor; puree, then strain and discard seeds. Transfer puree to a large bowl. Stir in sugar and lemon juice.",
            "Sprinkle gelatin over cold water in a small saucepan; let stand 1 minute. Heat over low heat, stirring until dissolved. Stir into raspberry mixture.",
            "Beat cream on high speed until foamy. Gradually fold into raspberry mixture.",
            "Spoon into dessert dishes. Cover and refrigerate until set, 1–2 hours. Garnish with mint and additional raspberries if desired."
        ]
    },
    {
        id: 13,
        name: "Vanilla Pudding",
        // FIX: was a local Windows path — replaced with a public placeholder image
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&auto=format&fit=crop",
        description: "Smooth and sweet classic custard.",
        category: "dessert",
        ingredients: [
            "1/3 cup white sugar",
            "3 tablespoons cornstarch",
            "1/2 teaspoon salt",
            "2 cups whole milk",
            "1 tablespoon butter",
            "1 teaspoon vanilla extract"
        ],
        directions: [
            "Mix sugar, cornstarch, and salt together in a medium heavy-bottomed saucepan.",
            "Gradually whisk in milk until smooth. Bring to a boil over medium heat, whisking often, about 8 minutes. Once boiling, whisk constantly for 1 minute.",
            "Remove from heat, and stir in butter and vanilla. Pour into serving dishes and chill."
        ]
    },
    {
        id: 14,
        name: "Oreo Cookie Balls",
        // FIX: was a local Windows path — replaced with a public placeholder image
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format&fit=crop",
        // FIX: was "descripttion" (typo) — fixed to "description"
        description: "Crunchy Oreo and creamy bites dipped in chocolate.",
        category: "dessert",
        ingredients: [
            "1 (16 oz.) package of Oreo cookies",
            "1 (8 oz.) package of cream cheese",
            "1 (24 oz.) package of white chocolate chips",
            "1 (12 oz.) package of semisweet chocolate chips (optional)"
        ],
        directions: [
            "Crush cookies in a blender or food processor until fine. Add cream cheese and blend until the mixture holds together.",
            "Roll into 1-inch balls and arrange on a baking sheet lined with wax paper. Chill for one hour.",
            "Melt white chocolate according to microwave directions, or in a double boiler. Dip the balls in melted chocolate and place in a single layer on the baking sheet.",
            "Refrigerate for an additional hour, or until chocolate is firm."
        ]
    },
    {
        id: 15,
        name: "Pecan Pie Brownies",
        // FIX: was a local Windows path — replaced with a public placeholder image
        image: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?w=600&auto=format&fit=crop",
        description: "Nutty, caramel-rich pecan topping over a rich chocolate brownie base.",
        category: "dessert",
        ingredients: [
            "Unsalted butter (for fudgy richness)",
            "Dark or bittersweet chocolate chips",
            "Brown sugar (light or dark)",
            "Granulated sugar",
            "Large eggs",
            "Vanilla extract",
            "Kosher salt",
            "Unsweetened cocoa powder",
            "All-purpose flour",
            "For topping: brown sugar, eggs, vanilla, melted butter, bourbon",
            "Chopped pecans"
        ],
        directions: [
            "Make brownie batter: melt chocolate chips in warm butter, then whisk in sugar, eggs, vanilla, and salt. Add cocoa and flour; mix until combined. Bake until set.",
            "Make pecan pie topping: while brownies bake, whisk together brown sugar, eggs, vanilla, melted butter, and bourbon. Stir in pecans.",
            "Pour the pecan topping over the brownie base and bake for an additional 25 minutes until the two layers have set.",
            "Cool completely before slicing. Optionally drizzle with melted dark chocolate or sprinkle with flaky sea salt."
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
                <img src="${recipe.image}" alt="${recipe.name}" onerror="this.src='https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&auto=format&fit=crop'">
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
document.getElementById('randomrecipe').addEventListener('click', async () => {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        const meal = data.meals[0];
        sessionStorage.setItem('randomMeal', JSON.stringify(meal));
        window.location.href = 'recipe-detail.html?random=true';
    } catch (err) {
        const randomIndex = Math.floor(Math.random() * recipeData.length);
        displayRecipes([recipeData[randomIndex]]);
    }
});

// ─── Dark Mode ────────────────────────────────────────────────────────────────
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// ─── Add Recipe ───────────────────────────────────────────────────────────────
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

    ['newName','newImg','newDesc','newCategory','newIngredients','newDirections']
        .forEach(id => document.getElementById(id).value = '');
});
