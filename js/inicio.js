// 1. Dados dos produtos
const produtos = [
    { nome: "suporte", img: "imagem1_2.jpeg", detalhe: "0.03mm", tag: "diversos" },
    { nome: "bucha", img: "imagem2_1.jpeg", detalhe: "0.03mm", tag: "automotivo" },
    { nome: "suporte pisca", img: "imagem3_1.jpeg", detalhe: "0.03mm", tag: "automotivo" },
    { nome: "chaveiro", img: "imagem4.jpeg", detalhe: "0.03mm", tag: "diversos" },
    { nome: "grade", img: "imagem5_1.jpeg", detalhe: "0.03mm", tag: "automotivo" },
    { nome: "peça", img: "imagem6_2.jpeg", detalhe: "0.03mm", tag: "automotivo" },
    { nome: "anel", img: "imagem7.jpeg", detalhe: "0.03mm", tag: "réplica" },
    { nome: "kombi", img: "imagem8_5.jpeg", detalhe: "0.03mm", tag: "réplica" },
    { nome: "fiorino", img: "imagem8_7.jpeg", detalhe: "0.03mm", tag: "réplica" },
    { nome: "matriz", img: "imagem11_1.jpeg", detalhe: "0.03mm", tag: "diversos" },
    { nome: "cabo proteção", img: "imagem11_4.jpeg", detalhe: "0.03mm", tag: "diversos" },
    { nome: "grade painel", img: "imagem12_2.jpeg", detalhe: "0.03mm", tag: "automotivo" },
    { nome: "grade painel2", img: "imagem12_3.jpeg", detalhe: "0.03mm", tag: "automotivo" },
    { nome: "moldura rádio", img: "imagem15_1.jpeg", detalhe: "0.03mm", tag: "automotivo" },
    { nome: "porta retrato", img: "imagem16_2.jpeg", detalhe: "0.03mm", tag: "decorativo" }
];

// 2. Renderizar os cards de produtos
function renderizarProdutos() {
    const container = document.getElementById('product-container');
    if (!container) return;
    
    container.innerHTML = produtos.map(p => `
        <div class="product-card glass-card">
            <div class="product-badge">resina 4k</div>
            <img src="./imagens/${p.img}" alt="${p.nome}" class="product-img">
            <div class="product-info">
                <h3>${p.nome}</h3>
                <p>Nível de detalhe: ${p.detalhe}</p>
                <span class="tag">${p.tag}</span>
            </div>
        </div>
    `).join('');
}

// 3. Lógica do Carrossel de Banners (Topo)
let currentSlide = 0;

function moveSlide(direction) {
    const slidesContainer = document.getElementById('slides');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const offset = -currentSlide * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();
    
    // Configuração do Drawer (Menu Lateral)
    const openBtn = document.getElementById('openDrawer');
    const closeBtn = document.getElementById('closeDrawer');
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('drawerOverlay');

    if(openBtn) {
        openBtn.addEventListener('click', () => {
            drawer.classList.add('active');
            overlay.classList.add('active');
        });
    }

    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            drawer.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
});

// 5. Função de Busca
const searchInput = document.getElementById('searchInput');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const termoBusca = e.target.value.toLowerCase();
        
        // Filtra o array original baseado no nome ou na tag
        const produtosFiltrados = produtos.filter(p => 
            p.nome.toLowerCase().includes(termoBusca) || 
            p.tag.toLowerCase().includes(termoBusca)
        );

        // Renderiza apenas os resultados encontrados
        renderizarProdutosFiltrados(produtosFiltrados);
    });
}

// Função auxiliar para renderizar a lista filtrada
function renderizarProdutosFiltrados(lista) {
    const container = document.getElementById('product-container');
    if (!container) return;

    if (lista.length === 0) {
        container.innerHTML = '<p class="no-results">Nenhum produto encontrado.</p>';
        return;
    }

    container.innerHTML = lista.map(p => `
        <div class="product-card glass-card">
            <div class="product-badge">resina 4k</div>
            <img src="./imagens/${p.img}" alt="${p.nome}" class="product-img">
            <div class="product-info">
                <h3>${p.nome}</h3>
                <p>Nível de detalhe: ${p.detalhe}</p>
                <span class="tag">${p.tag}</span>
            </div>
        </div>
    `).join('');
}

