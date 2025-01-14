import Header from "@/components/header";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <Header/>
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-4 mt-14">Contact Us</h1>
        <p className="text-lg leading-relaxed mb-6">
          Got a question or feedback? We&apos;d love to hear from you! Reach out
          to us using the form below, or email us directly at{" "}
          <strong>support@myrecipeapp.com</strong>.
        </p>
        <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
