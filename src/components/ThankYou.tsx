const ThankYou = () => {
  return (
    <section className="py-20 bg-white min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">✅</span>
          </div>
          <h1 className="text-4xl md:text-5xl title-delta mb-6">
            Obrigado por Participar!
          </h1>
          <p className="text-xl text-delta-text max-w-2xl mx-auto mb-8">
            Sua inscrição foi realizada com sucesso no sorteio da Delta Ultrassons.
          </p>
        </div>

        <div className="bg-blue-50 p-8 rounded-2xl max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl title-delta mb-6">
            📅 Data do Sorteio
          </h2>
          <p className="text-2xl font-bold text-delta-blue mb-4">
            15 de agosto de 2024
          </p>
          <p className="text-delta-text mb-6">
            O sorteio será realizado e o vencedor será anunciado nesta data.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl max-w-2xl mx-auto">
          <h3 className="text-xl title-delta mb-4">
            📞 Como Entraremos em Contato
          </h3>
          <div className="space-y-4 text-delta-text">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">📧</span>
              <span>E-mail</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">📱</span>
              <span>WhatsApp</span>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              O vencedor será notificado através desses canais de comunicação.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <a 
            href="/" 
            className="btn-primary text-lg px-8 py-4 inline-block"
            style={{ backgroundColor: '#044C84' }}
          >
            Voltar ao Início
          </a>
        </div>
      </div>
    </section>
  )
}

export default ThankYou 