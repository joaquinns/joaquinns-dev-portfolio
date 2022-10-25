import { useState } from "react";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="fixed left-0 right-0 top-0 h-16 z-30 bg-[#ffffff02] backdrop-blur-lg border-gray-900 lg:border-b ">
      <nav className="flex items-center justify-end min-h-full z-30">
        <button
          onClick={handleToggle}
          id="mobileMenu"
          className="lg:hidden w-14 p-2 flex flex-col gap-2 fixed top-2 right-2"
        >
          <div className="border-2 bg-gray-400 w-full rounded-full"></div>
          <div className="border-2 bg-gray-400 w-full rounded-full"></div>
          <div className="border-2 bg-gray-400 w-full rounded-full"></div>
        </button>
        <ul
          className={`flex ${toggle ? "translate-x-0" : "translate-x-full"
            } ease-in-out duration-500 lg:translate-x-0 lg:flex text-slate-500 font-semibold justify-center flex-col absolute top-16 bottom-0 left-0 right-0 h-screen w-full bg-darkColor lg:static lg:bg-transparent lg:h-full lg:flex-row lg:justify-end z-30`}
        >
          <li>
            <a
              href="#projects"
              className="block w-full h-full text-xl text-right border-t border-b border-gray-800 lg:border-none sm:text-center md:text-lg px-4 py-4 lg:hover:bg-transparent hover:bg-pink-600 ease-linear duration-75 hover:text-slate-50"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block w-full h-full text-xl text-right border-b border-gray-800 lg:border-none sm:text-center md:text-lg px-4 py-4 hover:bg-pink-600 lg:hover:bg-transparent ease-linear duration-75 hover:text-slate-50 md:hover:text-slate-50"
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
