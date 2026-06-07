const loot = [];

const lootNameInput = document.getElementById("lootName");
const lootValueInput = document.getElementById("lootValue");
const addLootButton = document.getElementById("addLootButton");
const lootList = document.getElementById("lootList");
const totalValue = document.getElementById("totalValue");
const message = document.getElementById("message");

addLootButton.addEventListener("click", function () {

    const name = lootNameInput.value.trim();
    const value = Number(lootValueInput.value);

    if (name === "") {
        message.textContent = "Please enter a loot name.";
        return;
    }

    if (isNaN(value) || value < 0) {
        message.textContent = "Please enter a valid non-negative loot value.";
        return;
    }

    const lootItem = {
        name: name,
        value: value
    };

    loot.push(lootItem);

    message.textContent = "";

    renderLootList();
    calculateTotal();

    lootNameInput.value = "";
    lootValueInput.value = "";
});

function renderLootList() {

    let output = "";

    for (let i = 0; i < loot.length; i++) {
        output += `<p>${loot[i].name} - ${loot[i].value} gold</p>`;
    }

    lootList.innerHTML = output;
}

function calculateTotal() {

    let total = 0;

    for (let i = 0; i < loot.length; i++) {
        total += loot[i].value;
    }

    totalValue.textContent = `Total Loot Value: ${total} gold`;
}

/*
Debugging Reflection:

I placed a breakpoint inside the click event handler before loot.push(lootItem).

Before mutation, the loot array contained only the previously added loot items.

After loot.push(lootItem) executed, the new loot object appeared in the array.

The page display did not change immediately when the array changed. The interface updated only after renderLootList() and calculateTotal() executed.

This showed that the program state changes first and then the DOM is updated to display the new information.
*/
