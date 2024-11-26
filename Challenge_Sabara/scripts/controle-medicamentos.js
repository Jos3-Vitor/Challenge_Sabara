document.addEventListener("DOMContentLoaded", () => {
    const medicineTable = document.querySelector("#medicine-table tbody");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const addMedicineButton = document.getElementById("add-medicine");
    const modal = document.getElementById("medicine-modal");
    const modalTitle = document.getElementById("modal-title");
    const medicineNameInput = document.getElementById("medicine-name");
    const medicineQuantityInput = document.getElementById("medicine-quantity");
    const saveButton = document.getElementById("save-button");
    const cancelButton = document.getElementById("cancel-button");
    const notification = document.getElementById("notification");

    let medicines = [];
    let editIndex = null;

    // Renderiza medicamentos na tabela
    function renderMedicines(filteredMedicines = null) {
        medicineTable.innerHTML = ""; // Limpa a tabela
        const medicinesToRender = filteredMedicines || medicines;

        medicinesToRender.forEach((medicine, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${medicine.name}</td>
                <td>${medicine.quantity}</td>
                <td>
                    <button class="edit-button" data-index="${index}">Editar</button>
                    <button class="delete-button" data-index="${index}">Excluir</button>
                </td>
            `;
            medicineTable.appendChild(row);
        });

        // Adiciona eventos aos botões de editar e excluir
        document.querySelectorAll(".edit-button").forEach(button =>
            button.addEventListener("click", (e) => editMedicine(e.target.dataset.index))
        );
        document.querySelectorAll(".delete-button").forEach(button =>
            button.addEventListener("click", (e) => deleteMedicine(e.target.dataset.index))
        );
    }

    // Exibe notificações no balão central
    function showNotification(text) {
        notification.textContent = text;
        notification.classList.add("visible");
        notification.classList.remove("hidden");

        // Oculta a mensagem após 3 segundos
        setTimeout(() => {
            notification.classList.add("hidden");
            notification.classList.remove("visible");
        }, 3000);
    }

    // Pesquisa medicamento pelo nome
    function searchMedicine() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredMedicines = medicines.filter(medicine =>
            medicine.name.toLowerCase().includes(searchTerm)
        );

        if (filteredMedicines.length === 0) {
            showNotification("Medicamento não encontrado!");
        } else {
            renderMedicines(filteredMedicines); // Renderiza somente os medicamentos encontrados
        }
    }

    // Adiciona ou edita medicamentos
    function addOrEditMedicine() {
        const name = medicineNameInput.value.trim();
        const quantity = parseInt(medicineQuantityInput.value, 10);

        if (!name || isNaN(quantity)) {
            showNotification("Preencha todos os campos corretamente!");
            return;
        }

        if (editIndex === null) {
            medicines.push({ name, quantity });
            showNotification("Medicamento adicionado com sucesso!");
        } else {
            medicines[editIndex] = { name, quantity };
            showNotification("Medicamento editado com sucesso!");
        }

        renderMedicines();
        closeModal();
    }

    // Exclui um medicamento
    function deleteMedicine(index) {
        const deletedMedicine = medicines[index].name;
        medicines.splice(index, 1); // Remove o medicamento
        renderMedicines();
        showNotification(`Medicamento "${deletedMedicine}" excluído!`);
    }

    // Edita um medicamento
    function editMedicine(index) {
        const medicine = medicines[index];
        medicineNameInput.value = medicine.name;
        medicineQuantityInput.value = medicine.quantity;
        modalTitle.textContent = "Editar Medicamento";
        editIndex = index;
        modal.classList.remove("hidden");
    }

    // Abre o modal para adicionar medicamento
    function openModal() {
        medicineNameInput.value = "";
        medicineQuantityInput.value = "";
        modalTitle.textContent = "Adicionar Medicamento";
        editIndex = null;
        modal.classList.remove("hidden");
    }

    // Fecha o modal
    function closeModal() {
        modal.classList.add("hidden");
    }

    // Eventos dos botões
    searchButton.addEventListener("click", searchMedicine);
    addMedicineButton.addEventListener("click", openModal);
    saveButton.addEventListener("click", addOrEditMedicine);
    cancelButton.addEventListener("click", closeModal);

    renderMedicines(); // Renderiza a tabela inicial
});
