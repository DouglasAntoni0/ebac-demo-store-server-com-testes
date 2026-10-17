# EBAC Demo Store — backend e testes

Backend de estudos em NestJS/TypeScript, com Prisma, PostgreSQL, autenticação, REST, GraphQL e testes Jest. `k6-tests/` contém scripts de carga para clientes e produtos.

## Preparar o ambiente local

Requisitos: Node.js 22, npm, PostgreSQL 12 ou Docker com Compose, e k6 para os scripts de carga. O script `docker:db` usa o comando `docker-compose`; se sua instalação fornece apenas `docker compose`, use a alternativa abaixo.

```bash
git clone https://github.com/DouglasAntoni0/ebac-demo-store-server-com-testes.git
cd ebac-demo-store-server-com-testes
npm install
```

Crie `.env`:

```powershell
Copy-Item .env.example .env
```

No Bash, use `cp .env.example .env`. Confira os valores antes de iniciar os serviços:

| Variável | Uso |
| --- | --- |
| `POSTGRESQL_PORT`, `POSTGRESQL_USER`, `POSTGRESQL_PASSWORD` | Porta e credenciais do banco no Compose |
| `POSTGRESQL_URL` | Conexão Prisma; deve corresponder ao banco acima |
| `BCRYPT_SALT` | Número de rounds bcrypt; exemplo local: `10` |
| `JWT_SECRET_KEY` | Segredo de assinatura dos tokens; substitua o placeholder |
| `JWT_EXPIRATION` | Validade do token, por exemplo `1h` |
| `PORT` | Porta HTTP da aplicação; exemplo: `3000` |

Suba o banco e aplique o schema existente:

```bash
docker compose -f docker-compose.db.yml up -d
npm run prisma:generate
npm run db:migrate-up
npm run seed
npm start
```

Com Compose legado, `npm run docker:db` substitui o primeiro comando. Aguarde o PostgreSQL aceitar conexões antes das migrations. Para desenvolvimento com criação de nova migration, existe `npm run db:init`; para reproduzir o schema versionado, os passos acima usam `db:migrate-up`.

O seed cria ou atualiza o usuário local `admin@ebac.com.br`, senha de demonstração `admin`, armazenada como hash bcrypt. Reexecutar o seed redefine essa conta de demonstração. Use banco local de estudos. `customSeed` atua sobre esse mesmo usuário e a operação aguarda sua conclusão antes de encerrar as conexões.

## Executar os testes

```bash
npm test
```

Jest procura os testes TypeScript incluídos em `src/`. A existência da configuração e dos specs não substitui a consulta ao resultado da execução. Este repositório não possui workflow de CI versionado.

## Performance com k6

Com API e banco locais preparados, em outro terminal:

```bash
k6 run k6-tests/clientes.test.js
k6 run k6-tests/produtos.test.js
```

Os scripts autenticam em `http://localhost:3000/api/login` com a conta de demonstração e consultam `/api/customers` ou `/api/products`. O perfil atual é dez VUs por quinze segundos, com checks de status. Não existem thresholds nesses dois scripts; confira checks, taxa de erro e tempos na saída.

## Arquivos principais

- `.env.example`: configuração local sem credenciais de serviço reais.
- `docker-compose.db.yml`: PostgreSQL e volume de dados.
- `prisma/`: schema e migrations.
- `src/`: módulos da API e testes.
- `scripts/`: seed e manutenção dos dados.
- `k6-tests/`: carga de clientes e produtos.

`npm run db:clean` remove dados pelo script de limpeza; confira o banco configurado antes de usá-lo. O prefixo REST é `/api`, e a porta padrão é 3000. O código disponibiliza configuração de Swagger e resolvers GraphQL para exploração do backend.
