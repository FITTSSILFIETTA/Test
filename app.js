document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('catalogGrid')) {
        loadCatalog();
    }
});

function loadCatalog() {
    const grid = document.getElementById('catalogGrid');
    const brandFilter = document.getElementById('brandFilter');
    const searchInput = document.getElementById('searchInput');
    
    let cans = JSON.parse(localStorage.getItem('energyCans')) || [];

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
            
            // Если есть сохраненный цвет — ставим его, иначе серый по умолчанию
            card.style.setProperty('--can-color', can.color || '#ccc');
            
            card.innerHTML = `
                <a href="can.html?id=${can.id}" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center; width: 100%;">
                    <div class="card-img-container">
                        <img src="${can.image}" alt="${can.name}" crossorigin="anonymous" onerror="this.src='https://via.placeholder.com/150?text=Нет+фото'">
                    </div>
                    <h3>${can.name}</h3>
                    <div class="brand">${can.brand}</div>
                    <div class="rating">★ ${can.rating}/10</div>
                </a>
            `;
            grid.appendChild(card);

            // МАГИЯ: Берем цвет прямо из картинки, если он не задан вручную
            const img = card.querySelector('img');
            img.onload = function() {
                try {
                    // Используем библиотеку ColorThief (она подключена в index.html)
                    if(window.ColorThief) {
                        const colorThief = new ColorThief();
                        const dominantColor = colorThief.getColor(img);
                        // Переводим в красивый градиент
                        const gradient = `linear-gradient(90deg, rgb(${dominantColor[0]},${dominantColor[1]},${dominantColor[2]}), #ffffff)`;
                        card.style.setProperty('--can-color', `rgb(${dominantColor[0]},${dominantColor[1]},${dominantColor[2]})`);
                    }
                } catch(e) {
                    console.log("Не удалось вычислить цвет картинки");
                }
            };
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
