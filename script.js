document.getElementById('yesBtn').addEventListener('click', function() {
    displayResponse();
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('noResponse').classList.remove('hidden');
    addExtraButtons();
});

let continueAddingButtons = true;  // Flag to control button generation

function addExtraButtons() {
    const extrasContainer = document.createElement('div');
    extrasContainer.id = 'extrasContainer';
    document.body.appendChild(extrasContainer);
    continueAddingButtons = true; // Reset the flag when "No" is clicked

    function addButton(i) {
        if (!continueAddingButtons) return; // Stop adding if flag is false

        const btn = document.createElement('button');
        btn.textContent = 'Yes';
        btn.className = 'extraYes';
        btn.style.position = 'absolute';
        btn.style.left = `${Math.random() * (window.innerWidth - 20)}px`;
        btn.style.top = `${Math.random() * (window.innerHeight - 20)}px`;
        btn.addEventListener('click', displayResponse);
        extrasContainer.appendChild(btn);

        if (i < 40) {
            setTimeout(() => addButton(i + 1), 100);
        }
    }

    addButton(0);
}

function displayResponse() {
    document.getElementById('yesResponse').classList.remove('hidden');
    document.getElementById('valentineQuestion').classList.add('hidden');
    document.getElementById('noResponse').classList.add('hidden');  // Hide the no response message
    startRainingHearts();
    removeAllButtons();
    continueAddingButtons = false;  // Stop adding new buttons
}

function startRainingHearts() {
    const maxHearts = 50;
    const heartContainer = document.createElement('div');
    document.body.appendChild(heartContainer);

    for (let i = 0; i < maxHearts; i++) {
        const heart = document.createElement('span');
        heart.classList.add('heart');
        heart.textContent = '❤︎';
        setTimeout(() => createHeart(heart), i * 300);
    }
}

function createHeart(heart) {
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
    document.body.appendChild(heart);
}

function removeAllButtons() {
    document.querySelectorAll('button').forEach(button => button.remove());
}