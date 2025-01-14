import Header from "@/components/header";

export default function PrivacyPolicy() {
    return (
      <div className="container mx-auto px-4 py-8">
        <Header/>
        <h1 className="text-2xl font-bold text-center mb-6 mt-14">Privacy Policy</h1>
        <p className="text-gray-700">
          At Recipe App, we value your privacy and are committed to protecting your personal information.
          This privacy policy explains how we collect, use, and share your data when you use our app.
        </p>
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Information We Collect</h2>
          <p className="text-gray-700">
            We may collect personal information such as your name, email address, and usage data when you use our app.
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-semibold">How We Use Your Information</h2>
          <p className="text-gray-700">
            Your personal information is used to provide you with a better user experience, including personalized recipe recommendations.
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Data Sharing</h2>
          <p className="text-gray-700">
            We do not sell, trade, or rent your personal information to third parties. However, we may share your data with trusted service providers to help operate our website and app.
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Your Rights</h2>
          <p className="text-gray-700">
            You have the right to access, correct, or delete your personal information at any time. If you have any questions about your data, feel free to contact us.
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update our privacy policy from time to time. We will notify users of any significant changes by updating the date at the bottom of this page.
          </p>
        </section>
      </div>
    );
  }
  