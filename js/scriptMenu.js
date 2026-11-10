// Datos del Menú Restaurante
const menuData = [
    {
        "category": "🥬 Ensaladas",
        "id": "ensaladas",
        "image": "./images/ensalada.jpg",
        "items": [
            {
                "name": "De la Casa",
                "desc": "Mezcla de lechugas, apio, pepino y jitomate con aderezo de la casa.",
                "price": "$85"
            },
            {
                "name": "Mixta",
                "desc": "Lechugas, espinaca, apio, pepino, jitomate, cebolla morada, aguacate, nuez y cacahuate.",
                "price": "$120"
            },
            {
                "name": "Verde",
                "desc": "Variedad de lechugas, espinaca, apio, pepino y cacahuate con aderezo especial.",
                "price": "$99"
            },
            {
                "name": "Queso Árabe",
                "desc": "Mezcla de lechugas, espinaca, jitomate, apio y pepino con queso árabe y aceite de oliva.",
                "price": "$137"
            }
        ]
    },
    {
        "category": "🍝 Pastas",
        "id": "pastas",
        "image": "./images/pasta.jpg",
        "note": "Extra: Agrega pechuga de pollo asada por $60",
        "items": [
            {
                "name": "Boloñesa",
                "desc": "Con carne de res y la exquisita salsa de la casa.",
                "price": "$132"
            },
            {
                "name": "Carbonara",
                "desc": "Tradicional receta italiana con tocino.",
                "price": "$132"
            },
            {
                "name": "Alfredo",
                "desc": "Bañada en deliciosa salsa italiana de crema blanca.",
                "price": "$120"
            },
            {
                "name": "Primavera",
                "desc": "Combinación de juliana de verduras y un toque de aceite de olivo.",
                "price": "$120"
            },
            {
                "name": "A la Crema",
                "desc": "Impregnada de deliciosa crema ácida y queso parmesano.",
                "price": "$99"
            },
            {
                "name": "Al Burro",
                "desc": "Preparada con mantequilla natural.",
                "price": "$105"
            },
            {
                "name": "Sur 22",
                "desc": "Preparada en salsa de tomate y vodka4 con toque picosito.",
                "price": "$132"
            }
        ]
    },
    {
        "category": "🔥 Parrilla",
        "id": "parrilla",
        "image": "./images/parrilla.jpg",
        "note": "Todos los platillos de parrilla incluyen sopa del día y arroz",
        "items": [
            {
                "name": "Parrillada Sur 22",
                "desc": "Arrachera, sirloin, chorizo español y argentino, verduras a la parrilla.",
                "price": "Para 1: $205 | Para 2: $305"
            },
            {
                "name": "Rib Eye o Arrachera",
                "desc": "Jugoso y bien sazonado al término que te gusta.",
                "price": "Con papas a la crema: $179 | Con nopales y cebollitas: $162"
            },
            {
                "name": "Brochetas",
                "desc": "Con cebolla, jitomate, calabaza y pimiento.",
                "price": "Res: $163 | Pollo o cerdo $132 | Combinada: $163"
            },
            {
                "name": "Bistec de Res a la Mexicana",
                "desc": "Deliciosa y suave carne de res preparada a la manera tradicional.",
                "price": "$148"
            },
            {
                "name": "Fajitas",
                "desc": "Marinadas y salteadas al memento, servidas con nopal y cebolla.",
                "price": "Res: $163 | Pollo o cerdo $132 | Combinada: $163"
            },
            {
                "name": "Pechuga Rellena",
                "desc": "Pollo 100% con queso derretido y verduras con guarnición de ensalada fresca.",
                "price": "$137"
            },
            {
                "name": "Milanesa de Pollo",
                "desc": "Pechuga fresca doradita por fuera y jugosa por dentro, servida con verduras a la plancha, al vapor, ensalada fresca o papas fritas.",
                "price": "$132"
            },
            {
                "name": "Pechuga Asada",
                "desc": "Con verduras a la plancha, al vapor, ensalada fresca o papas gajo.",
                "price": "$132"
            }
        ]
    },
    {
        "category": "🍔 Hamburguesas",
        "id": "hamburguesas",
        "image": "./images/hamburguesa.jpg",
        "note": "100% Carne Fresca | Papas gajo: Regulares $57 / Grandes $110 | Cambia las papas por verduras a la plancha $68",
        "extras": [
            { "name": "Queso", "price": "$35" },
            { "name": "Tocino", "price": "$45" },
            { "name": "Aguacate", "price": "Consultar" },
            { "name": "Piña", "price": "$25" }
        ],
        "items": [
            {
                "name": "Sur 22",
                "desc": "220 gr carne de res, aderezo, lechuga y jitomate.",
                "price": "$105"
            },
            {
                "name": "Sur 22 Jr.",
                "desc": "120 gr carne de res, aderezo, lechuga y jitomate.",
                "price": "$94"
            },
            {
                "name": "Cheese Burger",
                "desc": "220 gr carne de res, con dos enormes rebanadas de queso gouda, aderezo, lechuga y jitomate.",
                "price": "$132"
            },
            {
                "name": "Cheese Burger Jr.",
                "desc": "120 gr carne de res, con dos enormes rebanadas de queso gouda, aderezo, lechuga y jitomate.",
                "price": "$110"
            },
            {
                "name": "Arrachera",
                "desc": "220 gr filete de arrachera, aderezo, lechuga y jitomate.",
                "price": "$152"
            },
            {
                "name": "Arrachera Jr.",
                "desc": "120 gr filete de arrachera, aderezo, lechuga y jitomate.",
                "price": "$105"
            },
            {
                "name": "Qui Qui Ri Qui",
                "desc": "220 gr pechuga de pollo asada, aderezo, lechuga y jitomate.",
                "price": "$105"
            },
            {
                "name": "Pio Pio",
                "desc": "120 gr pechuga de pollo asada, aderezo, lechuga y jitomate.",
                "price": "$94"
            }
        ]
    },
    {
        "category": "🌯 Enchiladas",
        "id": "enchiladas",
        "image": "./images/enchiladas.jpg",
        "note": "<b>Paquete desayuno</b> incluye jugo o fruta y café de refill / <b>Paquete comida</b> incluye sopa y agua de sabor",
        "items": [
            {
                "name": "Rojas",
                "desc": "4 tortillas fritas rellenas de pollo deshebrado, bañadas en salsa de chile guajillo y jitomate, decoradas con queso, crema y cebolla.",
                "price": "Platillo: $79 | Paquete: $126"
            },
            {
                "name": "Verdes",
                "desc": "4 tortillas fritas rellenas de pollo deshebrado bañadas en nuestra salsa de tomate y cilantro, cubiertas con quesito rallado y crema.",
                "price": "Platillo: $79 | Paquete: $126"
            },
            {
                "name": "Enchiladas de Pasilla",
                "desc": "4 tortillas fritas rellenas de pollo deshebrado bañadas en una salsa de chile pasilla receta familiar acompañadas de lechuga, cebolla, queso y crema.",
                "price": "Platillo: $79 | Paquete: $126"
            },
            {
                "name": "Enfrijoladas",
                "desc": "4 tortillas fritas rellenas de pollo bañadas en deliciosa salsa de frijol acompañadas de queso rallado y crema.",
                "price": "Platillo: $79 | Paquete: $126"
            },
            {
                "name": "Taquitos Ahogados",
                "desc": "4 tortillas fritas rellenas de pollo ahogados en una ligera salsa verde y acompañados de lechuga, crema y queso añejo.",
                "price": "Platillo: $79 | Paquete: $126",
                "specialty": true
            },
            {
                "name": "Enchiladas de Birria",
                "desc": "4 tortillas fritas rellenas de nuestra birria de res bañadas en el mismo consomé, adornadas con cilantro y cebollita.",
                "price": "Platillo: $110 | Paquete: $158"
            },
            {
                "name": "Enmoladas",
                "desc": "4 tortillas fritas rellenas de pollo bañadas en el tradicional mole poblano y decoradas con lechuga y ajonjolí.",
                "price": "Platillo: $110 | Paquete: $158",
                "specialty": true
            },
            {
                "name": "Suizas",
                "desc": "4 tortillas fritas rellenas de pollo bañadas en salsa verde o roja especialidad de la casa gratinadas con queso gouda.",
                "price": "Platillo: $110 | Paquete: $158",
                "specialty": true
            },
            {
                "name": "Quesabirrias",
                "desc": "2 tortillas de harina rellenas de birria de res con costra de queso.",
                "price": "Platillo: $110 | Paquete: $158"
            }
        ]
    },
    {
        "category": "🌶️ Chilaquiles",
        "id": "chilaquiles",
        "note": "Paquete desayuno incluye jugo o fruta y café de refill / Paquete comida incluye sopa y agua de sabor",
        "image": "./images/chilaquiles.jpg",
        "items": [
            {
                "name": "Rojos",
                "desc": "Totopos bañados en salsa de guajillo y jitomate, topping de queso añejo, crema y rodajas de cebolla.",
                "price": "Platillo: $75 | Paquete: $120"
            },
            {
                "name": "Verdes",
                "desc": "Totopos bañados en salsa de tomate y chile poblano, decorados con queso añejo, crema y rodajas de cebolla.",
                "price": "Platillo: $75 | Paquete: $120"
            },
            {
                "name": "Pasilla",
                "desc": "Totopos fritos bañados en salsa de chile pasilla, con queso añejo, crema y rodajas de cebolla.",
                "price": "Platillo: $75 | Paquete: $120"
            }
        ]
    },
    {
        "category": "🍳 O Bien...",
        "id": "obien",
        "image": "./images/algomas.jpg",
        "extras": [
            { "name": "Huevo (uno / dos)", "price": "$15 / $25" },
            { "name": "Arrachera / cecina (90grs)", "price": "$75" },
            { "name": "Pechuga de pollo asada (90grs)", "price": "$60" },
            { "name": "Pollo desmenuzado", "price": "$30" },
            { "name": "Tocino / Chorizo español / argentino", "price": "$45" }
        ],
        "items": [
            {
                "name": "Birriaquiles",
                "desc": "Chilaquiles de birria de res.",
                "price": "Platillo: $110 | Paquete: $158"
            },
            {
                "name": "Cazuela de birria de res",
                "desc": "Tradicional carne de res servida con tortillas calientes, cilantro y cebolla.",
                "price": "Platillo: $110 | Paquete: $158"
            },
            {
                "name": "Aporreadillo",
                "desc": "Huevo revuelto con cecina asada en salsa.",
                "price": "Platillo: $110 | Paquete: $158"
            },
            {
                "name": "Huevos al gusto",
                "desc": "A la mexicana, divorciados, con tocino o chorizo.",
                "price": "Platillo: $65 | Paquete: $120"
            },
            {
                "name": "Molletes",
                "desc": "Orden de 2 panes con frijoles gratinados con queso gouda. (Extra salsa de chorizo con salchicha $25)",
                "price": "Platillo: $65 | Paquete: $120"
            },
            {
                "name": "Hot Cakes",
                "desc": "Esponjosos hot cakes tradicionales.",
                "price": "Platillo: $65 | Paquete: $120"
            }
        ]
    },
    {
        "category": "🥤 Bebidas",
        "id": "bebidas",
        "items": [
            { "name": "Jugo", "desc": "", "price": "Una fruta: $25 | Combinado: $30" },
            { "name": "Leche", "desc": "", "price": "$25" },
            { "name": "Café americano de refill", "desc": "", "price": "$35" },
            { "name": "Café americano / de olla / té", "desc": "", "price": "$30" },
            { "name": "Capuchino", "desc": "Grande o chico", "price": "Chico: $50 | Grande: $65" },
            { "name": "Chocolate frío o caliente", "desc": "", "price": "$35" },
            { "name": "Agua de sabor", "desc": "De refill", "price": "$30" },
            { "name": "Refresco", "desc": "", "price": "$35" }
        ]
    },
    {
        "category": "＋ Extras",
        "id": "extras",
        "items": [
            { "name": "Plato de fruta", "desc": "", "price": "$45" },
            { "name": "Orden de plátano frito", "desc": "", "price": "$45" },
            { "name": "Sopa del día", "desc": "", "price": "$25" },
            { "name": "Arroz", "desc": "", "price": "$25" },
            { "name": "Spaghetti a la crema", "desc": "", "price": "$40" },
            { "name": "Orden de chalupas poblanas", "desc": "", "price": "$60" },
            { "name": "Orden de verduras a la plancha", "desc": "", "price": "$75" },
            { "name": "Orden de aguacate", "desc": "", "price": "Consultar" },
            { "name": "Guacamole", "desc": "", "price": "Consultar" }
        ]
    },
    {
        "category": "🍰 Postres",
        "id": "postres",
        "items": [
            { "name": "Panqué de plátano", "desc": "", "price": "$55" },
            { "name": "Panqué de plátano con chocolate", "desc": "", "price": "$55" },
            { "name": "Pastel helado", "desc": "", "price": "$55" },
            { "name": "Gelatina frutos rojos", "desc": "", "price": "$55" },
            { "name": "Pan dulce", "desc": "", "price": "$25" }
        ]
    }
];

let activeTab = "todos";

// Inicializar Menú tras cargar el DOM
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

    const input = document.getElementById('searchInput');
    if (input) input.value = "";
    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) clearBtn.classList.add('hidden');

    renderMenuContent();

    if (catId !== 'todos') {
        setTimeout(() => {
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
        }, 50);
    }
}

// Helper mejorado para analizar y formatear las opciones de precio variante
function parseVariantOption(opt) {
    opt = opt.trim();

    // Si contiene signo de dos puntos ':'
    if (opt.includes(':')) {
        const parts = opt.split(':');
        return {
            label: parts[0].trim(),
            val: parts[1].trim()
        };
    }

    // Si contiene un precio con símbolo '$' o la palabra 'Consultar'
    const priceMatch = opt.match(/(\$\d+|\bConsultar\b)/i);
    if (priceMatch) {
        const val = priceMatch[0];
        const label = opt.replace(val, '').trim();
        return { label, val };
    }

    return { label: opt, val: '' };
}

// Helper para renderizar los precios (un solo precio vs varias opciones)
function formatItemPrice(priceStr) {
    if (!priceStr.includes('|')) {
        return `
                    <div class="flex justify-between items-start gap-2">
                        <div class="flex items-center gap-1.5 flex-wrap">
                            <h3 class="font-serif font-bold text-sm text-brandBrown leading-snug">{NAME}</h3>
                            {SPECIALTY_BADGE}
                        </div>
                        <span class="font-bold text-xs text-brandGreen bg-brandCream px-2 py-1 rounded-md border border-brandBeige whitespace-nowrap">${priceStr}</span>
                    </div>
                `;
    }

    const options = priceStr.split('|').map(opt => parseVariantOption(opt));
    const optionsHTML = options.map(opt => `
                <div class="flex justify-between items-center text-xs py-1 border-b border-brandBeige/50 last:border-none">
                    <span class="text-brandBrown/80 font-medium capitalize-first">${opt.label}</span>
                    <span class="font-bold text-brandGreen ml-2 whitespace-nowrap">${opt.val}</span>
                </div>
            `).join('');

    return `
                <div class="flex justify-between items-start gap-2 mb-1">
                    <div class="flex items-center gap-1.5 flex-wrap">
                        <h3 class="font-serif font-bold text-sm text-brandBrown leading-snug">{NAME}</h3>
                        {SPECIALTY_BADGE}
                    </div>
                </div>
                {DESC}
                <div class="bg-brandCream/90 border border-brandBeige rounded-lg p-2.5 mt-2 space-y-0.5">
                    ${optionsHTML}
                </div>
            `;
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
        if (activeTab !== 'todos' && activeTab !== section.id && !query) {
            return;
        }

        const itemsFiltered = section.items.filter(item => {
            const nameMatch = item.name.toLowerCase().includes(query);
            const descMatch = item.desc ? item.desc.toLowerCase().includes(query) : false;
            const priceMatch = item.price ? item.price.toLowerCase().includes(query) : false;
            return nameMatch || descMatch || priceMatch;
        });

        if (itemsFiltered.length > 0) {
            matchCount += itemsFiltered.length;

            const secEl = document.createElement('section');
            secEl.id = section.id;
            secEl.className = "space-y-3 scroll-mt-28";

            let noteHTML = section.note ? `<div class="text-[12px] text-brandBrown font-medium font-sans mt-0.5 leading-relaxed">(${section.note})</div>` : '';
            let imageBanner = section.image ? `
                        <div class="relative h-36 sm:h-44 w-full rounded-xl overflow-hidden mb-3 border border-brandBeige shadow-sm">
                            <img src="${section.image}" alt="${section.category}" class="w-full h-full object-cover object-center" onerror="this.style.display='none'">
                        </div>
                    ` : '';

            let extrasHTML = '';
            if (section.extras && section.extras.length > 0) {
                extrasHTML = `
                            <div class="bg-brandBeige/60 border border-brandBeige p-3 rounded-xl mb-3">
                                <h4 class="font-serif font-bold text-xs text-brandRed uppercase tracking-wider mb-2">Agrega</h4>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                    ${section.extras.map(ex => `
                                        <div class="flex justify-between items-center bg-brandCream px-2.5 py-1.5 rounded-lg border border-brandBeige/80 gap-2">
                                            <span class="font-medium text-brandBrown">${ex.name}</span>
                                            <span class="font-bold text-brandGreen text-right leading-tight whitespace-normal">${ex.price.replace(/\|/g, '<br>')}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
            }

            secEl.innerHTML = `
                        ${imageBanner}
                 <div class="border-b border-brandBeige pb-2">
                            <h2 class="font-serif font-bold text-xl text-brandRed">
                                ${section.category}
                            </h2>
                            ${noteHTML}
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                            ${itemsFiltered.map(item => {
                const isMultiPrice = item.price.includes('|');
                const descHTML = item.desc ? `<p class="text-xs text-brandBrown/65 font-normal leading-relaxed">${item.desc}</p>` : '';
                const specialtyBadge = item.specialty
                    ? `<span class="inline-block bg-[#F5B041] text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm leading-tight border border-amber-500/30">Especialidad</span>`
                    : '';

                if (isMultiPrice) {
                    let content = formatItemPrice(item.price);
                    content = content
                        .replace('{NAME}', item.name)
                        .replace('{SPECIALTY_BADGE}', specialtyBadge)
                        .replace('{DESC}', descHTML);
                    return `
                                        <div class="bg-brandBeige/40 border border-brandBeige/80 p-3.5 rounded-xl flex flex-col space-y-1">
                                            <div>${content}</div>
                                        </div>
                                    `;
                } else {
                    return `
                                        <div class="bg-brandBeige/40 border border-brandBeige/80 p-3.5 rounded-xl flex flex-col space-y-1.5">
                                            <div class="flex justify-between items-start gap-2">
                                                <div class="flex items-center gap-1.5 flex-wrap">
                                                    <h3 class="font-serif font-bold text-sm text-brandBrown leading-snug">${item.name}</h3>
                                                    ${specialtyBadge}
                                                </div>
                                                <span class="font-bold text-xs text-brandGreen bg-brandCream px-2 py-1 rounded-md border border-brandBeige whitespace-nowrap">${item.price}</span>
                                            </div>
                                            ${descHTML}
                                        </div>
                                    `;
                }
            }).join('')}
                        </div>
                        ${extrasHTML}
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
    const val = input ? input.value : "";

    if (clearBtn) {
        if (val.length > 0) {
            clearBtn.classList.remove('hidden');
        } else {
            clearBtn.classList.add('hidden');
        }
    }

    renderMenuContent(val);
}

function clearSearch() {
    const input = document.getElementById('searchInput');
    if (input) input.value = "";
    filterMenu();
}