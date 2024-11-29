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

```

## **3. Funcionalidades**

# Página Inicial (`index.html`)

## Descrição
A página inicial do sistema integrado do Hospital Sabará apresenta uma visão geral das principais funcionalidades, oferecendo navegação intuitiva e acesso rápido às ferramentas disponíveis. É a porta de entrada para pacientes, profissionais e gestores explorarem os recursos do sistema.

## Componentes Principais
- **Notificações Dinâmicas**: Um banner interativo que exibe mensagens importantes ou novidades diretamente na página inicial.
- **Hero Section**: Área destacada com um call-to-action direcionado para o Check-in Digital, facilitando o acesso a essa funcionalidade essencial.
- **Seção de Serviços**: Cards interativos apresentando os serviços principais, como Check-in Digital, Controle de Medicamentos e Status do Paciente.
- **Seção de Notícias**: Lista atualizada com as últimas novidades e comunicados do hospital.

## Estilos e Scripts
- **Estilos**: `styles.css`
  - Layout responsivo e moderno.
  - Uso de gradientes suaves e animações para melhorar a experiência do usuário.
- **Scripts**:
  - `notification.js`: Gerencia o comportamento das notificações dinâmicas.
  - `news.js`: Responsável por carregar e exibir notícias dinamicamente.
  - `impactos.js`:
    - Exibição de comparações entre os processos antes e depois do sistema.
    - Função de hover para destacar valores específicos no gráfico.

## Referências Técnicas
- Nielsen Norman Group. ["Design de progressão de conteúdo"](https://www.nngroup.com/).
- MDN Web Docs. ["Responsividade em CSS"](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design).
- Smashing Magazine. ["Design eficiente para homepages"](https://www.smashingmagazine.com/).
- David Flanagan. ["JavaScript: The Definitive Guide"](https://www.oreilly.com/library/view/javascript-the-definitive/9781491952023/).

## Funcionalidades Destacadas
1. **Notificações Dinâmicas**:
   - Exibe avisos importantes.
   - Possui animação de fade-in para destacar a mensagem.
2. **Hero Section**:
   - Botão CTA (Call-to-Action) para direcionar usuários ao Check-in Digital.
   - Design responsivo e visualmente atraente.
3. **Seção de Serviços**:
   - Apresentação interativa dos principais recursos do sistema.
   - Alinhamento horizontal com animações de hover.
4. **Seção de Notícias**:
   - Atualização dinâmica das últimas informações hospitalares.
   - Botões para carregar mais notícias ou fechar a seção.

4.  **Menu Expansivo**:
    - Inclusão de menu expansivo interativo para navegação nas seções da página.
    - Alinhamento visual aprimorado para uma experiência mais fluida.
    - Adição de animações sutis para maior engajamento do usuário.
    
5. **Seção de Impactos**:
    - Comparação visual dos resultados antes e depois da implementação do sistema.
    - Uso de gráficos com balões informativos em hover para maior detalhamento.
    - Destaques nos impactos positivos para pacientes, profissionais e gestores.

---

© 2024 Hospital Sabará. Todos os direitos reservados.

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

### **3.6 Dashboard Administrativo (`pages/dashboard.html`)**

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
