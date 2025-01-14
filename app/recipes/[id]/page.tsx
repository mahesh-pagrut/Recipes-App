/* eslint-disable @next/next/no-img-element */
import Back from "@/components/back";
import { Recipe } from "@/types/recipe";
import { type Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Read route params
  const id = (await params).id;
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipe: Recipe = await res.json();

  return {
    title: recipe.name
  };
}

export default async function RecipePage({ params }: Props) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipe = await res.json();

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-6 md:px-8">
        {/* Back Button */}
        <Back />

        {/* Recipe Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full md:w-1/3 rounded-lg shadow-lg border border-gray-200"
          />
          <div className="md:w-2/3 space-y-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">{recipe.name}</h1>
            <p className="text-lg text-gray-600">
              <span className="font-semibold">{recipe.cuisine}</span> ·{" "}
              <span className="font-semibold">{recipe.difficulty}</span> ·{" "}
              <span className="font-semibold">{recipe.caloriesPerServing} calories</span> per serving
            </p>
            <div className="flex items-center text-yellow-500">
              <span className="text-2xl font-semibold">{recipe.rating}</span>
              <span className="ml-2 text-sm text-gray-600">({recipe.reviewCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Recipe Details */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recipe Details</h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong className="font-medium">Prep Time:</strong> {recipe.prepTimeMinutes} minutes
            </li>
            <li>
              <strong className="font-medium">Cook Time:</strong> {recipe.cookTimeMinutes} minutes
            </li>
            <li>
              <strong className="font-medium">Servings:</strong> {recipe.servings}
            </li>
            <li>
              <strong className="font-medium">Meal Type:</strong> {recipe.mealType.join(", ")}
            </li>
          </ul>
        </div>

        {/* Ingredients */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {recipe.ingredients.map((ingredient: string, index: number) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {recipe.instructions.map((step: string, index: number) => (
              <li key={index} className="mb-2">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
