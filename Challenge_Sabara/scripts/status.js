document.addEventListener("DOMContentLoaded", () => {
    // Selecionando elementos do DOM
    const formSection = document.querySelector(".status-section");
    const resultados = document.getElementById("resultados");
    const resNome = document.getElementById("res-nome");
    const statusSpan = document.getElementById("status");
    const listaHorarios = document.getElementById("horarios");
    const marcadores = document.querySelectorAll(".linha-do-tempo .marcador");
    const resultadoExames = document.getElementById("exames");

    // Dados simulados
    const horarios = ["10:00", "11:30", "14:00", "16:00"];
    const etapas = ["Recepção", "Consulta", "Exame", "Resultado Pronto"];
    const exames = {
        "Hemograma": "Resultado disponível: Normal",
        "Raio-X": "Aguardando análise",
        "Ultrassom": "Concluído",
    };

    let etapaAtual = 0;
    let statusInterval;

    // Função para atualizar horários
    const atualizarHorarios = () => {
        listaHorarios.innerHTML = "";
        horarios.forEach(horario => {
            const item = document.createElement("div");
            item.textContent = horario;
            item.classList.add("horario-item");
            listaHorarios.appendChild(item);
        });
    };

    // Função para atualizar o status
    const atualizarStatus = () => {
        if (etapaAtual < etapas.length) {
            statusSpan.textContent = etapas[etapaAtual];
            marcadores.forEach((marcador, index) => {
                marcador.classList.toggle("ativo", index === etapaAtual);
            });
            etapaAtual++;
        } else {
            clearInterval(statusInterval);
        }
    };

// Função para atualizar resultados de exames
const atualizarExames = () => {
    resultadoExames.innerHTML = ""; // Limpa a tabela de exames
    for (const exame in exames) {
        const row = document.createElement("tr"); // Cria uma linha da tabela

        // Define as células com conteúdo centralizado
        const exameCell = document.createElement("td");
        exameCell.textContent = exame;
        exameCell.style.textAlign = "center"; // Centraliza o conteúdo da célula

        const statusCell = document.createElement("td");
        statusCell.textContent = exames[exame];
        statusCell.style.textAlign = "center"; // Centraliza o conteúdo da célula

        // Adiciona as células à linha
        row.appendChild(exameCell);
        row.appendChild(statusCell);

        // Adiciona a linha à tabela
        resultadoExames.appendChild(row);
    }

    // Centraliza a tabela de exames
    const tabela = resultadoExames.closest("table");
    if (tabela) {
        tabela.style.margin = "20px auto"; // Centraliza horizontalmente
        tabela.style.borderCollapse = "collapse"; // Remove espaçamentos entre bordas
        tabela.style.width = "100%"; // Define largura total
        tabela.style.maxWidth = "700px"; // Limita a largura máxima
    }
};


    // Evento de envio do formulário
    document.getElementById("status-form").addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("patient-name").value.trim();
        const prontuarioCpf = document.getElementById("numero-prontuario-cpf").value.trim();

        if (nome && prontuarioCpf) {
            resNome.textContent = nome;
            atualizarHorarios();
            atualizarExames();

            formSection.style.display = "none";
            resultados.style.display = "block";

            etapaAtual = 0;
            clearInterval(statusInterval);
            atualizarStatus();
            statusInterval = setInterval(atualizarStatus, 5000);
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });

    // Botão de reset
    document.getElementById("reset-button").addEventListener("click", () => {
        formSection.style.display = "block";
        resultados.style.display = "none";

        clearInterval(statusInterval);
        etapaAtual = 0;

        statusSpan.textContent = "";
        marcadores.forEach(marcador => marcador.classList.remove("ativo"));
        listaHorarios.innerHTML = "";
        resultadoExames.innerHTML = "";
    });
});
