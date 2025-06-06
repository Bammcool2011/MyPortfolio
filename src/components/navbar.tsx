import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'ABOUT', href: '#about' },
    { name: 'HOBBIES', href: '#hobbies' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavigation = (href: string) => {
    setIsOpen(false); // Close mobile menu
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 120; // Matches h-20 (5rem = 80px)
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="bg-[#0a1018] min-w-full fixed top-0 z-50">
      {/* Desktop Navbar */}
      <div className="hidden md:flex h-20 items-center justify-center relative">
        <div className="absolute left-8 text-white font-bold text-2xl">Pumin WPS</div>
        <div className="flex-1 flex justify-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item.href);
              }}
              className="text-white font-thin text-xl mx-4 hover:text-[#e31b6d] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <div className="flex items-center justify-between p-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('#home');
            }}
            className="text-white font-thin text-xl"
          >
            PUMIN WPS
          </a>
          <button
            className="btn btn-ghost p-2 text-white hover:bg-transparent hover:text-[#e31b6d] relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="fixed inset-y-0 right-0 w-64 bg-[#0a1018] pt-16 shadow-lg animate-in slide-in-from-right duration-300 z-40">
            <div className="flex flex-col items-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                  className="text-white font-thin text-xl py-4 w-full text-center hover:text-[#e31b6d] hover:bg-white/5 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}