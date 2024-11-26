// Selecionando elementos do DOM
const formSection = document.querySelector(".status-section"); // A seção inteira do formulário
const resultados = document.getElementById("resultados");
const resNome = document.getElementById("res-nome");
const statusSpan = document.getElementById("status");
const listaHorarios = document.getElementById("horarios");
const marcadores = document.querySelectorAll(".linha-do-tempo .marcador");
const resultadoExames = document.getElementById("exames");

// Dados simulados
const horarios = ["10:00", "11:30", "14:00", "16:00"];
const etapas = ["Recepção,", "Consulta,", "Exame,", "Resultado Pronto"];
const exames = {
    "Hemograma": "Resultado disponível: Normal",
    "Raio-X": "Aguardando análise",
    "Ultrassom": "Concluído",
};

// Variável de controle de status
let etapaAtual = 0;

// Função para atualizar os horários
const atualizarHorarios = () => {
    listaHorarios.innerHTML = ""; // Limpa a lista
    horarios.forEach(horario => {
        const item = document.createElement("li");
        item.textContent = horario;
        listaHorarios.appendChild(item);
    });
};

// Função para atualizar o status automaticamente
const atualizarStatus = () => {
    if (etapaAtual < etapas.length) {
        statusSpan.textContent = etapas[etapaAtual];
        marcadores[etapaAtual].classList.add("ativo"); // Destaca a etapa atual
        etapaAtual++;
    }
};

// Função para atualizar os resultados de exames
const atualizarExames = () => {
    resultadoExames.innerHTML = ""; // Limpa os resultados
    for (const exame in exames) {
        const item = document.createElement("p");
        item.textContent = `${exame}: ${exames[exame]}`;
        resultadoExames.appendChild(item);
    }
};

// Evento de envio do formulário
document.getElementById("status-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos
    const nome = document.getElementById("patient-name").value.trim();
    const prontuarioCpf = document.getElementById("numero-prontuario-cpf").value.trim();

    if (nome && prontuarioCpf) {
        // Exibe o nome do paciente na seção de resultados
        resNome.textContent = nome;

        // Atualiza as informações dinâmicas
        atualizarHorarios();
        atualizarExames();

        // Esconde a seção do formulário e exibe os resultados
        formSection.classList.add("hidden");
        resultados.classList.remove("hidden");

        // Inicia a atualização automática do status
        setInterval(atualizarStatus, 5000); // Atualiza a cada 5 segundos
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
