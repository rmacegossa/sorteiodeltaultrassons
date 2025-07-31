const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl title-delta mb-4">
            Sobre a Delta Ultrassons
          </h2>
          <p className="text-xl text-delta-text max-w-3xl mx-auto">
            Especialistas em fabricação de lavadoras ultrassônicas de alta qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl title-delta mb-6">
              Nossa Missão
            </h3>
            <p className="text-delta-text mb-6">
              A Delta Ultrassons é uma empresa brasileira especializada na fabricação de 
              lavadoras ultrassônicas de alta qualidade. Nossos equipamentos são utilizados 
              em diversos setores industriais para limpeza precisa e eficiente.
            </p>
            <p className="text-delta-text mb-6">
              Com anos de experiência no mercado, desenvolvemos soluções personalizadas 
              que atendem às necessidades específicas de cada cliente, garantindo 
              resultados excepcionais e durabilidade.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-delta-blue rounded-full mr-2"></div>
                <span className="text-gray-700">Qualidade garantida</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-delta-blue rounded-full mr-2"></div>
                <span className="text-gray-700">Suporte técnico</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
            <h3 className="text-2xl title-delta mb-6">
              Por que participar?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-delta-blue rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Prêmio de alto valor</h4>
                  <p className="text-gray-600 text-sm">Uma lavadora ultrassônica Tabletop no valor de R$ 2.500,00</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-delta-blue rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Conheça nossa tecnologia</h4>
                  <p className="text-gray-600 text-sm">Experimente a qualidade dos nossos equipamentos</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-delta-blue rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Visite nosso stand</h4>
                  <p className="text-gray-600 text-sm">Encontre-nos na Feira Induspar 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 