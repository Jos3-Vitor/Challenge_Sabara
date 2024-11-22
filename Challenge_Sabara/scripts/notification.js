// Garante que o DOM esteja totalmente carregado antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os elementos do banner
    const notificationBanner = document.getElementById("notification-banner");
    const notificationMessage = document.getElementById("notification-message");
    const closeBanner = document.getElementById("close-banner");

    // Lista de mensagens de notificação
    const notifications = [
        "Bem-vindo ao Sistema Integrado! Confira nossas novas funcionalidades.",
        "Aviso: O sistema de Check-in estará em manutenção das 22h às 23h.",
        "Lembre-se de verificar seu status de atendimento na aba 'Status do Paciente'."
    ];

    // Escolhe uma mensagem aleatória da lista
    const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];

    // Insere a mensagem no elemento do banner
    notificationMessage.textContent = randomNotification;

    // Exibe o banner
    notificationBanner.style.display = "flex";

    // Adiciona um evento de clique ao botão "X" para fechar o banner
    closeBanner.addEventListener("click", () => {
        notificationBanner.style.display = "none";
    });
});
