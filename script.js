document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bopm-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const data = document.getElementById('data').value;
        const ocorrencia = document.getElementById('ocorrencia').value;

        // Simulação de envio de dados (substitua com a lógica real)
        console.log(`Data: ${data}, Ocorrência: ${ocorrencia}`);

        alert('BOPM gerado com sucesso!');
    });
});
