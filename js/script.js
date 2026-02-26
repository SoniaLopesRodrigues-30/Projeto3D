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

// 2. Função Unificada para Renderizar Cards
function exibirProdutos(lista) {
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

// 3. Lógica do Carrossel
let currentSlide = 0;
function moveSlide(direction) {
    const slidesContainer = document.getElementById('slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slidesContainer.style.transform = `translateX(${-currentSlide * 100}%)`;
}

// 4. Inicialização de tudo
document.addEventListener('DOMContentLoaded', () => {
    exibirProdutos(produtos); // Mostra todos os produtos ao carregar

    // Controle do Menu Lateral (Drawer)
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('drawerOverlay');
    const openBtn = document.getElementById('openDrawer');
    const closeBtn = document.getElementById('closeDrawer');

    const toggleMenu = () => {
        drawer.classList.toggle('open');
        overlay.classList.toggle('active');
    };

    if(openBtn) openBtn.addEventListener('click', toggleMenu);
    if(closeBtn) closeBtn.addEventListener('click', toggleMenu);
    if(overlay) overlay.addEventListener('click', toggleMenu);

    // Sistema de Busca
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const termo = e.target.value.toLowerCase();
            const filtrados = produtos.filter(p => 
                p.nome.toLowerCase().includes(termo) || p.tag.toLowerCase().includes(termo)
            );
            exibirProdutos(filtrados);
        });
    }
});
// Faz o carrossel girar sozinho a cada 5 segundos
setInterval(() => {
    moveSlide(1);
}, 5000);
