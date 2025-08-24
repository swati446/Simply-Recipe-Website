document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const recipes = document.querySelectorAll(".recipe");

  function filterRecipes() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    recipes.forEach((recipe) => {
      const name = recipe.getAttribute("data-name")?.toLowerCase() || "";
      const content = recipe.innerText.toLowerCase();

      if (name.includes(searchTerm) || content.includes(searchTerm)) {
        recipe.style.display = "block";
      } else {
        recipe.style.display = "none";
      }
    });
  }
searchInput.addEventListener("input", filterRecipes);


  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    filterRecipes();
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      filterRecipes();
    }
  });
});
searchInput.addEventListener("input", filterRecipes);


  