// Seleciona os elementos de botão
const loadMoreButton = document.getElementById("load-more-news");
const closeMoreButton = document.getElementById("close-more-news");
const newsList = document.getElementById("news-list");

// Notícias adicionais
let currentIndex = 3;
const additionalNews = [
    "Nova ala pediátrica será inaugurada em janeiro de 2024.",
    "Dicas de saúde: como prevenir infecções respiratórias nas crianças.",
    "Plantão médico ampliado durante o verão.",
    "Programa de doação de brinquedos para crianças hospitalizadas começa este mês.",
    "Nova parceria com universidades para pesquisa pediátrica avançada.",
    "Seminário sobre cuidados neonatais acontecerá em março de 2024."
];

// Adiciona funcionalidade ao botão "Ver Mais"
loadMoreButton.addEventListener("click", () => {
    additionalNews.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        newsList.appendChild(listItem);
    });

    loadMoreButton.style.display = "none"; // Esconde o botão após carregar mais notícias
    closeMoreButton.style.display = "block"; // Exibe o botão de fechar
});

// Adiciona funcionalidade ao botão "Fechar"
closeMoreButton.addEventListener("click", () => {
    loadMoreButton.style.display = "block"; // Exibe o botão "Ver Mais"
    closeMoreButton.style.display = "none"; // Esconde o botão de fechar

    // Remove as notícias adicionais
    const newsItems = Array.from(newsList.querySelectorAll("li"));
    newsItems.slice(currentIndex).forEach((item) => item.remove());
});
