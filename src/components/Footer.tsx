const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Delta Ultrassons */}
          <div>
            <h3 className="text-xl title-delta mb-4">Delta Ultrassons</h3>
            <p className="text-gray-300 mb-4">
              Especialistas em fabricação de lavadoras ultrassônicas de alta qualidade.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 São Paulo, Brasil</p>
              <p>📧 contato@deltaultrassons.com.br</p>
              <p>🌐 www.deltaultrassons.com.br</p>
            </div>
          </div>

          {/* Feira Induspar */}
          <div>
            <h3 className="text-xl font-bold mb-4">Feira Induspar 2025</h3>
            <div className="bg-blue-800 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Encontre-nos na Feira</h4>
              <p className="text-sm text-blue-100">
                Visite nosso stand e conheça nossa linha completa de lavadoras ultrassônicas.
              </p>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📅 Data: A ser confirmada</p>
              <p>📍 Local: São Paulo, Brasil</p>
              <p>🎯 Stand: Delta Ultrassons</p>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="#sobre" className="block text-gray-300 hover:text-white transition-colors">
                Sobre a Delta
              </a>
              <a href="#produto" className="block text-gray-300 hover:text-white transition-colors">
                Nossos Produtos
              </a>
              <a href="#sorteio" className="block text-gray-300 hover:text-white transition-colors">
                Participar do Sorteio
              </a>
              <a href="https://www.deltaultrassons.com.br" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white transition-colors">
                Site Oficial
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Delta Ultrassons. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Sorteio válido até 15 de agosto de 2024.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 