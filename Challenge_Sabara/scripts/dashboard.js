document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("chart");
  const ctx = canvas.getContext("2d");

  // Configuração HiDPI/Retina
  const scale = window.devicePixelRatio || 1;
  canvas.width = 900 * scale;
  canvas.height = 500 * scale;
  canvas.style.width = "900px";
  canvas.style.height = "500px";
  ctx.scale(scale, scale);

  // Dados iniciais
  let atual = [40, 60, 50, 80];
  let proposto = [15, 20, 10, 30];
  const labels = ["Check-in Digital", "Atualização de\nStatus", "Integração de\nDados", "Decisão\nGerencial"];

  const padding = 60; // Espaçamento ao redor
  const barWidth = 40; // Largura das barras
  const barSpacing = 100; // Espaçamento entre grupos de barras

  // Função para renderizar o gráfico
  function renderChart() {
      const chartWidth = canvas.width / scale;
      const chartHeight = canvas.height / scale;
      const maxValue = Math.max(...atual, ...proposto);
      const scaleFactor = (chartHeight - padding * 2) / maxValue;

      ctx.clearRect(0, 0, chartWidth, chartHeight);

      // Fundo
      ctx.fillStyle = "rgba(234, 244, 255, 0.8)";
      ctx.fillRect(padding, padding, chartWidth - padding * 2, chartHeight - padding * 2);

      // Eixos
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(padding, padding);
      ctx.lineTo(padding, chartHeight - padding);
      ctx.lineTo(chartWidth - padding, chartHeight - padding);
      ctx.stroke();

      // Linhas horizontais e valores no eixo Y
      ctx.strokeStyle = "#ddd";
      ctx.fillStyle = "#333";
      ctx.font = "14px Arial";
      ctx.textAlign = "right";
      for (let i = 0; i <= maxValue; i += 20) {
          const y = chartHeight - padding - i * scaleFactor;

          // Linhas horizontais
          ctx.beginPath();
          ctx.moveTo(padding, y);
          ctx.lineTo(chartWidth - padding, y);
          ctx.stroke();

          // Valores no eixo Y
          ctx.fillText(i, padding - 15, y + 5);
      }

      // Desenhar barras
      labels.forEach((label, index) => {
          const x = padding + index * (barWidth * 2 + barSpacing);

          // Barras "Atual"
          const atualHeight = atual[index] * scaleFactor;
          ctx.fillStyle = "rgba(255, 99, 132, 0.8)";
          ctx.fillRect(x, chartHeight - padding - atualHeight, barWidth, atualHeight);

          // Barras "Proposto"
          const propostoHeight = proposto[index] * scaleFactor;
          ctx.fillStyle = "rgba(54, 162, 235, 0.8)";
          ctx.fillRect(x + barWidth + 10, chartHeight - padding - propostoHeight, barWidth, propostoHeight);

          // Rótulos
          ctx.fillStyle = "#000";
          ctx.textAlign = "center";
          ctx.font = "14px Arial";
          ctx.fillText(label, x + barWidth / 2, chartHeight - padding + 25);
      });

      // Legenda
      ctx.font = "14px Arial";
      ctx.fillStyle = "rgba(255, 99, 132, 0.8)";
      ctx.fillRect(chartWidth - padding - 200, padding - 10, 20, 20);
      ctx.fillStyle = "#000";
      ctx.fillText("Atual", chartWidth - padding - 170, padding + 5);

      ctx.fillStyle = "rgba(54, 162, 235, 0.8)";
      ctx.fillRect(chartWidth - padding - 100, padding - 10, 20, 20);
      ctx.fillStyle = "#000";
      ctx.fillText("Proposto", chartWidth - padding - 70, padding + 5);
  }

  // Atualizar gráfico com base no período
  function updateChart(period) {
      if (period === "weekly") {
          atual = [20, 30, 25, 40];
          proposto = [10, 15, 10, 20];
      } else if (period === "monthly") {
          atual = [100, 150, 120, 200];
          proposto = [50, 60, 40, 80];
      } else if (period === "yearly") {
          atual = [300, 500, 400, 600];
          proposto = [150, 200, 120, 250];
      }

      // Adiciona a classe "active" para destacar o botão selecionado
      document.querySelectorAll(".filter-button").forEach((button) => button.classList.remove("active"));
      document.getElementById(period).classList.add("active");

      renderChart();
  }

  // Listeners para botões de filtro
  document.getElementById("weekly").addEventListener("click", () => updateChart("weekly"));
  document.getElementById("monthly").addEventListener("click", () => updateChart("monthly"));
  document.getElementById("yearly").addEventListener("click", () => updateChart("yearly"));

  // Desenha o gráfico inicial
  renderChart();
});
