export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-700 bg-opacity-90 backdrop-blur shadow-lg">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <ul className="ml-auto flex gap-10 font-semibold text-xl">
          <li>
            <a href="#inicio" className="text-blue-300 hover:text-white transition-colors duration-200">
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" className="text-blue-300 hover:text-white hover:underline underline-offset-8 decoration-white transition-all duration-200">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#projects" className="text-blue-300 hover:text-white hover:underline underline-offset-8 decoration-white transition-all duration-200">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#tools" className="text-blue-300 hover:text-white hover:underline underline-offset-8 decoration-white transition-all duration-200">
              Herramientas
            </a>
          </li>
          <li>
            <a href="#contact" className="text-blue-300 hover:text-white hover:underline underline-offset-8 decoration-white transition-all duration-200">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}