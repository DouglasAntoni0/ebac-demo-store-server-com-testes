import http from 'k6/http';
import { sleep, check } from 'k6';

export function setup() {
  const payload = JSON.stringify({
    username: 'admin@ebac.com.br', 
    password: 'admin',           
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const loginRes = http.post('http://localhost:3000/api/login', payload, params);

  if (loginRes.status !== 200) {
    console.error('--- ERRO NO LOGIN (Clientes) ---');
    console.error(`Status recebido: ${loginRes.status}`);
    console.error(`Corpo da resposta: ${loginRes.body}`);
  }

  check(loginRes, {
    'login com sucesso (Clientes)': (r) => r.status === 200,
  });

  const token = loginRes.json('access_token');
  return token;
}

export const options = {
  vus: 10,
  duration: '15s',
};

export default function (token) {
  
  // Trava de segurança
  if (!token) {
    console.error('Token de login (Clientes) está nulo. Parando a iteração.');
    return;
  }

  // Prepara a autenticação
  const params = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // Faz a requisição ao endpoint de Clientes
  const res = http.get('http://localhost:3000/api/customers', params);

  // Verifica se o acesso aos clientes funcionou
  check(res, {
    'status Clientes foi 200': (r) => r.status === 200,
  });

  sleep(1); // Pausa de 1 segundo
}