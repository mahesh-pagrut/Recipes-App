/* eslint-disable @next/next/no-img-element */
import { Recipe } from "@/types/recipe";
// import Image from "next/image";
import Link from "next/link";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {/* Recipe Image */}
      <img
        height={192}
        width={400}
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-48 object-cover"
      />
      {/* Recipe Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{recipe.name}</h3>
        <div className="text-gray-600 text-sm mb-4">
          <p>
            {recipe.cuisine} · {recipe.difficulty}
          </p>
          <p>{recipe.caloriesPerServing} calories per serving</p>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {recipe.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-blue-100 text-blbg-black rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Rating and Button */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <span className="font-bold text-yellow-500">{recipe.rating}</span> (
            {recipe.reviewCount} reviews)
          </div>
          <Link
            href={`/recipes/${recipe.id}`}
            className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-blue-700"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
}
