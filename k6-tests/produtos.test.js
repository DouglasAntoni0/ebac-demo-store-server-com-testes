import http from 'k6/http';
import { sleep, check } from 'k6';

// 1. Roda 1x antes do teste: Faz o login
export function setup() {
  const payload = JSON.stringify({
    username: 'admin@ebac.com.br', // Credencial que encontramos no seed.ts
    password: 'admin', // Credencial que encontramos no seed.ts
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const loginRes = http.post('http://localhost:3000/api/login', payload, params);

  // DEBUG: Se o login falhar, imprime o erro no console
  // (Foi isso que nos mostrou o erro "Credenciais Incorretas")
  if (loginRes.status !== 200) {
    console.error('--- ERRO NO LOGIN ---');
    console.error(`Status recebido: ${loginRes.status}`);
    console.error(`Corpo da resposta: ${loginRes.body}`);
  }

  // Verifica se o login deu certo (é aqui que ele falha)
  check(loginRes, {
    'login com sucesso': (r) => r.status === 200,
  });

  // Extrai o token para os VUs (vem nulo, pois o login falha)
  const token = loginRes.json('access_token');
  return token;
}

// 2. Configura a carga do teste
export const options = {
  vus: 10,
  duration: '15s',
};

// 3. O que cada usuário virtual (VU) faz repetidamente
export default function (token) {
  
  // Trava de segurança: para o VU se o token do setup veio nulo
  if (!token) {
    console.error('Token de login está nulo. Parando a iteração.');
    return;
  }

  // Prepara a autenticação para a próxima requisição
  const params = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // Faz a requisição ao endpoint de Produtos
  const res = http.get('http://localhost:3000/api/products', params);

  // Verifica se o acesso aos produtos funcionou
  check(res, {
    'status foi 200': (r) => r.status === 200,
  });

  sleep(1); // Pausa de 1 segundo
}