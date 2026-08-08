const API_URL = "HTTPS://WWW.Meu-curriculo.somee.com/api/experiencias/";

async function carregarExperiencias() {
    const container = document.getElementById("lista-experiencias");
    try {
        const resposta = await fetch(API_URL);
        if (!resposta.ok) {
            throw new Error("Erro ao buscar dados da API");
        }
        const experiencias = await resposta.json();
        container.innerHTML = "";
        if (experiencias.length === 0) {
            container.innerHTML = "<p>Nenhuma experiência cadastrada.</p>";
            return;
        }

        // Cria um card para cada experiência vinda do banco
        experiencias.forEach(exp => {
            const dataInicio = new Date(exp.dataInicio).toLocaleDateString('pt-BR', { month: '2-digit', year: 'numeric' });
            const dataFim = exp.dataFim ? new Date(exp.dataFim).toLocaleDateString('pt-BR', { month: '2-digit', year: 'numeric' }) : 'O momento';

            const cardHTML = `
                <div class="experiencia-item" style="margin-bottom: 20px;">
                    <h3 style="color: #a855f7;">${exp.cargo}</h3>
                    <h4 style="margin-bottom: 10px;">${exp.empresa} | ${dataInicio} - ${dataFim}</h4>
                    <p style="line-height: 1.6;">${exp.descricaoAtividades}</p>
                </div>
                <hr style="border-color: #333; margin-bottom: 20px;">
            `;

            container.innerHTML += cardHTML;
        });
    } catch (error) {
        console.error(error);
        container.innerHTML = "<p>Não foi possível carregar as experiências. Certifique-se de que a API está rodando.</p>";
    }
}

// --- Carrossel de imagens dos projetos ---
function mudarSlide(botao, direcao) {
    const carrossel = botao.closest('.carrossel');
    const imagens = carrossel.querySelectorAll('.imagem-carrossel');
    let index = parseInt(carrossel.dataset.index);

    imagens[index].classList.remove('ativa');
    index = (index + direcao + imagens.length) % imagens.length;
    imagens[index].classList.add('ativa');

    carrossel.dataset.index = index;
}

// --- Loop manual de vídeo (reinicia quando termina) ---
function iniciarLoopVideo(idVideo) {
    const video = document.getElementById(idVideo);
    if (!video) return;

    video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
    });
}

carregarExperiencias();
iniciarLoopVideo('video-mario');
iniciarLoopVideo('video-select-fighter');
