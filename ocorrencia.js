document.addEventListener('DOMContentLoaded', function () {
    const anexo = document.getElementById('anexo');
    const attachmentName = document.getElementById('attachment-name');
    const attachLabel = document.querySelector('.attach-label');
    const enviarBtn = document.getElementById('enviar-btn');

    if (attachLabel) {
        attachLabel.addEventListener('click', function (e) {
            e.preventDefault();
            if (anexo) anexo.click();
        });
    }

    if (anexo) {
        anexo.addEventListener('change', function () {
            const f = anexo.files && anexo.files[0];
            attachmentName.textContent = f ? f.name : 'Nenhum arquivo selecionado';
        });
    }

    // exemplo simples: ao enviar, apenas mostra dados no console
    if (enviarBtn) {
        enviarBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const desc = document.getElementById('descricao')?.value || '';
            const file = anexo && anexo.files && anexo.files[0];
            console.log('Enviar:', { descricao: desc, arquivo: file ? file.name : null });
            // aqui você pode implementar envio via fetch/FormData
            alert('Dados prontos para envio (veja console)');
        });
    }
});