document.addEventListener("DOMContentLoaded", () => {
    // Selecionando elementos do DOM
    const form = document.getElementById("agendamento-form");
    const resultSection = document.getElementById("agendamento-result");
    const especialidadeSelect = document.getElementById("especialidade");
    const medicoSelect = document.getElementById("medico");
    const horariosContainer = document.getElementById("horarios");

    // Dados simulados
    const especialidades = ["Cardiologia", "Pediatria", "Ortopedia", "Dermatologia"];
    const medicos = {
        Cardiologia: ["Dr. João Silva", "Dra. Maria Fernanda"],
        Pediatria: ["Dr. Pedro Santos", "Dra. Ana Oliveira"],
        Ortopedia: ["Dr. Ricardo Gomes", "Dra. Patrícia Mendes"],
        Dermatologia: ["Dr. Bruno Alves", "Dra. Luiza Costa"],
    };
    const horarios = ["08:00", "09:30", "11:00", "13:30", "15:00"];

    let selectedHorario = null; // Para armazenar o horário selecionado

    // Populando especialidades
    especialidades.forEach(especialidade => {
        const option = document.createElement("option");
        option.value = especialidade;
        option.textContent = especialidade;
        especialidadeSelect.appendChild(option);
    });

    // Atualizando médicos com base na especialidade selecionada
    especialidadeSelect.addEventListener("change", () => {
        const selectedEspecialidade = especialidadeSelect.value;

        // Limpar médicos anteriores
        medicoSelect.innerHTML = `<option value="" disabled selected>Escolha o médico</option>`;

        // Adicionar novos médicos
        if (medicos[selectedEspecialidade]) {
            medicos[selectedEspecialidade].forEach(medico => {
                const option = document.createElement("option");
                option.value = medico;
                option.textContent = medico;
                medicoSelect.appendChild(option);
            });
        }
    });

    // Gerar horários disponíveis
    horarios.forEach(horario => {
        const horarioButton = document.createElement("div");
        horarioButton.textContent = horario;
        horarioButton.classList.add("horario-item");

        // Adicionar evento de seleção
        horarioButton.addEventListener("click", () => {
            // Limpar seleções anteriores
            document.querySelectorAll(".horario-item").forEach(item => {
                item.classList.remove("active");
            });

            // Marcar o horário atual como selecionado
            horarioButton.classList.add("active");
            selectedHorario = horario;
        });

        horariosContainer.appendChild(horarioButton);
    });

    // Evento de envio do formulário
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Coletar valores do formulário
        const especialidade = especialidadeSelect.value;
        const medico = medicoSelect.value;
        const data = document.getElementById("data").value;
        const pacienteNome = document.getElementById("paciente-nome").value.trim();
        const pacienteCpf = document.getElementById("paciente-cpf").value.trim();
        const responsavelNome = document.getElementById("responsavel-nome").value.trim();
        const planoSaude = document.getElementById("plano-saude").value;

        // Validação de campos obrigatórios
        if (!especialidade || !medico || !data || !pacienteNome || !pacienteCpf || !selectedHorario) {
            alert("Por favor, preencha todos os campos obrigatórios e selecione um horário.");
            return;
        }

        // Gerar resultado do agendamento
        resultSection.innerHTML = `
            <strong>Agendamento Confirmado!</strong>
            <p><strong>Paciente:</strong> ${pacienteNome}</p>
            <p><strong>CPF:</strong> ${pacienteCpf}</p>
            <p><strong>Responsável:</strong> ${responsavelNome || "Não informado"}</p>
            <p><strong>Plano de Saúde:</strong> ${planoSaude}</p>
            <p><strong>Especialidade:</strong> ${especialidade}</p>
            <p><strong>Médico:</strong> ${medico}</p>
            <p><strong>Data:</strong> ${data}</p>
            <p><strong>Horário:</strong> ${selectedHorario}</p>
        `;

        // Exibir resultado e ocultar formulário
        resultSection.style.display = "block";
        form.style.display = "none";
    });

    // Botão de reset para reexibir o formulário
    const resetButton = document.createElement("button");
    resetButton.textContent = "Fazer outro agendamento";
    resetButton.classList.add("btn-confirmar");
    resetButton.style.marginTop = "20px";

    resetButton.addEventListener("click", () => {
        // Resetar valores
        form.reset();
        selectedHorario = null;
        document.querySelectorAll(".horario-item").forEach(item => {
            item.classList.remove("active");
        });

        // Ocultar resultado e exibir formulário
        resultSection.style.display = "none";
        form.style.display = "block";
    });

    resultSection.appendChild(resetButton);
});
