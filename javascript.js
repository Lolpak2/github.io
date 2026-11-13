// === НАСТРОЙКИ И СОХРАНЕНИЕ ===
function openSettings() { ... }

function setTheme(themeClass, btnId) {
    // ... existing logic ...
    localStorage.setItem('savedTheme', themeClass);
    localStorage.setItem('savedThemeBtn', btnId);
}

function setFont(fontClass, btnId) {
    // ... existing logic ...
    localStorage.setItem('savedFont', fontClass);
    localStorage.setItem('savedFontBtn', btnId);
}

function handleBgUpload(event) {
    // ... existing logic ...
    const base64Image = e.target.result;
    localStorage.setItem('savedBg', base64Image); // Might need try-catch
}

function resetBg() {
    // ... existing logic ...
    localStorage.removeItem('savedBg');
}

function toggleSnow(isEnabled) {
    // ... existing logic ...
    localStorage.setItem('savedSnow', isEnabled ? 'true' : 'false');
}

// Загрузка при старте
function loadSettings() {
    // Тема
    const savedTheme = localStorage.getItem('savedTheme');
    const savedThemeBtn = localStorage.getItem('savedThemeBtn');
    if (savedTheme && savedThemeBtn) {
        setTheme(savedTheme, savedThemeBtn);
    }
    
    // Шрифт
    const savedFont = localStorage.getItem('savedFont');
    const savedFontBtn = localStorage.getItem('savedFontBtn');
    if (savedFont && savedFontBtn) {
        setFont(savedFont, savedFontBtn);
    }
    
    // Фон
    const savedBg = localStorage.getItem('savedBg');
    if (savedBg) {
        document.body.style.backgroundImage = `url(${savedBg})`;
    }
    
    // Снег
    const savedSnow = localStorage.getItem('savedSnow');
    if (savedSnow === 'true') {
        document.getElementById('snow-toggle').checked = true;
        toggleSnow(true);
    }
}

// Вызываем загрузку в конце скрипта
loadSettings();
setInterval(updateUI, 1000);
updateUI();