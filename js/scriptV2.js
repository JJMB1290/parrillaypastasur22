// Datos del Menú Restaurante
const menuData = [
    {
        category: "🥬 Ensaladas",
        id: "ensaladas",
        image: "./images/ensalada.jpg",
        items: [
            { name: "De la Casa", desc: "Mezcla de lechugas, apio, pepino y jitomate con aderezo de la casa", price: "$83" },
            { name: "Mixta", desc: "Lechugas, espinaca, apio, pepino, jitomate, cebolla morada, aguacate, nuez y cacahuate", price: "$120" },
            { name: "Verde", desc: "Variedad de lechugas, espinaca, apio, pepino y cacahuate con aderezo especial", price: "$98" },
            { name: "Queso Árabe", desc: "Mezcla de lechugas, espinaca, jitomate, apio y pepino con queso árabe y aceite de oliva", price: "$137" }
        ]
    },
    {
        category: "🍝 Pastas",
        id: "pastas",
        image: "./images/pasta.jpg",
        note: "Extra: Agrega pechuga de pollo asada por $60",
        items: [
            { name: "Bolonesa", desc: "Con carne de res y la exquisita salsa de la casa", price: "$132" },
            { name: "Carbonara", desc: "Tradicional receta italiana con tocino", price: "$137" },
            { name: "Alfredo", desc: "Bañada en deliciosa salsa italiana de crema blanca", price: "$128" },
            { name: "Primavera", desc: "Combinación de juliana de verduras y un toque de aceite de oliva", price: "$128" },
            { name: "A la Crema", desc: "Impregnada de deliciosa crema acidificada y queso parmesano", price: "$98" },
            { name: "Al Burro", desc: "Preparada con mantequilla natural", price: "$105" },
            { name: "Sur 22", desc: "Preparada en salsa de tomate y crema con toque de picante", price: "$132" }
        ]
    },
    {
        category: "🔥 Parrilla",
        id: "parrilla",
        image: "./images/parrilla.jpg",
        note: "Incluye sopa del día y arroz",
        items: [
            { name: "Parrillada Sur 22", desc: "Arrachera, sirloin, chorizo español y argentino, verduras a la parrilla", price: "Para 1: $205 | Para 2: $385" },
            { name: "Sirloin o Arrachera", desc: "Corte jugoso servido con papas a la crema o con nopales y cebollita", price: "$162 - $170" },
            { name: "Brochetas", desc: "Con cebolla, jitomate, calabaza y pimiento (Res, Pollo, Cerdo o Combinadas)", price: "$152 - $162" },
            { name: "Bistec de Res a la Mexicana", desc: "Suave carne de res preparada a la manera tradicional", price: "$148" },
            { name: "Fajitas", desc: "Acompañadas con nopal y cebolla (Res, Cerdo, Pollo o Combinadas)", price: "$152 - $162" },
            { name: "Pechuga Rellena", desc: "De queso y verduras con guarnición de ensalada fresca", price: "$137" },
            { name: "Milanesa de Pollo", desc: "Con verduras a la plancha/al vapor, ensalada fresca o papas fritas", price: "$132" },
            { name: "Pechuga Asada", desc: "Con verduras a la plancha/al vapor, ensalada fresca o papas fritas", price: "$132" }
        ]
    },
    {
        category: "🍔 Hamburguesas",
        id: "hamburguesas",
        image: "./images/hamburguesa.jpg",
        note: "100% Carne Fresca",
        extras: [
            { name: "Queso", price: "$35" },
            { name: "Tocino", price: "$45" },
            { name: "Aguacate", price: "$40" },
            { name: "Piña", price: "$25" }
        ],
        items: [
            { name: "Sur 22", desc: "220g carne de res, aderezo, lechuga y jitomate", price: "$108" },
            { name: "Sur 22 Jr", desc: "120g carne de res, aderezo, lechuga y jitomate", price: "$94" },
            { name: "Cheese Burger", desc: "220g carne de res con rebanadas empanizadas de queso gouda", price: "$120" },
            { name: "Cheese Burger Jr", desc: "120g carne de res con rebanadas empanizadas de queso gouda", price: "$110" },
            { name: "Arrachera", desc: "220g filete de arrachera, aderezo, lechuga y jitomate", price: "$108" },
            { name: "Arrachera Jr", desc: "120g filete de arrachera, aderezo, lechuga y jitomate", price: "$94" },
            { name: "Qui-Qui-Ri-Qui", desc: "220g pechuga de pollo empanizada, aderezo, lechuga y jitomate", price: "$108" },
            { name: "Qui-Qui-Ri-Qui Jr", desc: "120g pechuga de pollo empanizada, aderezo, lechuga y jitomate", price: "$94" }
        ]
    },
    {
        category: "🥤 Bebidas",
        id: "bebidas",
        items: [
            { name: "Aguas de Sabor", desc: "Sabores naturales (Con Refill)", price: "$30" },
            { name: "Refresco", desc: "Lata / Botella variedad de sabores", price: "$35" },
            { name: "Café Americano", desc: "Café recién preparado / De olla / Té", price: "$30 - $35" }
        ]
    },
    {
        category: "🍰 Postres",
        id: "postres",
        items: [
            { name: "Pay de Plátano", desc: "Postre casero del día", price: "$60" },
            { name: "Pastel Helado", desc: "Rebanada individual", price: "$60" },
            { name: "Gelatina de Frutos Rojos", desc: "Fresca y natural", price: "$55" }
        ]
    },
    {
        category: "＋ Extras",
        id: "extras",
        items: [
            { name: "Papas a la Francesa", desc: "Regulares ($57) o Grandes ($118)", price: "$57 / $118" },
            { name: "Sopa del Día", desc: "Sopa o crema casera del día", price: "$25" },
            { name: "Arroz", desc: "Porción de arroz recién preparado", price: "$25" },
            { name: "Espagueti a la Crema", desc: "Porción individual de espagueti a la crema", price: "$40" },
            { name: "Orden de Chalupas Poblanas", desc: "Preparadas al momento", price: "$60" },
            { name: "Orden de Verduras a la Plancha", desc: "Selección de verduras frescas", price: "$75" },
            { name: "Guacamole", desc: "Aguacate fresco preparado al estilo tradicional", price: "$65" }
        ]
    }
];

let activeTab = "todos";

// Inicializar Menú de manera segura tras cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    renderTabs();
    renderMenuContent();
});

// Renderizar Pestañas de Navegación
function renderTabs() {
    const container = document.getElementById('tabsContainer');
    if (!container) return;

    let html = `
                <button onclick="setCategory('todos')" 
                    class="px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${activeTab === 'todos' ? 'bg-brandRed text-brandCream' : 'bg-brandBeige/80 text-brandBrown hover:bg-brandBeige'}">
                    Todos
                </button>
            `;

    menuData.forEach(cat => {
        const isActive = activeTab === cat.id;
        html += `
                    <button onclick="setCategory('${cat.id}')" 
                        class="px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${isActive ? 'bg-brandRed text-brandCream' : 'bg-brandBeige/80 text-brandBrown hover:bg-brandBeige'}">
                        ${cat.category}
                    </button>
                `;
    });

    container.innerHTML = html;
}

function setCategory(catId) {
    activeTab = catId;
    renderTabs();

    if (catId === 'todos') {
        renderMenuContent();
    } else {
        renderMenuContent();
        const el = document.getElementById(catId);
        if (el) {
            const offset = 120;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
}

// Renderizar Lista de Platillos
function renderMenuContent(filterText = "") {
    const container = document.getElementById('menuSections');
    const noResults = document.getElementById('noResults');
    if (!container) return;

    const query = filterText.toLowerCase().trim();

    container.innerHTML = "";
    let matchCount = 0;

    menuData.forEach(section => {
        // Filtrar por categoría seleccionada
        if (activeTab !== 'todos' && activeTab !== section.id && !query) {
            return;
        }

        // Filtrar platillos por texto
        const itemsFiltered = section.items.filter(item => {
            const nameMatch = item.name.toLowerCase().includes(query);
            const descMatch = item.desc.toLowerCase().includes(query);
            return nameMatch || descMatch;
        });

        if (itemsFiltered.length > 0) {
            matchCount += itemsFiltered.length;

            const secEl = document.createElement('section');
            secEl.id = section.id;
            secEl.className = "space-y-3 scroll-mt-28";

            let noteHTML = section.note ? `<span class="text-[11px] text-brandGreen font-medium font-sans">(${section.note})</span>` : '';
            let imageBanner = section.image ? `
                        <div class="relative h-36 sm:h-44 w-full rounded-xl overflow-hidden mb-3 border border-brandBeige shadow-sm">
                            <img src="${section.image}" alt="${section.category}" class="w-full h-full object-cover" onerror="this.style.display='none'">
                        </div>
                    ` : '';

            let extrasHTML = '';
            if (section.extras && section.extras.length > 0) {
                extrasHTML = `
                            <div class="bg-brandBeige/60 border border-brandBeige p-3 rounded-xl mb-3">
                                <h4 class="font-serif font-bold text-xs text-brandRed uppercase tracking-wider mb-2">Extras para Hamburguesa</h4>
                                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                                    ${section.extras.map(ex => `
                                        <div class="flex justify-between items-center bg-brandCream px-2.5 py-1.5 rounded-lg border border-brandBeige/80">
                                            <span class="font-medium text-brandBrown">${ex.name}</span>
                                            <span class="font-bold text-brandGreen">${ex.price}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
            }

            secEl.innerHTML = `
                        ${imageBanner}
                        <div class="border-b border-brandBeige pb-1.5 flex items-baseline justify-between">
                            <h2 class="font-serif font-bold text-xl text-brandRed flex items-center gap-2">
                                <span>${section.category}</span>
                                ${noteHTML}
                            </h2>
                        </div>
                        ${extrasHTML}
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            ${itemsFiltered.map(item => `
                                <div class="bg-brandBeige/40 border border-brandBeige/80 p-3.5 rounded-xl flex flex-col justify-between space-y-1.5">
                                    <div class="flex justify-between items-start gap-2">
                                        <h3 class="font-serif font-bold text-sm text-brandBrown leading-snug">${item.name}</h3>
                                        <span class="font-bold text-xs text-brandGreen bg-brandCream px-2 py-0.5 rounded-md border border-brandBeige whitespace-nowrap">${item.price}</span>
                                    </div>
                                    <p class="text-xs text-brandBrown/80 leading-relaxed">${item.desc}</p>
                                </div>
                            `).join('')}
                        </div>
                    `;

            container.appendChild(secEl);
        }
    });

    if (noResults) {
        if (matchCount === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
        }
    }
}

// Filtro de Búsqueda
function filterMenu() {
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    const val = input.value;

    if (val.length > 0) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }

    renderMenuContent(val);
}

function clearSearch() {
    const input = document.getElementById('searchInput');
    input.value = "";
    filterMenu();
}