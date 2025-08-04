import { useState } from 'react'
import toast from 'react-hot-toast'
import { sendToWebhook } from '../config/webhook'

interface FormData {
  nome: string
  email: string
  telefone: string
  empresa: string
  setor: string
  aceite: boolean
}

interface FormProps {
  onSuccess: () => void
}

// Declaração global para o Facebook Pixel
declare global {
  interface Window {
    fbq: any;
  }
}

const Form = ({ onSuccess }: FormProps) => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    setor: '',
    aceite: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.aceite) {
      toast.error('Você precisa aceitar os termos para participar')
      return
    }

    if (!formData.nome || !formData.email || !formData.telefone) {
      toast.error('Por favor, preencha todos os campos obrigatórios')
      return
    }

    setIsSubmitting(true)

    try {
      // Enviar dados para webhook
      await sendToWebhook({
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        empresa: formData.empresa,
        setor: formData.setor,
        data_inscricao: new Date().toISOString(),
        sorteio: 'Delta Ultrassons - Tabletop'
      })
      
      // Tracking do Facebook Pixel - Lead
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          value: 500, // Valor estimado do lead
          currency: 'BRL',
          content_name: 'Sorteio Tabletop Delta Ultrassons',
          content_category: 'Sorteio'
        });
        
        // Tracking de evento personalizado
        window.fbq('track', 'CompleteRegistration', {
          content_name: 'Sorteio Tabletop',
          content_category: 'Sorteio',
          value: 500,
          currency: 'BRL'
        });
      }
      
      toast.success('Inscrição realizada com sucesso! Boa sorte!')
      onSuccess()
      
      // Limpar formulário
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        setor: '',
        aceite: false
      })
    } catch (error) {
      console.error('Erro ao enviar para webhook:', error)
      toast.error('Erro ao enviar inscrição. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="sorteio" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl title-delta mb-4">
            Participe do Sorteio
          </h2>
          <p className="text-xl text-delta-text max-w-2xl mx-auto">
            Preencha o formulário abaixo e concorra a uma Lavadora Ultrassônica Tabletop da Delta Ultrassons
          </p>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-delta-blue mb-4">🏆 Prêmio do Sorteio</h3>
            <p className="text-lg text-delta-text mb-2">Lavadora Ultrassônica Tabletop Delta Ultrassons</p>
            <p className="text-delta-text font-semibold text-delta-blue">✨ Garanta sua participação agora!</p>
            <p className="text-sm text-delta-text mt-2">📅 Sorteio: 15 de agosto de 2025</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-delta-blue focus:border-transparent"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-delta-blue focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-delta-blue focus:border-transparent"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-delta-blue focus:border-transparent"
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="setor" className="block text-sm font-medium text-gray-700 mb-2">
                  Setor de Atuação
                </label>
                <select
                  id="setor"
                  name="setor"
                  value={formData.setor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-delta-blue focus:border-transparent"
                >
                  <option value="">Selecione um setor</option>
                  <option value="laboratorio">Laboratório</option>
                  <option value="industria">Indústria</option>
                  <option value="joalheria">Joalheria</option>
                  <option value="odontologia">Odontologia</option>
                  <option value="eletronica">Eletrônica</option>
                  <option value="oficina">Oficina</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="aceite"
                name="aceite"
                checked={formData.aceite}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 text-delta-blue focus:ring-delta-blue border-gray-300 rounded"
              />
              <label htmlFor="aceite" className="ml-2 block text-sm text-gray-700">
                Concordo com os termos do sorteio e autorizo o uso dos meus dados para contato sobre produtos da Delta Ultrassons *
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#044C84' }}
              >
                {isSubmitting ? 'Enviando...' : 'Participar do Sorteio'}
              </button>
            </div>

            <div className="text-center text-sm text-gray-600">
              <p>📅 Sorteio será realizado no dia 15 de agosto de 2025</p>
              <p>🎯 O vencedor será notificado por e-mail e telefone</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form 