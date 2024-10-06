// MealDB API Fetch and display on the UI
document.getElementById('mealdbForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the user's input for the dish name
    let userinput = document.getElementById("userinput").value;
    
    // MealDB API URL
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    
    // Fetch the recipe data from the API
    fetch(url + userinput)
    .then((response) => response.json())
    .then((data) => {
        // Check if a recipe is found
        if (data.meals) {
            let recipe = data.meals[0];
            document.getElementById("mealdb-result").innerHTML = `
                <div class="recipe-card">
                    <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
                    <h3>${recipe.strMeal}</h3>
                    <p><strong>Category:</strong> ${recipe.strCategory}</p>
                    <p><strong>Area:</strong> ${recipe.strArea}</p>
                    <p>${recipe.strInstructions.substring(0, 100)}...</p>
                </div>
            `;
        } else {
            document.getElementById("mealdb-result").innerHTML = "<p>Sorry, no recipe found for that dish!</p>";
        }
    })
    .catch((error) => {
        console.error("Error fetching the recipe:", error);
        document.getElementById("mealdb-result").innerHTML = "<p>An error occurred while fetching the recipe.</p>";
    });
});
