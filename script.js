async function performSearch() {
    const query = document.getElementById('search-input').value;
    if (query) {
        // ��������������� �� ������ � ��������� ��������
        const searchUrl = `https://yandex.ru/search/?text=

${encodeURIComponent(query)}`;
        window.open(searchUrl, '_blank'); // ��������� � ����� ���� 

} else {
        alert('����������, ������� ��������� ������.');
    }
}