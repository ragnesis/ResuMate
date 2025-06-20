import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">ResuMate</h1>
        <nav className="space-x-4">
          <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </a>
          <a
            href="/#about"
            className="text-gray-700 hover:text-blue-600 font-medium">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
