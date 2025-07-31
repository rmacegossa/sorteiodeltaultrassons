// Configuração do Webhook
export const WEBHOOK_URL = 'https://evolution-n8n.gzamte.easypanel.host/webhook/sorteio-deltaultrassons'

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