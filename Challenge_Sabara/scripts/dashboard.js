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
            if (indicadores[key]) {
                indicadores[key].textContent = indicadoresData[key];
            }
        }
    };

    atualizarIndicadores();

    // **Gráficos**
    const createTooltip = (canvas, x, y, text) => {
        const tooltip = document.createElement("div");
        tooltip.style.position = "absolute";
        tooltip.style.left = `${canvas.offsetLeft + x}px`;
        tooltip.style.top = `${canvas.offsetTop + y - 30}px`;
        tooltip.style.padding = "5px 10px";
        tooltip.style.backgroundColor = "#fff";
        tooltip.style.border = "1px solid #004aad";
        tooltip.style.borderRadius = "5px";
        tooltip.style.color = "#004aad";
        tooltip.style.fontSize = "12px";
        tooltip.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
        tooltip.textContent = text;

        document.body.appendChild(tooltip);

        return tooltip;
    };

    const removeTooltip = (tooltip) => {
        if (tooltip) {
            tooltip.remove();
        }
    };

    // Renderiza o gráfico de consultas (linha) com interatividade
    const renderizarGraficoConsultas = () => {
        const canvasConsultas = document.getElementById("consultas-chart");
        const ctx = canvasConsultas.getContext("2d");

        const dias = ["Seg", "Ter", "Qua", "Qui", "Sex"];
        const consultas = [12, 8, 15, 10, 20];
        const maxConsultas = Math.max(...consultas) + 5;
        const escala = 150 / maxConsultas;

        let tooltip;

        // Desenha o gráfico
        ctx.clearRect(0, 0, canvasConsultas.width, canvasConsultas.height);
        ctx.beginPath();
        ctx.moveTo(50, 150 - consultas[0] * escala);

        consultas.forEach((consulta, i) => {
            ctx.lineTo(50 + i * 80, 150 - consulta * escala);
        });

        ctx.lineWidth = 2;
        ctx.strokeStyle = "#004aad";
        ctx.stroke();

        consultas.forEach((consulta, i) => {
            ctx.beginPath();
            ctx.arc(50 + i * 80, 150 - consulta * escala, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "#004aad";
            ctx.fill();
        });

        dias.forEach((dia, i) => {
            ctx.fillStyle = "#333";
            ctx.font = "14px Arial";
            ctx.fillText(dia, 45 + i * 80, 170);
        });

        ctx.fillStyle = "#004aad";
        ctx.font = "bold 16px Arial";
        ctx.fillText("Consultas", 10, 20);

        // Interatividade
        canvasConsultas.addEventListener("mousemove", (event) => {
            const rect = canvasConsultas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            let found = false;
            consultas.forEach((consulta, i) => {
                const x = 50 + i * 80;
                const y = 150 - consulta * escala;

                if (Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2) < 10) {
                    found = true;
                    canvasConsultas.style.cursor = "pointer";

                    if (!tooltip) {
                        tooltip = createTooltip(canvasConsultas, x, y, `${consulta} consultas`);
                    }
                }
            });

            if (!found) {
                canvasConsultas.style.cursor = "default";
                removeTooltip(tooltip);
                tooltip = null;
            }
        });

        canvasConsultas.addEventListener("mouseleave", () => {
            removeTooltip(tooltip);
            tooltip = null;
        });
    };

    // Renderiza o gráfico de exames (barra) com interatividade
    const renderizarGraficoExames = () => {
        const canvasExames = document.getElementById("exames-chart");
        const ctx = canvasExames.getContext("2d");

        const dias = ["Seg", "Ter", "Qua", "Qui", "Sex"];
        const exames = [5, 8, 12, 6, 9];
        const maxExames = Math.max(...exames) + 5;
        const escala = 150 / maxExames;

        let tooltip;

        // Desenha o gráfico
        ctx.clearRect(0, 0, canvasExames.width, canvasExames.height);

        exames.forEach((exame, i) => {
            ctx.fillStyle = "#0065b3";
            ctx.fillRect(50 + i * 80, 150 - exame * escala, 30, exame * escala);
        });

        dias.forEach((dia, i) => {
            ctx.fillStyle = "#333";
            ctx.font = "14px Arial";
            ctx.fillText(dia, 45 + i * 80, 170);
        });

        ctx.fillStyle = "#004aad";
        ctx.font = "bold 16px Arial";
        ctx.fillText("Exames", 10, 20);

        // Interatividade
        canvasExames.addEventListener("mousemove", (event) => {
            const rect = canvasExames.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            let found = false;
            exames.forEach((exame, i) => {
                const x = 50 + i * 80;
                const y = 150 - exame * escala;

                if (
                    mouseX > x &&
                    mouseX < x + 30 &&
                    mouseY > y &&
                    mouseY < 150
                ) {
                    found = true;
                    canvasExames.style.cursor = "pointer";

                    if (!tooltip) {
                        tooltip = createTooltip(
                            canvasExames,
                            x + 15,
                            y,
                            `${exame} exames`
                        );
                    }
                }
            });

            if (!found) {
                canvasExames.style.cursor = "default";
                removeTooltip(tooltip);
                tooltip = null;
            }
        });

        canvasExames.addEventListener("mouseleave", () => {
            removeTooltip(tooltip);
            tooltip = null;
        });
    };

    renderizarGraficoConsultas();
    renderizarGraficoExames();
});
// Tarefas
document.addEventListener("DOMContentLoaded", () => {
    const tarefas = [
        "Revisar estoque de medicamentos",
        "Confirmar consultas de amanhã",
        "Enviar resultados de exames",
        "Planejar escalas médicas para o fim de semana",
    ];

    const tarefasContainer = document.querySelector(".tarefas ul");
    const novaTarefaInput = document.getElementById("nova-tarefa");
    const adicionarTarefaBtn = document.getElementById("adicionar-tarefa-btn");

    // Renderiza as tarefas na lista
    const renderizarTarefas = () => {
        tarefasContainer.innerHTML = ""; // Limpa a lista

        tarefas.forEach((tarefa, index) => {
            const li = document.createElement("li");

            // Input para a tarefa
            const input = document.createElement("input");
            input.type = "text";
            input.value = tarefa;
            input.setAttribute("data-index", index); // Index para controle
            input.readOnly = true; // Torna somente leitura inicialmente

            const actions = document.createElement("div");
            actions.classList.add("actions");

            // Botão de editar
            const editarBtn = document.createElement("button");
            editarBtn.textContent = "Editar";

            editarBtn.addEventListener("click", () => {
                if (input.readOnly) {
                    input.readOnly = false; // Permite edição
                    input.focus();
                    editarBtn.textContent = "Salvar"; // Altera o botão para "Salvar"
                } else {
                    input.readOnly = true; // Torna somente leitura
                    tarefas[index] = input.value.trim(); // Atualiza a tarefa no array
                    editarBtn.textContent = "Editar"; // Volta o botão para "Editar"
                }
            });

            // Botão de excluir
            const excluirBtn = document.createElement("button");
            excluirBtn.textContent = "Excluir";
            excluirBtn.addEventListener("click", () => {
                tarefas.splice(index, 1); // Remove a tarefa do array
                renderizarTarefas(); // Re-renderiza
            });

            actions.appendChild(editarBtn);
            actions.appendChild(excluirBtn);

            li.appendChild(input);
            li.appendChild(actions);

            tarefasContainer.appendChild(li);
        });
    };

    // Adicionar nova tarefa
    const adicionarTarefa = () => {
        const novaTarefa = novaTarefaInput.value.trim();
        if (novaTarefa) {
            tarefas.push(novaTarefa);
            renderizarTarefas();
            novaTarefaInput.value = "";
        } else {
            alert("Por favor, insira uma tarefa válida!");
        }
    };

    // Evento de clique no botão de adicionar tarefa
    adicionarTarefaBtn.addEventListener("click", adicionarTarefa);

    // Evento de adicionar tarefa ao pressionar Enter
    novaTarefaInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            adicionarTarefa();
        }
    });

    // Renderiza as tarefas inicialmente
    renderizarTarefas();
});
