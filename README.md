# 🚀 Banco API Performance Tests

Repositório dedicado à execução de testes de performance da API **Banco
API**, utilizando JavaScript e a ferramenta K6.

------------------------------------------------------------------------

## 📌 Introdução

Este projeto tem como objetivo validar o desempenho, estabilidade e
comportamento da API sob diferentes níveis de carga.

Os testes são implementados utilizando **K6**, uma ferramenta moderna e
eficiente para testes de carga, com scripts escritos em JavaScript.

------------------------------------------------------------------------

## 🛠 Tecnologias Utilizadas

-   JavaScript (ES6+)
-   K6 -- ferramenta de testes de carga
-   Node.js (opcional)

------------------------------------------------------------------------

## 📁 Estrutura do Repositório

    📦 banco-api-performance
     ┣ 📂 config
     ┣ 📂 fixtures
     ┣ 📂 helpers
     ┣ 📂 tests
     ┣ 📂 utils
     ┗ 📜 README.md

------------------------------------------------------------------------

## 🎯 Objetivo de cada grupo de arquivos

-   **config**: Arquivo de configuração de variáveis de ambiente\
-   **tests**: Scripts de teste por módulos da API\
-   **fixtures**: Dadis de entrada para os testes\
-   **helpers**: Funções auxiliares reutilizáveis para interação com a API\
-   **utils**: Funções auxiliares reutilizáveis\
-   **README.md**: Este documento\

------------------------------------------------------------------------

## ⚙️ Instalação

``` bash
git clone https://github.com/HugoTorquetti/banco-api-performance.git
cd banco-api-performance
```

Instale o K6 conforme seu sistema operacional.

------------------------------------------------------------------------

## ▶️ Execução dos Testes

### Variável obrigatória

Windows:

    set BASE_URL=http://localhost:3000

Linux/Mac:

    export BASE_URL=http://localhost:3000

------------------------------------------------------------------------

### Execução simples

    k6 run tests/login.test.js

------------------------------------------------------------------------

### Dashboard em tempo real

    set K6_WEB_DASHBOARD=true && k6 run tests/login.test.js

------------------------------------------------------------------------

### Exportação de relatório

    set K6_WEB_DASHBOARD=true && set K6_WEB_DASHBOARD_EXPORT=html-report.html && k6 run tests/login.test.js

------------------------------------------------------------------------

### Execução completa

    set K6_WEB_DASHBOARD=true && set K6_WEB_DASHBOARD_EXPORT=html-report.html && k6 run scenarios/carga-padrao.js -e BASE_URL=http://localhost:3000
