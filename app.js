document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('catalogGrid')) {
        loadCatalog();
    }
});

function loadCatalog() {
    const grid = document.getElementById('catalogGrid');
    const brandFilter = document.getElementById('brandFilter');
    const searchInput = document.getElementById('searchInput');
    
    let cans = JSON.parse(localStorage.getItem('energyCans'));

    if (!cans || cans.length === 0) {
        cans = [
            { id: "1", name: "Red Bull Original", brand: "Red Bull", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Red_Bull_Energy_Drink.jpg/220px-Red_Bull_Energy_Drink.jpg", color: "#0000ff", rating: 10, taste: "Классика", gas: "Сильная", energy: "Бодрит", review: "Легенда" },
            { id: "2", name: "Flash Up Ultra", brand: "Flash", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Burn_Energy_Drink.jpg/220px-Burn_Energy_Drink.jpg", color: "#ffcc00", rating: 7, taste: "Цитрус", gas: "Средняя", energy: "Средне", review: "Норм" }
        ];
        localStorage.setItem('energyCans', JSON.stringify(cans));
    }

    const brands = [...new Set(cans.map(can => can.brand))];
    brandFilter.innerHTML = '<option value="all">Все бренды</option>';
    brands.forEach(brand => {
        brandFilter.innerHTML += `<option value="${brand}">${brand}</option>`;
    });

    function renderCards(data) {
        grid.innerHTML = '';
        data.forEach(can => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.setProperty('--can-color', can.color);
            // Обернули в ссылку на страницу банки, передавая ID в URL
            card.innerHTML = `
                <a href="can.html?id=${can.id}" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center; width: 100%;">
                    <div class="card-img-container">
                        <img src="${can.image}" alt="${can.name}" onerror="this.src='https://via.placeholder.com/150?text=Нет+фото'">
                    </div>
                    <h3>${can.name}</h3>
                    <div class="brand">${can.brand}</div>
                    <div class="rating">★ ${can.rating}/10</div>
                </a>
            `;
            grid.appendChild(card);
        });
    }

    renderCards(cans);

    function filterCans() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedBrand = brandFilter.value;
        const filtered = cans.filter(can => {
            const matchesSearch = can.name.toLowerCase().includes(searchTerm) || can.brand.toLowerCase().includes(searchTerm);
            const matchesBrand = selectedBrand === 'all' || can.brand === selectedBrand;
            return matchesSearch && matchesBrand;
        });
        renderCards(filtered);
    }

    searchInput.addEventListener('input', filterCans);
    brandFilter.addEventListener('change', filterCans);
}
