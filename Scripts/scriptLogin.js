const usuariosMockados = [
    { email: "usuario1@exemplo.com", senha: "@_875965Teste" },
    { email: "usuario2@exemplo.com", senha: "Ex&mPl0Senh4" },
    { email: "usuario3@exemplo.com", senha: "@15874Test&" },
    { email: "usuario4@exemplo.com", senha: "$&nh4v4l1d4" },
];

function simulacaoLogin() {
    const emailDigitado = document.getElementById("loginEmail").value;
    const senhaDigitada = document.getElementById("senhaLogin").value;

    // Verifique se o email e a senha correspondem a algum usuário mockado
    const usuarioEncontrado = usuariosMockados.find(usuario => usuario.email === emailDigitado && usuario.senha === senhaDigitada);

    if (usuarioEncontrado) {
        // Mostrar um alerta de login bem-sucedido
        alert('Login realizado com sucesso. Clique aqui para ser redirecionado para a página principal.');
        // Redirecionar para a página principal
        window.location.href = "index.html?login=success";
    } else {
        document.getElementById("resultadoLogin").textContent = "Email ou senha incorretos. Tente novamente.";
    }

    return false;
}