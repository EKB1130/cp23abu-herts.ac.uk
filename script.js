function toggleDarkMode() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
}

function showPopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'block';
    } else {
        alert('Popup not found');
    }
}

function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'none';
    }
}

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'd') toggleDarkMode();
    if (event.key === 'Escape') {
        document.querySelectorAll('.popup').forEach((popup) => {
            popup.style.display = 'none';
        });
    }
});


