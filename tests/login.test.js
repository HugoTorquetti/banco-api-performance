import http from 'k6/http';
import { sleep, check } from 'k6'; // Incluímos o check nessa importação pois não precisamos dar o comando de importação duas vezes
const postLogin = JSON.parse(open('../fixtures/postLogin.json')); // Aqui estamos importando o arquivo json que criamos para usar como payload no nosso teste.

export const options = {
  // Stage é uma lista de objetos que tem duration e target. 
  // Duration = tempo de duração da estratégia, Target = quantidade de vu's que quero alcançar
  stages: [
    { duration: '5s', target: 10 },
    { duration: '20s', target: 10 },
    { duration: '5s', target: 0 },
  ],
  // Define os thresholds de critérios para cada métrica
  thresholds: {
    http_req_duration: ['p(90)<3000', 'max<5000'],
    http_req_failed: ['rate<0.01']
  }
};

export default function () {
    // Tudo o que estiver aqui dentro será o nosso teste
    const url = 'http://localhost:3000/login';
    
    postLogin.username = "junior.lima";;
    console.log(postLogin);
    const payload = JSON.stringify(postLogin);

    const params = {
        headers: {
        'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);    // Colocamos a resposta da nossa requisição dentro de uma variável.

    // Aqui validamos a resposta utilizando o check, que é uma função do k6 que nos permite fazer asserções.
    check(res, { // O check tem a seguinte estrutura: check(resposta, { 'descrição do teste': (resposta) => condição para validar a resposta })
        'Validar que o status é 200': (r) => r.status === 200, // o r aqui faz referência ao res que passamos como primeiro atributo na linha acima.
        'Validar que o token é string': (r) => typeof (r.json().token) == 'string',
    });

    sleep(1);
}