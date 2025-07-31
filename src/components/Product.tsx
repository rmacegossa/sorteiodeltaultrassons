const Product = () => {
  return (
    <section id="produto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl title-delta mb-4">
            Lavadora Ultrassônica Tabletop
          </h2>
          <p className="text-xl text-delta-text max-w-3xl mx-auto">
            O prêmio do sorteio: uma lavadora ultrassônica de alta qualidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl title-delta mb-6">
                Características Técnicas
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-delta-blue rounded-full mr-3"></div>
                  <span className="text-gray-700">Capacidade: 2.5L</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-delta-blue rounded-full mr-3"></div>
                  <span className="text-gray-700">Frequência: 40kHz</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-delta-blue rounded-full mr-3"></div>
                  <span className="text-gray-700">Potência: 120W</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-delta-blue rounded-full mr-3"></div>
                  <span className="text-gray-700">Timer digital: 1-99 minutos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-delta-blue rounded-full mr-3"></div>
                  <span className="text-gray-700">Temperatura: 20-80°C</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-delta-blue rounded-full mr-3"></div>
                  <span className="text-gray-700">Display LED</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">
                Aplicações
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">🔬</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Laboratórios</h4>
                    <p className="text-blue-100 text-sm">Limpeza de vidrarias e instrumentos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">🏭</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Indústria</h4>
                    <p className="text-blue-100 text-sm">Limpeza de peças e componentes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">💎</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Joalheria</h4>
                    <p className="text-blue-100 text-sm">Limpeza de joias e metais preciosos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">🦷</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Odontologia</h4>
                    <p className="text-blue-100 text-sm">Limpeza de instrumentos odontológicos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl title-delta mb-4">
              Valor do Prêmio
            </h3>
            <p className="text-4xl font-bold text-delta-blue mb-4">
              R$ 2.500,00
            </p>
            <p className="text-gray-600">
              Uma lavadora ultrassônica Tabletop da Delta Ultrassons com garantia e suporte técnico
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product 