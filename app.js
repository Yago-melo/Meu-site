const API_URL = "HTTPS://WWW.Meu-curriculo.somee.com/api/experiencias/";

//https://www.Meu-currículo.somee.com/

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
            
            // Verifica se tem data de fim, se não, coloca "Atual"
            const dataFim = exp.dataFim ? new Date(exp.dataFim).toLocaleDateString('pt-BR', { month: '2-digit', year: 'numeric' }) : 'O momento';

            // Monta a estrutura HTML (ajuste as classes CSS se as suas originais forem diferentes)
            const cardHTML = `
                <div class="experiencia-item" style="margin-bottom: 20px;">
                    <h3 style="color: #a855f7;">${exp.cargo}</h3>
                    <h4 style="margin-bottom: 10px;">${exp.empresa} | ${dataInicio} - ${dataFim}</h4>
                    <p style="line-height: 1.6;">${exp.descricao}</p>
                </div>
                <hr style="border-color: #333; margin-bottom: 20px;">
            `;
            
            // Injeta o card na tela
            container.innerHTML += cardHTML;
        });

    } catch (error) {
        console.error(error);
        container.innerHTML = "<p>Não foi possível carregar as experiências. Certifique-se de que a API está rodando.</p>";
    }
}

carregarExperiencias();
