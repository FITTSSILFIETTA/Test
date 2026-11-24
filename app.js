document.addEventListener('DOMContentLoaded', () => {
    // Если мы на главной странице
    if (document.getElementById('catalogGrid')) {
        loadCatalog();
    }
});

function loadCatalog() {
    const grid = document.getElementById('catalogGrid');
    const brandFilter = document.getElementById('brandFilter');
    const searchInput = document.getElementById('searchInput');
    
    // Берем данные из памяти. Если пусто, делаем тестовые банки для примера
    let cans = JSON.parse(localStorage.getItem('energyCans'));

    if (!cans || cans.length === 0) {
        // Добавим пару тестовых банок, чтобы ты увидел, как это работает
        cans = [
            { id: 1, name: "Monster Ultra Paradise", brand: "Monster", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Monster_Energy_Ultra_Paradise.png/220px-Monster_Energy_Ultra_Paradise.png", color: "#a8ff00", rating: 9 },
            { id: 2, name: "Burn Original", brand: "Burn", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Burn_Energy_Drink.jpg/220px-Burn_Energy_Drink.jpg", color: "#ff0000", rating: 8 },
            { id: 3, name: "Red Bull Original", brand: "Red Bull", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Red_Bull_Energy_Drink.jpg/220px-Red_Bull_Energy_Drink.jpg", color: "#0000ff", rating: 10 }
        ];
        localStorage.setItem('energyCans', JSON.stringify(cans));
    }

    // Заполняем фильтр брендов
    const brands = [...new Set(cans.map(can => can.brand))];
    brandFilter.innerHTML = '<option value="all">Все бренды</option>';
    brands.forEach(brand => {
        brandFilter.innerHTML += `<option value="${brand}">${brand}</option>`;
    });

    // Функция отрисовки
    function renderCards(data) {
        grid.innerHTML = '';
        data.forEach(can => {
            const card = document.createElement('div');
            card.className = 'card';
            // Передаем цвет банки в CSS-переменную
            card.style.setProperty('--can-color', can.color);
            card.innerHTML = `
                <div class="card-img-container">
                    <img src="${can.image}" alt="${can.name}" onerror="this.src='https://via.placeholder.com/150?text=Нет+фото'">
                </div>
                <h3>${can.name}</h3>
                <div class="brand">${can.brand}</div>
                <div class="rating">★ ${can.rating}/10</div>
            `;
            grid.appendChild(card);
        });
    }

    // Первичная отрисовка
    renderCards(cans);

    // Логика фильтров
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
