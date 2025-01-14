import Header from "@/components/header";
import RecipeCard from "@/components/recipe-card";
import { Recipe } from "@/types/recipe";

// app/recipes/page.js
export default async function RecipesPage() {
  const res = await fetch("https://dummyjson.com/recipes");
  const { recipes } = await res.json();

  return (
    <div>
        <div className="mb-14">
        <Header />
        </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Recipes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe: Recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}
