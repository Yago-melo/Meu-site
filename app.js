const API_URL = "https://www.Meu-currículo.somee.com/";

async function carregarExperiencias() {
    const container = document.getElementById("lista-experiencias");
    
    try {
        const resposta = await fetch(API_URL);
        
        if (!resposta.ok) {
            throw new Error("Erro ao buscar dados da API");
        }

        const experiencias = await resposta.json();

        // Limpa a mensagem de "Carregando..."
        container.innerHTML = "";

        if (experiencias.length === 0) {
            container.innerHTML = "<p>Nenhuma experiência cadastrada.</p>";
            return;
        }

        // Cria um card elegante para cada experiência vinda do banco
        experiencias.forEach(exp => {
            const dataInicio = new Date(exp.dataInicio).toLocaleDateString('pt-BR', { month: '2-digit', year: 'numeric' });
            const dataFim = exp.trabalhoAtual ? "Presente" : new Date(exp.dataFim).toLocaleDateString('pt-BR', { month: '2-digit', year: 'numeric' });

            const card = document.createElement("div");
            card.classList.add("card-experiencia");

            card.innerHTML = `
                <h4>${exp.cargo}</h4>
                <div class="empresa">${exp.empresa}</div>
                <div class="periodo">${dataInicio} - ${dataFim}</div>
                <p>${exp.descricaoAtividades}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Erro:", error);
        container.innerHTML = "<p style='color: #f87171;'>Não foi possível carregar as experiências. Certifique-se de que a API está rodando no terminal.</p>";
    }
}

// Executa a busca assim que o site abre
carregarExperiencias();
