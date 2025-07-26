import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () =>{
   const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-700 bg-opacity-90 backdrop-blur shadow-lg">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
           <ul className="hidden md:flex ml-auto gap-10 font-semibold text-xl">
            <MenuItems />
          </ul> 
      </nav>
       {menuOpen && (
        <ul className="flex flex-col items-center gap-6 py-6 bg-indigo-800 md:hidden font-semibold text-lg text-white shadow-lg">
          <MenuItems onClick={() => setMenuOpen(false)} />
        </ul>
      )}
    </header>
  );
}

function MenuItems({ onClick = () => {} }) {
  return (
    <>
      <li>
        <a href="#inicio" onClick={onClick} className="text-blue-300 hover:text-white transition-colors duration-200">Inicio</a>
      </li>
      <li>
        <a href="#about" onClick={onClick} className="text-blue-300 hover:text-white hover:underline underline-offset-8 decoration-white transition-all duration-200">Sobre mí</a>
      </li>
      <li>
        <a href="#projects" onClick={onClick} className="text-blue-300 hover:text-white hover:underline underline-offset-8 decoration-white transition-all duration-200">Proyectos</a>
      </li>
      <li>
        <a href="#tools" onClick={onClick} className="text-blue-300 hover:text-white hover:underline underline-offset-8 decoration-white transition-all duration-200">Herramientas</a>
      </li>
      <li>
        <a href="#contact" onClick={onClick} className="text-blue-300 hover:text-white hover:underline underline-offset-8 decoration-white transition-all duration-200">Contacto</a>
      </li>
    </>
  );
}