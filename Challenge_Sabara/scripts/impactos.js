document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("impact-chart");
    const ctx = canvas.getContext("2d");

    // Configuração HiDPI/Retina
    const scale = window.devicePixelRatio || 1;
    canvas.width = 900 * scale;
    canvas.height = 500 * scale;
    canvas.style.width = "900px";
    canvas.style.height = "500px";
    ctx.scale(scale, scale);

    // Dados iniciais
    const dataBefore = [70, 80, 90];
    const dataAfter = [20, 30, 40];
    const labels = ["Pacientes", "Profissionais", "Gestores"];

    const padding = 60; // Espaçamento ao redor
    const barWidth = 40; // Largura das barras
    const barSpacing = 100; // Espaçamento entre grupos de barras
    let hoverIndex = null; // Índice da barra atualmente em hover

    // Função para renderizar o gráfico
    function renderChart() {
        const chartWidth = canvas.width / scale;
        const chartHeight = canvas.height / scale;
        const maxValue = Math.max(...dataBefore, ...dataAfter);
        const scaleFactor = (chartHeight - padding * 3) / maxValue;

        ctx.clearRect(0, 0, chartWidth, chartHeight);

        // Fundo
        ctx.fillStyle = "rgba(234, 244, 255, 0.8)";
        ctx.fillRect(padding, padding, chartWidth - padding * 2, chartHeight - padding * 3);

        // Eixos
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, chartHeight - padding * 2);
        ctx.lineTo(chartWidth - padding, chartHeight - padding * 2);
        ctx.stroke();

        // Linhas horizontais e valores no eixo Y
        ctx.strokeStyle = "#ddd";
        ctx.fillStyle = "#333";
        ctx.font = "14px Arial";
        ctx.textAlign = "right";
        for (let i = 0; i <= maxValue; i += 10) {
            const y = chartHeight - padding * 2 - i * scaleFactor;

            // Linhas horizontais
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(chartWidth - padding, y);
            ctx.stroke();

            // Valores no eixo Y
            ctx.fillText(i, padding - 15, y + 5);
        }

        // Legenda para o eixo Y
        ctx.save();
        ctx.translate(20, chartHeight / 2); // Posiciona a legenda ao centro
        ctx.rotate(-Math.PI / 2); // Rotaciona o texto para o eixo Y
        ctx.textAlign = "center";
        ctx.fillStyle = "#000";
        ctx.font = "16px Arial";
        ctx.fillText("Unidades de Tempo (Minutos)", 0, 0);
        ctx.restore();

        // Desenhar barras
        labels.forEach((label, index) => {
            const x = padding + index * (barWidth * 2 + barSpacing);

            // Barras "Antes do Sistema"
            const beforeHeight = dataBefore[index] * scaleFactor;
            ctx.fillStyle = hoverIndex === index ? "rgba(255, 99, 132, 1)" : "rgba(255, 99, 132, 0.8)";
            ctx.fillRect(x, chartHeight - padding * 2 - beforeHeight, barWidth, beforeHeight);

            // Barras "Depois do Sistema"
            const afterHeight = dataAfter[index] * scaleFactor;
            ctx.fillStyle = hoverIndex === index ? "rgba(54, 162, 235, 1)" : "rgba(54, 162, 235, 0.8)";
            ctx.fillRect(x + barWidth + 10, chartHeight - padding * 2 - afterHeight, barWidth, afterHeight);

            // Rótulos
            ctx.fillStyle = "#000";
            ctx.textAlign = "center";
            ctx.font = "14px Arial";
            ctx.fillText(label, x + barWidth / 2 + 10, chartHeight - padding * 2 + 25);
        });

        // Legenda no canto superior direito
        const legendX = chartWidth - padding - 200; // Posiciona no canto superior direito
        const legendY = padding - 40;

        ctx.font = "14px Arial";
        ctx.fillStyle = "rgba(255, 99, 132, 0.8)";
        ctx.fillRect(legendX, legendY, 20, 20);
        ctx.fillStyle = "#000";
        ctx.fillText("Antes do Sistema", legendX + 30, legendY + 15);

        ctx.fillStyle = "rgba(54, 162, 235, 0.8)";
        ctx.fillRect(legendX, legendY + 30, 20, 20);
        ctx.fillStyle = "#000";
        ctx.fillText("Depois do Sistema", legendX + 30, legendY + 45);
    }

    // Função para detectar hover
    canvas.addEventListener("mousemove", (event) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = (event.clientX - rect.left) * scale;
        const barGroupWidth = barWidth * 2 + barSpacing;

        hoverIndex = null; // Reset hoverIndex
        labels.forEach((_, index) => {
            const xGroup = padding + index * barGroupWidth;
            if (mouseX >= xGroup && mouseX <= xGroup + barGroupWidth) {
                hoverIndex = index; // Atualiza o índice do hover
            }
        });

        renderChart();
    });

    // Função para limpar o hover quando o mouse sai do canvas
    canvas.addEventListener("mouseleave", () => {
        hoverIndex = null;
        renderChart();
    });

    // Desenha o gráfico inicial
    renderChart();
});
