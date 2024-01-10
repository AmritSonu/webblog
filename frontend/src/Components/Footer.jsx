export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p>We Have Blog Company and provide a great blogs for developers</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: sonus87464@gmail.com</p>
            <p>Phone: +123456789</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6">
          <p className="text-center text-sm">
            © 2024 Your IT Blog. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
