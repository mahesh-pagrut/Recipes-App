import Link from 'next/link';

const Footer: React.FC = () => {
  const routes = [
    { name: 'Home', route: '/' },
    { name: 'Recipes', route: '/recipes' },
    { name: 'About', route: '/about' },
    { name: 'Contact', route: '/contact' },
    {name: 'Privacy Policy', route: '/privacyPolicy'},
    {name: 'Terms Of Services', route: '/termsOfServices'},
  ];

  return (
    <footer className="bg-black text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0">
        {/* Left Side: Copyright and Owner Info */}
        <div className="text-sm text-center md:text-left space-y-2">
          <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
          <p>
            Owner: <span className="text-gray-400">Mahesh Pagrut</span>
          </p>
          <p>
            Email: <span className="text-gray-400">maheshdpmayshu@gmail.com</span>
          </p>
        </div>

        {/* Right Side: Navigation */}
        <nav>
          <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
            {routes.map((route) => (
              <li key={route.route}>
                <Link href={route.route} passHref>
                  <span className="cursor-pointer hover:text-white">{route.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
