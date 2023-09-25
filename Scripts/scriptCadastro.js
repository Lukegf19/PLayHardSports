document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Limpa a mensagem de erro
        passwordError.textContent = '';

        // Validar o nome (deve estar preenchido)
        if (nameInput.value.trim() === '') {
            showError('Por favor, preencha o campo Nome.');
            return;
        }

        // Validar o email (deve ser um formato de email válido)
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value)) {
            showError('Por favor, insira um email válido.');
            return;
        }

        // Validar a senha
        const password = passwordInput.value;
        if (!isValidPassword(password)) {
            showError('A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial.');
            return;
        }

        // Simular um cadastro bem-sucedido (você precisa implementar a lógica real do cadastro no servidor)
        const cadastroBemSucedido = true;

        if (cadastroBemSucedido) {
            // Mostrar um alerta com mensagem e link para a página principal
            alert('Cadastro realizado com sucesso, clique aqui para ser redirecionado a página principal.');
            // Redirecionar para a página principal
            window.location.href = "index.html";
        }
    });

    function showError(message) {
        passwordError.textContent = message;
    }

    function isValidPassword(password) {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

        return (
            password.length >= minLength &&
            hasUpperCase &&
            hasLowerCase &&
            hasNumber &&
            hasSpecialChar
        );
    }
});