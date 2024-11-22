# Challenge_Sabara
# Sistema Integrado do Hospital Sabará

## **1. Introdução**
O **Sistema Integrado do Hospital Sabará** é uma aplicação web destinada a automatizar processos hospitalares, facilitando a experiência de pacientes, profissionais e gestores. Entre as funcionalidades desenvolvidas estão check-in digital, monitoramento de status de pacientes, controle de medicamentos e dashboards administrativos.

---

## **2. Estrutura do Projeto**
O projeto está organizado da seguinte forma:
```plaintext
Challenge_Sabara/
├── index.html
├── pages/
│   ├── checkin.html
│   ├── status.html
│   ├── farmacia.html
│   ├── impactos.html
│   ├── dashboard.html
├── styles/
│   ├── normalize.css
│   ├── styles.css
│   ├── dashboard.css
├── scripts/
│   ├── notification.js
│   ├── news.js
│   ├── dashboard.js
├── assets/
│   ├── logo.jpg
│   ├── check-in_icon.png
│   ├── status_icon.png
│   ├── meds_icon.png

# Sistema Integrado do Hospital Sabará

---

## **3. Funcionalidades**

### **3.1 Página Inicial (`index.html`)**
- **Descrição**:
  - Apresenta uma visão geral das funcionalidades do sistema.
  - Inclui um banner de notificação dinâmico e uma seção de notícias.
- **Componentes**:
  - **Hero Section**:
    - Contém uma introdução ao sistema e um botão para o Check-in Digital.
  - **Funcionalidades**:
    - Breve explicação sobre as principais funções disponíveis.
  - **Notícias**:
    - Lista de notícias atualizável dinamicamente.
- **Referência**:
  - Nielsen Norman Group. "Design de progressão de conteúdo". Disponível em: [nngroup.com](https://www.nngroup.com/).

---

### **3.2 Check-in Digital (`pages/checkin.html`)**
- **Descrição**:
  - Permite que pacientes realizem check-in digital, agilizando o atendimento.
  - Inclui validação de dados via JavaScript.
- **Componentes**:
  - **Formulário**:
    - Campos obrigatórios, como nome, idade e tipo de atendimento.
    - Inclui validação para evitar envio de dados inválidos.
- **Referência**:
  - MDN Web Docs. "Validação de formulários". Disponível em: [developer.mozilla.org](https://developer.mozilla.org/).

---

### **3.3 Dashboard Administrativo (`pages/dashboard.html`)**
- **Descrição**:
  - Fornece gráficos comparativos para tempos atuais e propostos.
  - Botões permitem alternar entre visualizações semanal, mensal e anual.
- **Componentes**:
  - **Gráfico de Barras**:
    - Desenvolvido com HTML5 Canvas e JavaScript.
    - Inclui animações para maior interação.
  - **Filtros Interativos**:
    - Atualizam o gráfico dinamicamente com novos dados.
- **Referência**:
  - UX Design Institute. "Gráficos animados e interativos". Disponível em: [uxdesigninstitute.com](https://www.uxdesigninstitute.com/).

---

### **3.4 Notificações Dinâmicas (`scripts/notification.js`)**
- **Descrição**:
  - Exibe mensagens personalizadas em um banner no topo da página.
  - Contém botão para fechar notificações.
- **Referência**:
  - Nielsen Norman Group. "UI Feedback Patterns". Disponível em: [nngroup.com](https://www.nngroup.com/).

---

### **3.5 Notícias Dinâmicas (`scripts/news.js`)**
- **Descrição**:
  - Carrega notícias adicionais ao clicar em "Ver Mais Notícias".
  - Permite fechar a exibição adicional com o botão "Fechar".
- **Referência**:
  - Smashing Magazine. "Estratégias de carregamento dinâmico". Disponível em: [smashingmagazine.com](https://www.smashingmagazine.com/).

---

## **4. Justificativa Técnica**
### **4.1 HTML**
- Uso de tags semânticas (`<header>`, `<main>`, `<section>`) para melhor acessibilidade.
- **Referência**:
  - W3C. "Padrões HTML Living Standard". Disponível em: [w3.org](https://html.spec.whatwg.org/).

### **4.2 CSS**
- Uso de `normalize.css` para consistência visual entre navegadores.
- **Referência**:
  - Normalize.css. Disponível em: [normalize.css](https://necolas.github.io/normalize.css/).

### **4.3 JavaScript**
- Implementação sem bibliotecas externas, otimizando desempenho.
- **Referência**:
  - Flanagan, David. "JavaScript: The Definitive Guide". O'Reilly Media.

---