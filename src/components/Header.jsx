import { Clipboard } from "lucide-react";

const Header = ({ cartCount, onCartClick }) => (
  <header className="fixed top-0 w-full bg-white shadow-lg z-50">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      {/* Logo e Título */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">🦷</span>
        </div>
        <h1 className="text-2xl font-bold text-blue-600">SmileCare</h1>
      </div>

      <nav className="hidden md:flex space-x-6">
        <a
          href="#home"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Início
        </a>
        <a
          href="#services"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Serviços
        </a>
        <a
          href="#testimonials"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Depoimentos
        </a>
        <a
          href="#team"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Equipe
        </a>
        <a
          href="#contact"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Contato
        </a>
      </nav>

      <button
        onClick={onCartClick}
        className="relative bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
      >
        <Clipboard className="w-6 h-6" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  </header>
);

export default Header;
