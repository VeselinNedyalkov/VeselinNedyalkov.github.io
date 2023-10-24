function toggleDarkMode() {
    const checkbox = document.getElementById('myCheckbox');
    const body = document.body;
    body.classList.toggle('dark-mode', checkbox.checked);
}

document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById('myCheckbox');
    checkbox.addEventListener('change', toggleDarkMode);
});


// document.addEventListener('DOMContentLoaded', function() {
//     const elementsWithTranslationKey = document.querySelectorAll('[data-translation-key]');
//     elementsWithTranslationKey.forEach(element => {
//         const translationKey = element.getAttribute('data-translation-key');
//         element.textContent = i18next.t(translationKey);
//     });
// });