const API_URL = "https://www.Meu-currículo.somee.com/";

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

        experiencias.forEach(exp => {
            const dataInicio = new Date(exp.dataInicio).toLocaleDateString('pt-BR', { month: '2-digit', year: 'numeric' });
            // ... (mantenha a lógica de exibição que você já tinha ou salve essa base)
        });

    } catch (error) {
        console.error(error);
        container.innerHTML = "<p>Não foi possível carregar as experiências. Certifique-se de que a API está rodando.</p>";
    }
}

carregarExperiencias();
