const recipes = [
    {recipe_name: "Chicken Taquitos"},
    {recipe_name: "Chicken Alfredo"},
]

const ingredients=[
    {ingredient_name: "chicken", ingredient_unit: "kilos"},
    {ingredient_name: "pasta", ingredient_unit: "lbs"},
    {ingredient_name: "ham", ingredient_unit: "slices"},
    {ingredient_name: "chicken", ingredient_unit: "kilos"},
]

const step_ingredients=[
    // Chicken Taquitos
    {step_id:2, ingredient_id:1, quantity:1},
    {step_id:3, ingredient_id:2, quantity:1.5},

    // Chicken Fettuccine Alfredo
    {step_id:5, ingredient_id:4, quantity:1},
    {step_id:5, ingredient_id:5, quantity:0.4},
    {step_id:5, ingredient_id:3, quantity:2},
]

const steps=[
    // Chicken Taquitos
    {step_text:"heat skillet on stove at medium-high temp", step_number:1, recipe_id:1},
    {step_text:"cook chicken on skillet, flip after 10-15 min for another 10 min", step_number:2, recipe_id:1},

    // Chicken Fettuccine Alfredo
    {step_text:"heat oven", step_number:1, recipe_id:2},
    {step_text:"cook chicken in the oven on 500 degrees for 20 minutes", step_number:2, recipe_id:2},
    {step_text:"add sauce to pasta", step_number:3, recipe_id:2},

]

exports.seed = async function(knex){
   await knex("recipes").insert(recipes)
   await knex("ingredients").insert(ingredients)
   await knex("steps").insert(steps)
   await knex("step_ingredients").insert(step_ingredients)
}  