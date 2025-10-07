document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = ['nome', 'email', 'telefone', 'mensagem'];
    const avisoGeral = document.querySelector('.aviso-obrigatorio');
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    avisoGeral.classList.add('no-error-spacing'); 
    document.querySelectorAll('.form-input, .form-text-area').forEach(input => {
        input.classList.remove('error-border', 'valid-border');
        input.classList.add('default-spacing'); 
    });
    fields.forEach(id => {
        const input = document.getElementById(id);
        if (input.value.trim() === '') {
            input.classList.remove('default-spacing'); 
            avisoGeral.classList.remove('no-error-spacing');

            input.classList.add('error-border');
            const msg = document.createElement('p');
            msg.className = 'error-message';
            msg.textContent = 'campo obrigatório';
            input.insertAdjacentElement('afterend', msg); 
        } else {
            input.classList.add('valid-border');
        }
    });
});