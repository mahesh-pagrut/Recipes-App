import Header from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const featuredRecipes = [
    { title: 'Spaghetti Bolognese', image: '/featured/1.jpg' },
    { title: 'Vegan Buddha Bowl', image: '/featured/2.jpg' },
    { title: 'Chocolate Cake', image: '/featured/3.jpg' },
    { title: 'Grilled Chicken', image: '/featured/4.jpg' },
    { title: 'Avocado Toast', image: '/featured/1.jpg'},
    { title: 'Pasta Primavera', image: '/featured/5.jpg' },
    { title: 'Classic Pancakes', image:'/featured/2.jpg' },
  ];

  return (
     <main className="bg-white text-gray-800 relative">
      <Header/>
      {/* Hero Section with background image */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center p-6">
        <div className="absolute inset-0 z-0">
        <Image
          src="/assets/Hero1.png"  // Path to the uploaded image
          alt="Background Image"
          layout="fill"
          quality={100}
          style={{
            objectFit: 'cover', // This is how you handle image fit now
          }}
        />
        </div>
        
        <h1 className="text-5xl font-extrabold mb-4 text-white z-10">
          Explore Recipes, Discover Flavors
        </h1>
        <p className="text-lg mb-6 max-w-2xl text-white z-10">
          Your ultimate destination for mouth-watering recipes and cooking
          inspiration. Perfect for food enthusiasts of all levels.
        </p>
        <Link
          href="#recipes"
          className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-red-600 transition z-10"
        >
          Browse Recipes
        </Link>
      </section>

      {/* Featured Recipes */}
      <section id="recipes" className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400">
          Featured Recipes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.slice(0, 3).map((recipe, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={recipe.image}
                alt={recipe.title}
                width={400}
                height={300}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {recipe.title}
                </h3>
                <Link
                  href="/recipes"
                  className="text-red-500 font-bold hover:underline"
                >
                  View Recipe →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Recipes */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-center">
            Popular Recipes
          </h2>
          <div className="relative">
            <div className="popular-recipes-wrapper overflow-hidden">
              <div className="popular-recipes flex space-x-4 animate-scroll">
                {featuredRecipes.concat(featuredRecipes).map((recipe, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-64 bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                  >
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      width={400}
                      height={300}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-800">
                        {recipe.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-12 bg-emerald-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-lg mb-6 text-gray-600">
            Get the latest recipes and cooking tips directly in your inbox.
          </p>
          <form
            action="/api/subscribe"
            method="POST"
            className="flex justify-center flex-wrap gap-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-red-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
