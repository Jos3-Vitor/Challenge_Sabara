document.addEventListener("DOMContentLoaded", () => {
    // **Indicadores**
    const indicadoresData = {
        pacientesHoje: 150,
        consultasAgendadas: 300,
        examesRealizados: 250,
        medicosDisponiveis: 40,
    };

    const indicadores = {
        pacientesHoje: document.getElementById("pacientes-hoje"),
        consultasAgendadas: document.getElementById("consultas-agendadas"),
        examesRealizados: document.getElementById("exames-realizados"),
        medicosDisponiveis: document.getElementById("medicos-disponiveis"),
    };

    const atualizarIndicadores = () => {
        for (const key in indicadoresData) {
            indicadores[key].textContent = indicadoresData[key];
        }
    };

    atualizarIndicadores();

    // **Gráficos**
    const drawLineChart = (canvas, labels, data, color) => {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const maxData = Math.max(...data);
        const scaleY = canvas.height / maxData;
        const stepX = canvas.width / (labels.length - 1);

        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();

        data.forEach((value, index) => {
            const x = index * stepX;
            const y = canvas.height - value * scaleY;
            index === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        });

        ctx.stroke();
    };

    const drawBarChart = (canvas, labels, data, color) => {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const barWidth = canvas.width / (labels.length * 2);
        const maxData = Math.max(...data);
        const scaleY = canvas.height / maxData;

        data.forEach((value, index) => {
            const x = index * (barWidth * 2);
            const y = canvas.height - value * scaleY;
            ctx.fillStyle = color;
            ctx.fillRect(x, y, barWidth, value * scaleY);
        });
    };

    const dias = ["Seg", "Ter", "Qua", "Qui", "Sex"];
    const consultas = [50, 75, 100, 200, 250];
    const exames = [30, 60, 80, 150, 180];

    drawLineChart(document.getElementById("grafico-consultas"), dias, consultas, "#004aad");
    drawBarChart(document.getElementById("grafico-exames"), dias, exames, "#0065b3");

    // **Lista de Tarefas**
    const tarefas = [
        "Revisar estoque de medicamentos",
        "Confirmar consultas de amanhã",
        "Enviar resultados de exames",
        "Planejar escalas médicas para o fim de semana",
    ];

    const tarefasContainer = document.querySelector(".tarefas ul");
    tarefas.forEach((tarefa) => {
        const li = document.createElement("li");
        li.textContent = tarefa;

        // Evento para riscar ou restaurar tarefa ao clicar
        li.addEventListener("click", () => {
            li.classList.toggle("completa");
        });

        tarefasContainer.appendChild(li);
    });

    // Adiciona funcionalidade para inserir novas tarefas (opcional)
    const adicionarTarefa = (novaTarefa) => {
        if (novaTarefa.trim()) {
            const li = document.createElement("li");
            li.textContent = novaTarefa;

            li.addEventListener("click", () => {
                li.classList.toggle("completa");
            });

            tarefasContainer.appendChild(li);
        }
    };

    // Simulação de novas tarefas sendo adicionadas dinamicamente
    setTimeout(() => {
        adicionarTarefa("Realizar manutenção no sistema de TI");
    }, 5000);
});

