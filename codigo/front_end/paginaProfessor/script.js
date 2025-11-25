document.addEventListener('DOMContentLoaded', () => {
    const prof = JSON.parse(localStorage.getItem('professorLogado'));
    const h1 = document.querySelector('header h1');
    if (h1) h1.textContent = 'Bem Vindo, Professor(a) ' + (prof.nome);
});