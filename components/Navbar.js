
import { useState } from "react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" relative fixed p-4">
      <div className="flex items-center  justify-between">
        <div className="text-black font-bold text-xl">
          Your Logo
        </div>
        <button
          className="lg:hidden text-black text-xl"
          onClick={toggleNavbar}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
          <li className="p-2">
            <a href="#" className="text-black font-bold hover:bg-gray-400 px-3 py-2 rounded-md">Home</a>
          </li>
          <li className="p-2">
            <a href="#" className="text-black font-bold hover:bg-gray-400 px-3 py-2 rounded-md">About</a>
          </li>
          <li className="p-2">
            <a href="#" className="text-black font-bold hover:bg-gray-400 px-3 py-2 rounded-md">Portfolio</a>
          </li>
          <li className="p-2">
            <a href="#" className="text-black font-bold hover:bg-gray-400 px-3 py-2 rounded-md">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
