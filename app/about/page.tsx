import Header from "@/components/header";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gray-100 text-gray-800 p-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg leading-relaxed mb-4">
            Welcome to <strong>My Recipe App</strong>. Our mission is to make cooking easy, fun, and accessible for everyone. 
            Whether you're a seasoned chef or just starting out in the kitchen, we've got something for you.
          </p>
          <p className="text-lg leading-relaxed">
            Our app offers a wide variety of recipes from around the world. We're constantly updating our collection to bring you the best recipes and cooking tips.
          </p>
        </div>
      </main>
    </div>
  );
}
