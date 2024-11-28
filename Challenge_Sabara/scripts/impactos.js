document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("impact-chart");
    const ctx = canvas.getContext("2d");

    const scale = window.devicePixelRatio || 1;
    canvas.width = 900 * scale;
    canvas.height = 500 * scale;
    canvas.style.width = "900px";
    canvas.style.height = "500px";
    ctx.scale(scale, scale);

    const dataBefore = [70, 80, 90];
    const dataAfter = [20, 30, 40];
    const labels = ["Pacientes", "Profissionais", "Gestores"];
    const barWidth = 40;
    const padding = 60;
    let hoverIndex = null;

    function renderChart() {
        const chartHeight = canvas.height / scale - padding * 2;
        const maxValue = Math.max(...dataBefore, ...dataAfter);
        const scaleFactor = chartHeight / maxValue;

        ctx.clearRect(0, 0, canvas.width / scale, canvas.height / scale);

        // Fundo
        ctx.fillStyle = "rgba(234, 244, 255, 0.8)";
        ctx.fillRect(padding, padding, canvas.width / scale - padding * 2, chartHeight);

        // Eixos
        ctx.strokeStyle = "#333";
        ctx.beginPath();
        ctx.moveTo(padding, chartHeight + padding);
        ctx.lineTo(padding, padding);
        ctx.lineTo(canvas.width / scale - padding, chartHeight + padding);
        ctx.stroke();

        // Linhas horizontais
        for (let i = 0; i <= maxValue; i += 10) {
            const y = chartHeight + padding - i * scaleFactor;
            ctx.strokeStyle = "#ddd";
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(canvas.width / scale - padding, y);
            ctx.stroke();

            ctx.fillStyle = "#333";
            ctx.font = "14px Arial";
            ctx.fillText(i, padding - 10, y + 5);
        }

        // Barras
        labels.forEach((label, i) => {
            const x = padding + i * 140;
            const beforeHeight = dataBefore[i] * scaleFactor;
            const afterHeight = dataAfter[i] * scaleFactor;

            ctx.fillStyle = hoverIndex === i ? "rgba(255, 99, 132, 1)" : "rgba(255, 99, 132, 0.8)";
            ctx.fillRect(x, chartHeight + padding - beforeHeight, barWidth, beforeHeight);

            ctx.fillStyle = hoverIndex === i ? "rgba(54, 162, 235, 1)" : "rgba(54, 162, 235, 0.8)";
            ctx.fillRect(x + barWidth + 10, chartHeight + padding - afterHeight, barWidth, afterHeight);

            ctx.fillStyle = "#000";
            ctx.fillText(label, x + barWidth / 2 + 20, chartHeight + padding + 25);

            if (hoverIndex === i) {
                // Balão para "Antes do Sistema"
                ctx.fillStyle = "#ff6384";
                ctx.beginPath();
                ctx.arc(x + barWidth / 2, chartHeight + padding - beforeHeight - 15, 15, 0, 2 * Math.PI);
                ctx.fill();
                ctx.fillStyle = "#fff";
                ctx.font = "bold 12px Arial";
                ctx.textAlign = "center";
                ctx.fillText(dataBefore[i], x + barWidth / 2, chartHeight + padding - beforeHeight - 10);

                // Balão para "Depois do Sistema"
                ctx.fillStyle = "#36a2eb";
                ctx.beginPath();
                ctx.arc(x + barWidth * 1.5 + 10, chartHeight + padding - afterHeight - 15, 15, 0, 2 * Math.PI);
                ctx.fill();
                ctx.fillStyle = "#fff";
                ctx.font = "bold 12px Arial";
                ctx.fillText(dataAfter[i], x + barWidth * 1.5 + 10, chartHeight + padding - afterHeight - 10);
            }
        });

        // Legenda
        ctx.fillStyle = "#000";
        ctx.font = "14px Arial";

        // "Antes do Sistema"
        ctx.fillStyle = "rgba(255, 99, 132, 0.8)";
        ctx.fillRect(canvas.width / scale - 250, padding + 10, 20, 20);
        ctx.fillStyle = "#000";
        ctx.fillText("Antes do Sistema", canvas.width / scale - 220, padding + 25);

        // "Depois do Sistema"
        ctx.fillStyle = "rgba(54, 162, 235, 0.8)";
        ctx.fillRect(canvas.width / scale - 250, padding + 40, 20, 20);
        ctx.fillStyle = "#000";
        ctx.fillText("Depois do Sistema", canvas.width / scale - 220, padding + 55);
    }

    // Função para detectar hover
    canvas.addEventListener("mousemove", (event) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = (event.clientX - rect.left) * scale;
        const barGroupWidth = barWidth * 2 + 40;

        hoverIndex = null;
        labels.forEach((_, i) => {
            const xGroup = padding + i * barGroupWidth;
            if (mouseX >= xGroup && mouseX <= xGroup + barGroupWidth) {
                hoverIndex = i;
            }
        });

        renderChart();
    });

    // Remove hover quando o mouse sai do canvas
    canvas.addEventListener("mouseleave", () => {
        hoverIndex = null;
        renderChart();
    });

    // Renderiza o gráfico pela primeira vez
    renderChart();
});
