const produtos = [
  { id: 1, nome: "Tênis Runner", preco: 299.90 },
  { id: 2, nome: "Camiseta Dry Fit", preco: 89.90 },
  { id: 3, nome: "Relógio Digital", preco: 150.00 }
];

let carrinhoCount = 0;

const vitrine = document.getElementById('vitrine');
const counter = document.querySelector('#cart-counter span');

// Renderiza os produtos na tela
produtos.forEach(prod => {
  vitrine.innerHTML += `
    <div class="product-card">
      <h3>${prod.nome}</h3>
      <p>R$ ${prod.preco.toFixed(2)}</p>
      <button class="btn-add" onclick="adicionar(${prod.id})">Adicionar</button>
    </div>
  `;
});

function adicionar(id) {
  carrinhoCount++;
  counter.innerText = carrinhoCount;
  alert(`Produto ${id} adicionado ao carrinho!`);
}

let currentSlide = 0;

function moveSlide(direction) {
  const slidesContainer = document.getElementById('slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  // Atualiza o índice do slide atual
  currentSlide += direction;

  // Lógica de Loop (volta ao início ou fim)
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  // Desloca o contêiner em porcentagem
  const offset = -currentSlide * 100;
  slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Opcional: Carrossel Automático a cada 5 segundos
setInterval(() => moveSlide(1), 5000);
























