// components/layout/Header.tsx
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const links = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/posts", label: "Posts" },
  ];

  const isActiveLink = (href: string) => router.pathname === href;

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          href="/home"
          className="text-2xl font-bold hover:text-blue-200 transition-colors duration-200"
        >
          ALX Project
        </Link>
        <ul className="flex space-x-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${
                  isActiveLink(href)
                    ? "text-white font-semibold"
                    : "text-blue-100 hover:text-white"
                } transition-colors duration-200`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
