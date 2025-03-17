<!-- docs/.vitepress/components/PostRequest.vue -->
<template>
    <div class="post-request">
        <!-- Formulário para coletar dados -->
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="url">URL da API:</label>
                <input type="text" id="url" v-model="url" placeholder="Digite a URL da API" />
            </div>

            <div class="form-group">
                <label for="data">Dados (JSON):</label>
                <textarea id="data" v-model="postData" placeholder='Exemplo: { "name": "John", "age": 30 }' rows="6"
                    required></textarea>
            </div>

            <button type="submit" :disabled="loading" class="VPButton medium brand">
                {{ loading ? "Enviando..." : "Enviar Requisição" }}
            </button>
        </form>

        <!-- Exibir resultado ou erro -->
        <div v-if="response" class="response">
            <h3>Resposta da API:</h3>
            <pre>{{ response }}</pre>
        </div>

        <div v-if="error" class="error">
            <h3>Erro:</h3>
            <p>{{ error }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            url: "https://api-v2.monitchat.com/api/v1/auth/login", // URL da API
            postData: `
{
    "email" : "",
    "password" : ""
}
            `, // Dados a serem enviados no formato JSON
            response: null, // Resposta da API
            error: null, // Mensagem de erro
            loading: false, // Estado de carregamento
        };
    },
    methods: {
        async handleSubmit() {
            this.response = null;
            this.error = null;
            this.loading = true;

            try {
                // Validar se os dados são JSON válido
                const parsedData = JSON.parse(this.postData);

                // Fazer a requisição POST
                const res = await fetch(this.url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(parsedData),
                });

                // Verificar se a resposta é bem-sucedida
                if (!res.ok) {
                    throw new Error(`Erro na requisição: ${res.status} ${res.statusText}`);
                }

                // Extrair e exibir os dados da resposta
                const data = await res.json();
                this.response = JSON.stringify(data, null, 2);
            } catch (err) {
                this.error = err.message;
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>

<style scoped>
.post-request {
    margin: 0 auto;
    padding: 1rem;
    font-family: Arial, sans-serif;
}

.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

input,
textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--vp-c-brand-1);
    border-radius: 4px;
    font-size: 1rem;
}

button {
    border-color: var(--vp-button-brand-border);
    color: var(--vp-button-brand-text);
    background-color: var(--vp-button-brand-bg);
    border-radius: 20px;
    padding: 0 20px;
    line-height: 38px;
    font-size: 14px;
    display: inline-block;
    border: 1px solid transparent;
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
    transition: color 0.25s, border-color 0.25s, background-color 0.25s;
}

button:disabled {
    border-color: var(--vp-button-brand-border);
    color: var(--vp-button-brand-text);
    background-color: var(--vp-button-brand-bg);
    border-radius: 20px;
    padding: 0 20px;
    line-height: 38px;
    font-size: 14px;
}

.response,
.error {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 4px;
}

.response {
    background-color: var(--vp-code-block-bg)
}

.error {
    background-color: var(--vp-code-block-bg);
    color: #d32f2f;
}

pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    font-size: var(--vp-code-font-size);
    padding: 0 24px;
    direction: ltr;
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

}
</style>