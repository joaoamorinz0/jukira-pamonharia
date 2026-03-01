const btn = document.getElementById('toggle-cardapio');
const cardapio = document.getElementById('cardapio');
const icon = btn.querySelector('i');
const text = btn.querySelector('span');

btn.addEventListener('click', function() {
    // Toggle da classe 'mostrar'
    cardapio.classList.toggle('mostrar');
    cardapio.classList.toggle('oculto');
    
    // Atualiza o texto e ícone
    if (cardapio.classList.contains('mostrar')) {
        text.textContent = 'Ocultar Cardápio';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        text.textContent = 'Ver Cardápio';
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
});