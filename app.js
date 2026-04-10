
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
        name: "Strawberries",
        image: "https://www.tasteofhome.com/wp-content/uploads/2018/06/Berry-Smoothie-Bowl_EXPS_JMZ18_224489_B03_08_5b.jpg?fit=750%2C750",
        category: "breakfast",
        ingredients: [ 
"Frozen unsweetened strawberries",
"Frozen unsweetened raspberries",
"Sugar",
"Ice cubes",
"Optional toppings: sliced fresh strawberries, fresh raspberries, chia seeds, fresh pumpkin seeds, unsweetened shredded coconut and sliced almonds",
        ],
Directions: [
"Blend everything together",
"Place the milk, berries and sugar in a blender; cover and blend until smooth. Add ice cubes; cover and blend again until smooth and creamy.",
"Editor’s Tip: Add the milk 1/4 cup at a time to ensure a thick consistency.",
" Add toppings",
"Divide the smoothie mixture between two bowls. Then, top with your desired toppings. It helps to prep toppings ahead of time so your smoothie bowl doesn’t get warm before you top it",
"Smoothie Bowl Variations",
"There are endless smoothie bowl combinations. Add some extra protein to your smoothie bowl by including a handful of spinach and a scoop of protein powder with your mix."
]
    },
{
    id: 3,
    name: "Pie",
    image: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/recipe_pics_v2/italian_easter_pie_pizza_rustica_aka_ham_pie.jpg",
    category: "breakfast",
    ingredients: [ 
        "6 cups sliced peeled Golden Delicious apples",
        "3/4 cup plus 2 tablespoons apple juice, divided",
        "3/4 cup sugar",
        "1 teaspoon ground cinnamon",
        "1/2 teaspoon apple pie spice",
        "2 tablespoons cornstarch",
        "1/4 teaspoon vanilla extract",
        "crust:",
        "2-1/2 cups all-purpose flour",
        "1 teaspoon salt",
        "1 cup cold butter",
        "6 to 8 tablespoons ice water",
        "1 large egg, beaten",
        "Vanilla ice cream, optional"
    ],
    directions: [
        "In a large saucepan, combine apples, 3/4 cup apple juice, sugar, cinnamon and apple pie spice; bring to a boil over medium heat, stirring occasionally.",
        "Combine cornstarch and remaining apple juice; add to saucepan.",
        "Return to a boil, stirring constantly.",
        "Cook and stir 1 minute more or until thickened.",
        "Remove from the heat. Stir in vanilla.",
        "Cool to room temperature, stirring occasionally.",
        "For crust, combine flour and salt; cut in the butter until mixture is crumbly.",
        "Gradually add water, 1 tablespoon at a time, tossing with a fork until dough can be formed into a ball.",
        "Divide in 2 portions, making 1 piece slightly larger. On a lightly floured surface, roll out larger portion.",
        "Line a 9-in. pie plate with bottom crust; trim even with edge of plate, Add filling.",
        "Roll out remaining dough to fit top of pie; place over filling. Trim, seal and flute edges; if desired, brush with beaten egg. Cut slits in top.",
        "Bake at 400° for 40-45 minutes or until crust is golden brown and apples are tender.",
        "Cool on a wire rack. If desired, serve with vanilla ice cream."
    ]
},
{
    id: 4,
    name: "Soup",
        image: "https://www.tasteofhome.com/wp-content/uploads/2024/08/Carrot-Ginger-Soup_EXPS_TOHD24_158298_LeticiaAlmeida_09.jpg?fit=750%2C750",
        category: "breakfast",
        ingredients: [
             " 1 tablespoon olive oil",
"1 small onion, chopped",
"1 garlic clove, minced",
"3 teaspoons minced fresh gingerroot",
"4 large carrots, peeled and chopped",
"3 cups vegetable broth",
"2 teaspoons grated lemon zest",
"1/2 teaspoon salt",
"1/4 teaspoon ground black pepper",
"2 tablespoons fresh lemon juice",
"Additional lemon zest, optional ",
        ],
Directions: [
      "In a Dutch oven or stockpot, heat oil over medium heat. ",
      "Add onion; cook and stir until tender, 4-5 minutes. ",
     "Add garlic and ginger; cook 1 minute longer.", 
      "Stir in carrots, broth, zest, salt and pepper; bring to a boil.",
     "Reduce heat; simmer, covered, until carrots are tender, 10-12 minutes.",
      "Pulse mixture in a blender or with an immersion blender to desired consistency; stir in lemon juice. ",
      "If desired, garnish with additional lemon zest.",
]
    },
{
        id: 5,
        name: "Croissant",
        image: "https://i.pinimg.com/736x/29/0c/21/290c2110ae86567040d82a7c5c8e57d8.jpg",
        category: "breakfast",
        ingredients: [
"1/2 cup dry bread crumbs",
"1/2 teaspoon salt",
"1/2 teaspoon paprika",
"1/2 teaspoon lemon-pepper seasoning",
"1/2 cup all-purpose flour",
"1 large egg, beaten",
"3/4 pound cod fillets, cut into 1-inch strips",
"Butter-flavored cooking spray",
        ],
Directions: [
        "Preheat oven to 400°.",
         "In a shallow bowl, mix bread crumbs and seasonings.",
          "Place flour and egg in separate shallow bowls.",
           "Dip fish in flour to coat both sides; shake off excess. ",
          "Dip in egg, then in crumb mixture, patting to help coating adhere.",
"Place on a baking sheet coated with cooking spray; spritz fish with butter-flavored cooking spray. ",
"Bake 10-12 minutes or until fish just begins to flake easily with a fork, turning once.",
]
    },
    {
        id: 6,
        name: "Mozzarella Sticks",
        image: "https://hips.hearstapps.com/hmg-prod/images/mozzarella-sticks-4x3-6739-1-68c339c67ed05.jpeg?crop=0.9998840579710144xw:1xh;center,top&resize=1800:*",
        category: "breakfast",
        ingredients: [
"1/2 cup all-purpose flour",
"3 large eggs",
"3 Tbsp. milk",
"2 cups panko breadcrumbs",
"1 Tbsp. dried parsley",
"16 mozzarella string cheese sticks, cut in half crosswise",
"Canola or vegetable oil, for frying",
"1 cup marinara sauce, warmed",
],

Direction: [
       "Place the flour in a shallow bowl. In another bowl, whisk together the eggs and milk.",
        "In a third bowl, combine the panko breadcrumbs and parsley. ",
"Dredge the mozzarella sticks in the flour, shaking off any excess. ",
"Dip each stick in the egg mixture, then coat in the breadcrumb mixture, pressing gently to help the crumbs adhere.", 
"Repeat the egg and breadcrumb steps once more for a second coating.",
 "Place the coated sticks on a tray or baking sheet. ",
"Place the tray in the freezer and chill until firm,  20 to 30 minutes.",
"Heat 1 ½ inches oil in a large skillet over medium heat until it reaches 180C on a deep-fry thermometer.",
 "When hot, add 8 mozzarella sticks. Watch closely and turn over to evenly brown, cooking for less than 1 minute. ",
 "Do not allow the cheese to bubble and leak. Use a slotted spoon or spider to remove the mozzarella sticks to a paper towel-lined plate and repeat with the remaining mozzarella sticks, working in batches of 8 sticks at a time.", 
"Serve the mozzarella sticks with the warm marinara sauce ",
]
    },
    {
        id: 7,
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
        id: 8,
        name: "Mega Cheese Toastie",
        // FIX: was "Cheese Toast.webp" which didn't exist — using image1.webp (available in repo)
        image: "https://ignitemag.co.uk/wp-content/uploads/2024/02/Lagomchef-2-820x394.webp",
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
        id: 9,
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
        id: 10,
        name: "Chicken Bacon Ranch Panini",
        // FIX: was a Bing search page URL — using the actual image file from the repo
        image: "https://www.pumpkinnspice.com/wp-content/uploads/2016/11/chicken-bacon-ranch-panini-2.jpg",
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
        id: 11,
        name: "Macaroni Cheese with Ham",
        // Using the local image file from the repo
        image: "https://chocolatewithgrace.com/wp-content/uploads/2025/08/Mac-and-Cheese-with-Ham-CWG-11-1-of-1-1024x732.jpg",
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
        id: 12,
        name: "Spaghetti Bolognese",
        image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Classic Italian pasta dish with a rich meat sauce.",
        category: "dinner",
        ingredients: [
            "450 ground beef",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 can (450 g) tomato sauce",
            "1 can (410 g) diced tomatoes",
            "2 tbsp tomato paste",
            "1 tsp dried oregano",
            "1 tsp dried basil",
            "Salt and pepper to taste",
            "340 g spaghetti",
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
        id: 13,
        name: "Beef Stew and Rice",     
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwUTry9-3msWd_NWjZ12gfmcP92pmbK5_knL1O-LXkYWPw2X9QrRvBJBB7NQoMPxg57s_y2vopOR2e5Hrtpuyf7LWN9lPK1247d55qOhDNhCuM4j0I82Ep-VGqpHMO_KnFZn3Jp_kvh5-Y5uy9HgLauvmF5xU6lFct-FnvFxa9h_-rGHr0jtmnb9EVd14/s1600/stew%20beef%204%20pn.png",
        description: "A hearty comfort food classic.",
        category: "dinner",
        ingredients: [
            "900g beef chuck, cut into 1-inch cubes",
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
        id: 14,
        name: "Grilled Moroccan Chicken",
        // FIX: was a local Windows path — replaced with a public placeholder image
        image: "https://www.cookingclassy.com/wp-content/uploads/2017/04/grilled-moroccan-chicken-7-768x1152.jpg",
        description: "Flavorful, aromatic dish inspired by the bold spices and cooking traditions of Morocco.",
        category: "dinner",
        ingredients: [
            "680g to 800g lbs boneless skinless chicken breasts",
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
        id: 15,
        name: "Blackened Catfish with Mango Avocado Salsa",
        // FIX: was a local Windows path — replaced with a public placeholder image
        image: "https://www.eatshinebloom.com/wp-content/uploads/2025/09/Whisk_6b97b8c3141946baeee4260e9cd9529cdr.jpeg",
        description: "A vibrant dish combining deep smoky heat with cool tropical freshness.",
        category: "dinner",
        ingredients: [
            "2 teaspoons dried oregano",
            "2 teaspoons ground cumin",
            "2 teaspoons paprika",
            "2¼ teaspoons pepper, divided",
            "¾ teaspoon salt, divided",
            "4 catfish fillets (170g each)",
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
        id: 16,
        name: "mashed potatoes and gravy",
        image: "https://cookswithsoul.com/wp-content/uploads/2024/12/mashed-potatoes-and-gravy-8-1024x1536.jpg",
        description: "Creamy mashed potatoes are an essential part of many cozy fall and winter meals",
        category: "dinner",
        ingredients:[
            "1.5kg medium potatoes, peeled",
            "1/8 teaspoon dried thyme",
            "2 teaspoons salt, divided",
            "1/2 cup butter",
            "3 garlic cloves, minced",
            "3/4 cup whole milk",
            "1/2 teaspoon pepper",
            "1/4 cup butter",
            "1/4 cup all-purpose flour",
            "2 cups unsalted chicken stock",
            "1/2 teaspoon salt",
            "1/4 teaspoon pepper"
        ],
        directions:[
            "Place potatoes and 1 teaspoon salt in a stock pot; add water to cover. Bring to a boil. Reduce heat; simmer, uncovered, until tender, 15-20 minutes. Drain and return to pan.",
            "Meanwhile, place butter and garlic in a small saucepan. Cook over medium heat until garlic is browned, about 1 minute; add milk. Heat until bubbles appear around the edge of the pan; keep warm.",
            "Mash potatoes while gradually adding milk mixture until desired consistency. Stir in remaining 1 teaspoon salt and pepper.",
            "For gravy, in a small saucepan, melt butter over medium heat. Whisk in flour until smooth, whisking constantly. Gradually whisk in broth, salt, pepper and thyme. Bring to a boil, stirring constantly; cook and stir until thickened, 1-2 minutes. Serve with potatoes."
        ]
    },
    {
        id: 17,
        name: "honey glazed sausage",
        image: "https://www.kitchenmomy.com/wp-content/uploads/2025/11/ettckxttslywttvqlw5v-1157x1536.webp",
        description: "honey glazed sausages and rosted sweet potatoes are perfect for a cozy meal ",
        category: "dinner",
        ingredients:[
            "4 sausages (sliced (chicken or beef))",
            "2 large sweet potatoes (cubed)",
            "2 tbsp olive oil",
            "3 tbsp honey",
            "2 garlic cloves (minced)",
            "1 tbsp soy sauce",
            "Salt & black pepper (to taste)",
            "Fresh parsley chopped (for garnish)"
        ],
        directions:[
            "Preheat oven to 200°C.",
            "Toss cubed sweet potatoes with olive oil, salt, and pepper.",
            "Spread on a baking sheet and roast for 20 minutes, flipping halfway.",
            "In a large pan, cook the sliced sausages over medium heat until browned on all sides.",
            "Remove and set aside.",
            "In the same pan, sauté garlic until fragrant.",
            "Stir in honey and soy sauce, simmering for 1-2 minutes.",
            "Add the sausages back to the pan, tossing to coat.",
            "Mix the roasted sweet potatoes with the glazed sausages.",
            "Garnish with fresh parsley and serve warm"
        ]
    },
    {
        id: 18,
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
            "Preheat the oven to 175°C.",
            "In a large bowl, cream together the butter and sugars until light and fluffy.",
            "Beat in the eggs one at a time, then stir in the vanilla extract.",
            "In another bowl, whisk together the flour, baking soda, and salt. Gradually blend the dry ingredients into the wet mixture.",
            "Stir in the chocolate chips.",
            "Drop by rounded spoonfuls onto ungreased cookie sheets and bake for 10–12 minutes or until golden brown."
        ]
    },
    {
        id: 19,
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
        id: 20,
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
        id: 21,
        name: "Oreo Cookie Balls",
        // FIX: was a local Windows path — replaced with a public placeholder image
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format&fit=crop",
        // FIX: was "descripttion" (typo) — fixed to "description"
        description: "Crunchy Oreo and creamy bites dipped in chocolate.",
        category: "dessert",
        ingredients: [
            "1 (450g) package of Oreo cookies",
            "1 (220g) package of cream cheese",
            "1 (680g) package of white chocolate chips",
            "1 (350g) package of semisweet chocolate chips (optional)"
        ],
        directions: [
            "Crush cookies in a blender or food processor until fine. Add cream cheese and blend until the mixture holds together.",
            "Roll into 1-inch balls and arrange on a baking sheet lined with wax paper. Chill for one hour.",
            "Melt white chocolate according to microwave directions, or in a double boiler. Dip the balls in melted chocolate and place in a single layer on the baking sheet.",
            "Refrigerate for an additional hour, or until chocolate is firm."
        ]
    },
    {
        id: 22,
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
