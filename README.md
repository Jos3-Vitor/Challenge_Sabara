# Sistema Integrado do Hospital Sabará

O Sistema Integrado do Hospital Sabará é uma aplicação web desenvolvida para otimizar processos hospitalares, melhorando a experiência de pacientes, profissionais de saúde e gestores. Este projeto foi desenvolvido com foco em acessibilidade, usabilidade e eficiência, incorporando práticas modernas de desenvolvimento de software.

---

## **1. Introdução**

Este sistema foi projetado para atender às necessidades de hospitais modernos. Entre as principais funcionalidades estão:

- Check-in Digital
- Controle de Medicamentos
- Monitoramento de Status de Pacientes
- Agendamento de Consultas
- Dashboards Interativos
- Relatórios de Impacto em Números

---

## **2. Estrutura do Projeto**

```plaintext
Challenge_Sabara/
├── index.html
├── pages/
│   ├── checkin.html
│   ├── status.html
│   ├── farmacia.html
│   ├── agendamento.html
│   ├── impactos.html
│   ├── dashboard.html
├── styles/
│   ├── normalize.css
│   ├── styles.css
│   ├── checkin.css
│   ├── controle-medicamentos.css
│   ├── agendamento.css
│   ├── impactos.css
│   ├── dashboard.css
├── scripts/
│   ├── notification.js
│   ├── news.js
│   ├── form-validation.js
│   ├── controle-medicamentos.js
│   ├── agendamento.js
│   ├── impactos.js
│   ├── dashboard.js
├── assets/
│   ├── logo.jpg
│   ├── check-in_icon.png
│   ├── pacientes_icon.png
│   ├── doctor_icon.png
│   ├── manager_icon.png



## **3. Funcionalidades**

### **3.1 Página Inicial (`index.html`)**

- **Descrição**: Fornece uma visão geral do sistema com links para as funcionalidades principais.
- **Componentes**:
  - Notificações dinâmicas.
  - Hero section com call-to-action para Check-in Digital.
  - Seção de notícias.
- **Estilos e scripts**: `styles.css`, `notification.js`, `news.js`.
- **Referências**:
  - Nielsen Norman Group. ["Design de progressão de conteúdo"](https://www.nngroup.com/).
  - MDN Web Docs. ["Boas práticas para animações"](https://developer.mozilla.org/).

---

### **3.2 Check-in Digital (`pages/checkin.html`)**

- **Descrição**: Página para registro de pacientes com validação em tempo real.
- **Componentes**:
  - Formulário para captura de dados do paciente (nome, idade, contato, etc.).
  - Validação e feedback para erros no formulário.
- **Estilos e scripts**: `checkin.css`, `form-validation.js`.
- **Referências**:
  - MDN Web Docs. ["Validação de formulários em HTML"](https://developer.mozilla.org/).
  - UX Design Institute. ["Formulários acessíveis"](https://uxdesigninstitute.com/).

---

### **3.3 Controle de Medicamentos (`pages/farmacia.html`)**

- **Descrição**: Permite gerenciar o estoque de medicamentos de forma eficiente.
- **Componentes**:
  - Barra de pesquisa para busca de medicamentos.
  - Tabela dinâmica de medicamentos com opções de edição e exclusão.
  - Modal para adicionar medicamentos.
- **Estilos e scripts**: `controle-medicamentos.css`, `controle-medicamentos.js`.
- **Referências**:
  - Smashing Magazine. ["Estratégias de design para dashboards"](https://smashingmagazine.com/).
  - MDN Web Docs. ["Criação de tabelas dinâmicas com JavaScript"](https://developer.mozilla.org/).

---

### **3.4 Status do Paciente (`pages/status.html`)**

- **Descrição**: Monitora o status de pacientes em tempo real.
- **Componentes**:
  - Formulário para consulta de status.
  - Exibição dinâmica de etapas do atendimento e exames realizados.
- **Estilos e scripts**: `status.css`, `status.js`.
- **Referências**:
  - Nielsen Norman Group. ["UI Feedback Patterns"](https://nngroup.com/).
  - MDN Web Docs. ["Manipulação de DOM"](https://developer.mozilla.org/).

---

### **3.5 Agendamento de Consultas (`pages/agendamento.html`)**

- **Descrição**: Facilita o agendamento de consultas com seleção de especialidade, médico e horário.
- **Componentes**:
  - Formulário dinâmico com validação.
  - Feedback visual ao selecionar horários disponíveis.
- **Estilos e scripts**: `agendamento.css`, `agendamento.js`.
- **Referências**:
  - UX Design Institute. ["Design eficiente de formulários"](https://uxdesigninstitute.com/).
  - MDN Web Docs. ["Manipulação de dados no JavaScript"](https://developer.mozilla.org/).

---

### **3.6 Impactos em Números (`pages/impactos.html`)**

- **Descrição**: Exibe relatórios sobre melhorias de eficiência antes e depois da implementação do sistema.
- **Componentes**:
  - Gráfico comparativo interativo.
  - Seções detalhando os impactos em pacientes, profissionais e gestores.
- **Estilos e scripts**: `impactos.css`, `impactos.js`.
- **Referências**:
  - Smashing Magazine. ["Uso de gráficos para contar histórias"](https://smashingmagazine.com/).
  - MDN Web Docs. ["Canvas API"](https://developer.mozilla.org/).

---

### **3.7 Dashboard Administrativo (`pages/dashboard.html`)**

- **Descrição**: Fornece dados analíticos em tempo real para gestores.
- **Componentes**:
  - Indicadores chave (ex.: pacientes do dia, consultas agendadas).
  - Gráficos interativos para análises semanais.
  - Lista de tarefas com edição dinâmica.
- **Estilos e scripts**: `dashboard.css`, `dashboard.js`.
- **Referências**:
  - MDN Web Docs. ["Manipulação de DOM em JavaScript"](https://developer.mozilla.org/).
  - Nielsen Norman Group. ["Design de dashboards interativos"](https://nngroup.com/).

---

## **4. Justificativa Técnica**

### **4.1 HTML**
- Uso de tags semânticas para SEO e acessibilidade.
- Estrutura modularizada para manutenção simplificada.
- **Referências**:
  - W3C. ["Padrões HTML"](https://html.spec.whatwg.org/).

---

### **4.2 CSS**
- Utilização de flexbox e grid para layout responsivo.
- Animações para melhorar a interação do usuário.
- **Referências**:
  - Smashing Magazine. ["Design responsivo"](https://smashingmagazine.com/).
  - MDN Web Docs. ["CSS Grid Layout"](https://developer.mozilla.org/).

---

### **4.3 JavaScript**
- Implementação de interatividade sem bibliotecas externas para otimização de desempenho.
- Manipulação direta do DOM para gráficos e validações dinâmicas.
- **Referências**:
  - Flanagan, David. ["JavaScript: The Definitive Guide"](https://www.oreilly.com/).
  - MDN Web Docs. ["JavaScript moderno"](https://developer.mozilla.org/).

---

## **5. Considerações Finais**

Este projeto demonstra a implementação de um sistema integrado completo para hospitais, alinhado às melhores práticas de design e desenvolvimento. É uma base sólida para futuras expansões, como integração com APIs externas ou módulos de inteligência artificial.

Para dúvidas ou sugestões, entre em contato pelo e-mail [contato@hospitalsabara.com.br](mailto:contato@hospitalsabara.com.br).

**Equipe de Desenvolvimento:**  
Hospital Sabará | 2024

---

## **6. Autores**

Este projeto foi desenvolvido por:

- **José Vitor Giardini Chagas**  
  - **RM: 560413

- **Caio Araujo**  
  - **RM: 560357**

- **Henrique Pacifico**  
  - **RM: 560289**

- **Matheus Machado Caposse**
  - **RM: 560340**
  
---

## **Referências de Design e Desenvolvimento**

1. Nielsen Norman Group. ["Práticas de design UI"](https://nngroup.com/).
2. Smashing Magazine. ["Padrões de UX para aplicativos"](https://smashingmagazine.com/).
3. MDN Web Docs. ["Guia completo de HTML/CSS/JS"](https://developer.mozilla.org/).
4. W3C. ["Padrões HTML"](https://html.spec.whatwg.org/).
5. Flanagan, David. ["JavaScript: The Definitive Guide"](https://www.oreilly.com/).
