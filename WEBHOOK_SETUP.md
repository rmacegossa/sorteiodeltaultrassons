# Configuração do Webhook

## 📋 Como Configurar

1. **Abra o arquivo de configuração:**
   ```
   src/config/webhook.ts
   ```

2. **Substitua a URL do webhook:**
   ```typescript
   export const WEBHOOK_URL = 'SUA_URL_DO_WEBHOOK_AQUI'
   ```

3. **Exemplo de URLs de webhook:**
   - **Zapier:** `https://hooks.zapier.com/hooks/catch/...`
   - **Make.com (Integromat):** `https://hook.eu1.make.com/...`
   - **Webhook.site:** `https://webhook.site/...`
   - **Google Apps Script:** `https://script.google.com/macros/s/.../exec`

## 📊 Dados Enviados

O formulário envia os seguintes dados para o webhook:

```json
{
  "nome": "Nome do participante",
  "email": "email@exemplo.com",
  "telefone": "(11) 99999-9999",
  "empresa": "Nome da empresa (opcional)",
  "setor": "Setor de atuação (opcional)",
  "data_inscricao": "2024-01-15T10:30:00.000Z",
  "sorteio": "Delta Ultrassons - Tabletop"
}
```

## 🔧 Testando o Webhook

1. Use serviços como [webhook.site](https://webhook.site) para testar
2. Configure o webhook para receber dados JSON
3. Teste o formulário e verifique se os dados chegam corretamente

## 📱 Serviços Recomendados

- **Zapier:** Para integração com CRM, planilhas, etc.
- **Make.com:** Para automações complexas
- **Google Apps Script:** Para integração com Google Sheets
- **Airtable:** Para armazenamento em banco de dados 