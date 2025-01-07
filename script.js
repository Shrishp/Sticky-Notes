let colorToggle = true; 

function createCard() {
    const cardSpace = document.getElementById('Container');
    const noteTextInput = document.getElementById('noteText');
    const noteText = noteTextInput.value.trim();

    if (noteText === '') return;

    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.style.backgroundColor = colorToggle ? '#d1e1ff' : '#fefffe';
    colorToggle = !colorToggle;

    const textNode = document.createElement('p');
    textNode.textContent = noteText;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'x';
    removeBtn.addEventListener('click', function () {
        cardSpace.removeChild(newCard);
    });

    newCard.appendChild(textNode);
    newCard.appendChild(removeBtn);
    cardSpace.appendChild(newCard);
    noteTextInput.value = '';
}