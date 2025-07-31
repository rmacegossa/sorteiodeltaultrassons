import capaImage from '../assets/capa.jpg'

const Hero = () => {
  return (
    <section 
      className="text-white py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(4, 76, 132, 0.8), rgba(4, 76, 132, 0.8)), url(${capaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl title-delta mb-6 text-white">
            Sorteio Delta Ultrassons
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
            Participe do nosso sorteio e concorra a uma <strong>Tabletop</strong> da Delta Ultrassons!
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-white">🏆 Prêmio</h2>
            <p className="text-lg mb-4 text-white">
              Uma <strong>Lavadora Ultrassônica Tabletop</strong> da Delta Ultrassons
            </p>
            <div className="text-sm opacity-90 text-white">
              <p>📅 Sorteio: 15 de agosto de 2025</p>
            </div>
          </div>
          <a 
            href="#sorteio" 
            className="btn-primary text-lg px-8 py-4 inline-block"
            style={{ backgroundColor: '#044C84' }}
          >
            Participar Agora
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero 