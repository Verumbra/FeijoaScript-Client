import {Recipe} from "../../slices/RecipeSlice.ts";

const TestRecipe: Recipe = {
    description: "This Lasagna Recipe is easy to make with a creamy ricotta cheese mixture, savory meat sauce, and mozzarella cheese. BONUS: it’s make-ahead and freezer-friendly!",
    descriptionTags: ["lasagna"],
    favoritedBy: [""],
    id: "asdftglkhi234542klkkjlpikkolmk",
    ingredientList: [
        {name: "Cheese Filling", ingredients: [{name: "ricotta cheese", ingredientID: "", amount: "15 oz."},
                {name: " egg", ingredientID: "", amount: "1 large"},
                {name: "mozzarella cheese", ingredientID: "", amount: "2 cups"},
                {name: "Parmesan cheese", ingredientID: "", amount: "¾ cup"},
                {name: "Italian seasoning", ingredientID: "", amount: "2 teaspoons"},
                {name: "salt", ingredientID: "", amount: "½ teaspoon"},
                {name: "pepper", ingredientID: "", amount: "¼ tsp"},]},
        {name: "Meat Sauce", ingredients: [{name: "olive oil", ingredientID: "", amount: "1 tablespoon"},
                {name: "yellow onion", ingredientID: "", amount: "1"},
                {name: "ground beef", ingredientID: "", amount: "¾ lb."},
                {name: "Italian sausage", ingredientID: "", amount: "¾ lb."},
                {name: "garlic", ingredientID: "", amount: "3 cloves"},
                {name: "chicken broth", ingredientID: "", amount: "½ cup"},
                {name: "marinara sauce", ingredientID: "", amount: "40 oz."},
                {name: "tomato paste", ingredientID: "", amount: "1 tablespoon"},
                {name: "hot sauce", ingredientID: "", amount: "1 teaspoon"},
                {name: "Worcestershire sauce", ingredientID: "", amount: "1 teaspoon"},
            ]},

        {name: "Lasagna", ingredients: [{name: "lasagna noodles", ingredientID: "", amount: "12"},
            {name:"mozzarella cheese", ingredientID: "", amount: "2.5 cups"},
            ],
        },
    ],
    instructions: [{name:"Prep Work", instructions:[{stepBody:"Combine the cheese filling ingredients in a medium bowl and set aside. Measure out remaining ingredients."},]},
        {name:"Make the Meat Sauce", instructions:[{stepBody:"Heat olive oil over medium heat and add the diced onions. Let them soften for 10 minutes. (This allows them to release a little sugar which is a nice offset to the acidity of the tomatoes.)"},
                {stepBody:"Add the ground beef and sausage and increase heat to medium-high. Use a spatula to break up the meat so that it’s very fine and crumbled. Cook for 8-10 minutes, or until cooked through. Add garlic during the last minute. Drain excess grease."},
                {stepBody:"Add the chicken broth and use a silicone spatula to “clean” the bottom and sides of the pot. Add the marinara sauce, tomato paste, hot sauce, and Worcestershire sauce. Bring to a boil, then reduce to a simmer. Cover partially and let the sauce simmer gently while you boil the pasta noodles."},]},
        {name:"Preheat Oven and Cook the Lasagna Noodles", instructions:[{stepBody:"Preheat oven to 375°."},
                {stepBody:"Begin boiling a large pot of salted pasta water for the lasagna noodles. Once a rapid boil is reached, cook the noodles to al dente according to package instructions. (Set a timer to ensure you don’t overcook them.) Gently stir with a wooden spoon throughout cooking to prevent the noodles from sticking. Drain and rinse with cold water until noodles are completely cool."},
                {stepBody:"Lay the cooled noodles flat on wax or parchment paper while you begin assembling the lasagna."},]},
        {name:"Assemble", instructions:[{stepBody: "Spread 1 heaping cup of meat sauce on the bottom of a 9 x 13-inch casserole dish. Next, add 4 lasagna noodles, overlapping them if needed.\n"},
                {stepBody:"Spread 1 heaping cup of meat sauce on the bottom of a 9 x 13-inch casserole dish. Next, add 4 lasagna noodles, overlapping them if needed.\n"},
                {stepBody:"Top with 4 more lasagna noodles, 1/3 of the ricotta cheese mixture, 1 ½ cups meat sauce."},
                {stepBody: "Finish with 4 more lasagna noodles, the rest of the ricotta mixture, and the rest of the meat sauce."},
                {stepBody: "Top with 2 ½ cups of Mozzarella cheese."},
                {stepBody: "Spray foil with nonstick cooking spray and place it spray-side-down on top of the baking dish to prevent the cheese from sticking to it."}]},
        {name:"Bake", instructions:[{stepBody: "Bake for 35 minutes. Remove cover and bake for 10 more minutes."},
                {stepBody: "Remove and garnish with fresh parsley. Let it sit for 15 minutes prior to serving to allow the layers to set. Serve with garlic bread with cheese."}]},
    ],
    isType: [],
    isVisible: false,
    name: "easy lasagna",
    ownedBy: "10001",
    recipeArchetype: ""

}



export default TestRecipe;