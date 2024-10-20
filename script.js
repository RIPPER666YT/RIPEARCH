async function performSearch() {
    const query = document.getElementById('search-input').value;
    if (query) {
        // Перенаправление на Яндекс с поисковым запросом
        const searchUrl = `https://yandex.ru/search/?text=

${encodeURIComponent(query)}`;
        window.open(searchUrl, '_blank'); // Открываем в новом окне 

} else {
        alert('Пожалуйста, введите поисковый запрос.');
    }
}