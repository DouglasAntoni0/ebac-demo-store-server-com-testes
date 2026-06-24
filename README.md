# EBAC Demo Store Server com Testes

![NestJS](https://img.shields.io/badge/NestJS-backend-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-api-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-dados-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-testes-C21325?style=for-the-badge&logo=jest&logoColor=white)

Backend da EBAC Demo Store com stack Node/NestJS, Prisma, GraphQL, autenticação e testes automatizados. O projeto serve como base para validar uma API de e-commerce com atenção a setup, dados e execução local.

## O que este projeto demonstra

| Frente | Valor técnico |
| --- | --- |
| Backend testável | API organizada em NestJS com TypeScript |
| Dados e persistência | Prisma, migrations, seed e banco via Docker |
| Testes automatizados | Jest, Supertest e configuração `ts-jest` |
| API moderna | GraphQL/Apollo, Swagger, autenticação e validações |
| Ambiente reprodutível | Scripts para subir banco, gerar Prisma Client e iniciar servidor |

## Principais scripts

| Comando | Finalidade |
| --- | --- |
| `npm run docker:db` | Sobe o banco via Docker Compose |
| `npm run prisma:generate` | Gera o Prisma Client |
| `npm run db:init` | Executa migrations e seed inicial |
| `npm start` | Inicia a API |
| `npm test` | Executa a suíte de testes |
| `npm run build` | Gera build da aplicação |

## Como executar

```bash
git clone https://github.com/DouglasAntoni0/ebac-demo-store-server-com-testes.git
cd ebac-demo-store-server-com-testes
npm install
npm run docker:db
npm run prisma:generate
npm run db:init
npm start
```

Em outro terminal, execute os testes:

```bash
npm test
```

## Resultado técnico

Este repositório mostra uma visão além da automação de tela: qualidade também depende de API estável, dados previsíveis, setup reprodutível e testes na camada certa. A combinação de NestJS, Prisma, Jest e Supertest fortalece a leitura de arquitetura e aumenta a capacidade de diagnosticar falhas mais cedo.
