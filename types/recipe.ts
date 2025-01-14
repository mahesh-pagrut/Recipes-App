export type Recipe = {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string; // Use union for predefined difficulty levels
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string; // URL for the image
    rating: number; // e.g., 4.6
    reviewCount: number; // Number of reviews
    mealType: string[]; // e.g., ['Dinner', 'Breakfast']
};