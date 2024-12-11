function showPopup(id) {
    const popup = document.getElementById(id);
    popup.style.display = 'block';
}

function closePopup(id) {
    const popup = document.getElementById(id);
    popup.style.display = 'none';
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Add a dark mode button dynamically
document.addEventListener('DOMContentLoaded', () => {
    const darkModeButton = document.createElement('button');
    darkModeButton.innerText = 'Toggle Dark Mode';
    darkModeButton.onclick = toggleDarkMode;
    darkModeButton.style.position = 'fixed';
    darkModeButton.style.top = '10px';
    darkModeButton.style.right = '10px';
    document.body.appendChild(darkModeButton);
});
