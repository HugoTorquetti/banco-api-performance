const configLocal = JSON.parse(open('../config/config.local.json')); // Aqui estamos importando o arquivo de configuração local que criamos para pegar a baseUrl, caso a variável de ambiente não exista.

export function pegarBaseUrl() {
    return __ENV.BASE_URL || configLocal.baseUrl; // Aqui estamos pegando a variável de ambiente BASE_URL, caso ela não exista, vamos usar o valor padrão http://localhost:3000
};