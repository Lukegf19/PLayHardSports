function showPaymentFields() {
    const formaPagamento = document.getElementById('forma-pagamento').value;
    const creditDebitFields = document.querySelector('.credit-debit-fields');
    const boletoFields = document.querySelector('.boleto-fields');

    // Oculta todos os campos de pagamento
    creditDebitFields.style.display = 'none';
    boletoFields.style.display = 'none';

    // Mostra os campos de pagamento correspondentes à forma selecionada
    if (formaPagamento === 'credito') {
        creditDebitFields.style.display = 'block';
    } else if (formaPagamento === 'boleto') {
        boletoFields.style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("checkout-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Valide os campos do formulário aqui
        const cep = document.getElementById("cep").value;
        const endereco = document.getElementById("endereco").value;
        const cidade = document.getElementById("cidade").value;
        const estado = document.getElementById("estado").value;
        const numero = document.getElementById("numero").value;
        const email = document.getElementById("email").value;
        const formaPagamento = document.getElementById("forma-pagamento").value;

        // Verifique os campos e exiba o alerta se estiver tudo correto
        if (cep && endereco && cidade && estado && numero && email && formaPagamento) {
            alert("Compra realizada com sucesso!");
        } else {
            alert("Por favor, preencha todos os campos obrigatórios.");
        }
    });
});