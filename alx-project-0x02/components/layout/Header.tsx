// components/layout/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-blue-200 transition-colors duration-200"
        >
          ALX Project
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="hover:text-blue-200 transition-colors duration-200"
            >
              Index
            </Link>
          </li>
          <li>
            <Link
              href="/home"
              className="hover:text-blue-200 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className="hover:text-blue-200 transition-colors duration-200"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              href="/users"
              className="hover:text-blue-200 transition-colors duration-200"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-200 transition-colors duration-200"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
