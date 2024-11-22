document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#checkin-form");
  const resultSection = document.querySelector("#checkin-result");

  form.addEventListener("submit", (event) => {
      event.preventDefault();

      // Obtém os valores dos campos
      const name = document.querySelector("#patient-name").value.trim();
      const age = document.querySelector("#patient-age").value.trim();
      const phone = document.querySelector("#contact-phone").value.trim();
      const reason = document.querySelector("#appointment-type").value.trim();
      const additionalInfo = document.querySelector("#additional-info").value.trim();

      // Validação básica
      if (!name || !age || !reason) {
          alert("Por favor, preencha todos os campos obrigatórios.");
          return;
      }

      // Validação extra: idade deve ser um número válido e maior que 0
      if (isNaN(age) || age <= 0) {
          alert("Por favor, insira uma idade válida.");
          return;
      }

      // Exibe os resultados do check-in
      resultSection.innerHTML = `
          <h3>Check-in realizado com sucesso!</h3>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Idade:</strong> ${age}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Tipo de Atendimento:</strong> ${reason}</p>
          <p><strong>Informações Adicionais:</strong> ${additionalInfo || "Nenhuma"}</p>
      `;

      // Exibe a seção de resultados
      resultSection.style.display = "block";

      // Limpa o formulário após o envio
      form.reset();
  });
});
