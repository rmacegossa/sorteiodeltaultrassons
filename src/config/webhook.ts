// Configuração do Webhook
// Substitua pela URL do seu webhook
export const WEBHOOK_URL = 'SEU_WEBHOOK_URL_AQUI'

// Função para enviar dados para o webhook
export const sendToWebhook = async (data: any) => {
  const response = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error(`Erro HTTP: ${response.status}`)
  }

  return response.json()
} 