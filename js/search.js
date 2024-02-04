document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const itemList = document.getElementById('itemList');
    const noResultsMessage = document.getElementById('noResultsMessage');
    const items = Array.from(itemList.getElementsByTagName('li'));

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        let hasResults = false;

        if (searchTerm === '') {
            items.forEach(item => {
                item.classList.add('hidden');
            });
        } else {
            items.forEach(item => {
                const itemText = item.textContent.toLowerCase();
                if (itemText.includes(searchTerm)) {
                    item.classList.remove('hidden');
                    hasResults = true;
                } else {
                    item.classList.add('hidden');
                }
            });
        }

        // Show/hide noResultsMessage based on search results
        if (hasResults) {
            noResultsMessage.classList.add('hidden');
        } else {
            noResultsMessage.classList.remove('hidden');
        }
    });
});