import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl title-delta">
                Delta Ultrassons
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#sobre" className="text-gray-700 hover:text-delta-blue transition-colors">
              Sobre
            </a>
            <a href="#produto" className="text-gray-700 hover:text-delta-blue transition-colors">
              Produto
            </a>
            <a href="#sorteio" className="text-gray-700 hover:text-delta-blue transition-colors">
              Sorteio
            </a>
            <a href="#feira" className="text-gray-700 hover:text-delta-blue transition-colors">
              Feira Induspar
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#sorteio" 
              className="btn-primary"
            >
              Participar do Sorteio
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-delta-blue"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#sobre" className="block px-3 py-2 text-gray-700 hover:text-delta-blue">
                Sobre
              </a>
              <a href="#produto" className="block px-3 py-2 text-gray-700 hover:text-delta-blue">
                Produto
              </a>
              <a href="#sorteio" className="block px-3 py-2 text-gray-700 hover:text-delta-blue">
                Sorteio
              </a>
              <a href="#feira" className="block px-3 py-2 text-gray-700 hover:text-delta-blue">
                Feira Induspar
              </a>
              <a href="#sorteio" className="block px-3 py-2 btn-primary mt-4 text-center">
                Participar do Sorteio
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 