# EBAC Demo Store Server com Testes

![NestJS](https://img.shields.io/badge/NestJS-backend-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-api-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-dados-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-testes-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-ambiente-2496ED?style=for-the-badge&logo=docker&logoColor=white)

Backend da EBAC Demo Store com stack Node/NestJS, Prisma, GraphQL, autenticação e testes automatizados. O projeto serve como base para validar uma API de e-commerce com atenção a setup, dados, execução local e testabilidade.

Este repositório é importante dentro de uma visão de Quality Engineering porque mostra que qualidade não está restrita à interface. Uma aplicação confiável depende de API consistente, banco previsível, autenticação, validações e testes em camada de serviço.

## Visão geral

A aplicação usa NestJS e TypeScript para estruturar o backend, Prisma para acesso a dados e Jest/Supertest para testes. O projeto inclui scripts para subir banco com Docker, aplicar migrations, gerar client Prisma, popular dados e executar a suíte.

Em termos de QA, isso permite trabalhar com uma base realista de backend:

- API com autenticação;
- persistência de dados;
- GraphQL/Apollo;
- Swagger;
- testes automatizados;
- ambiente local reproduzível.

## Objetivo do projeto

O objetivo é disponibilizar um backend testável para a EBAC Demo Store, com setup suficientemente completo para validar comportamento de API e dados.

A proposta cobre:

- configuração de servidor NestJS;
- estrutura de API moderna;
- banco via Docker;
- migrations e seed;
- testes com Jest e Supertest;
- base para validações funcionais e de contrato.

## Stack utilizada

| Tecnologia | Papel no projeto |
| --- | --- |
| NestJS | Framework backend |
| TypeScript | Tipagem e estrutura da aplicação |
| Prisma | ORM e camada de acesso a dados |
| Docker Compose | Banco local reprodutível |
| GraphQL/Apollo | Camada de API GraphQL |
| Swagger | Documentação/exploração de API REST |
| Jest | Runner de testes |
| Supertest | Validação de endpoints HTTP |
| ts-jest | Execução de testes TypeScript |

## O que este projeto demonstra

| Frente | Valor técnico | Relação com QA |
| --- | --- | --- |
| Backend testável | API organizada em NestJS com TypeScript | Facilita testes em camada de serviço |
| Dados e persistência | Prisma, migrations, seed e banco via Docker | Garante ambiente previsível |
| Testes automatizados | Jest, Supertest e configuração `ts-jest` | Permite feedback sem depender da UI |
| API moderna | GraphQL/Apollo, Swagger, autenticação e validações | Amplia cobertura de integração |
| Ambiente reprodutível | Scripts para banco, Prisma e servidor | Reduz variação entre execuções |

## Principais scripts

| Comando | Finalidade |
| --- | --- |
| `npm run docker:db` | Sobe o banco via Docker Compose |
| `npm run prisma:generate` | Gera o Prisma Client |
| `npm run db:init` | Executa migrations e seed inicial |
| `npm start` | Inicia a API |
| `npm run start:watch` | Inicia em modo watch |
| `npm test` | Executa a suíte de testes |
| `npm run build` | Gera build da aplicação |
| `npm run db:clean` | Limpa dados via script |

## Como executar localmente

Clone o repositório:

```bash
git clone https://github.com/DouglasAntoni0/ebac-demo-store-server-com-testes.git
cd ebac-demo-store-server-com-testes
```

Instale dependências:

```bash
npm install
```

Suba o banco:

```bash
npm run docker:db
```

Gere o Prisma Client:

```bash
npm run prisma:generate
```

Inicialize banco e massa:

```bash
npm run db:init
```

Inicie a API:

```bash
npm start
```

Em outro terminal, execute os testes:

```bash
npm test
```

## Estratégia de qualidade

A estratégia aqui é validar o sistema em uma camada mais próxima da regra de negócio e dos dados. Isso traz vantagens importantes:

- falhas são detectadas antes da interface;
- o diagnóstico tende a ser mais rápido;
- a validação de contrato fica mais objetiva;
- setup e seed reduzem dependência de massa manual;
- testes podem ser integrados em pipeline com menor custo que E2E.

## Pontos de atenção para QA

| Ponto | Por que importa |
| --- | --- |
| Seed de dados | Garante massa previsível para testes |
| Migrations | Mantêm banco alinhado com a aplicação |
| Autenticação | Afeta acesso a endpoints protegidos |
| GraphQL | Exige validação de queries, mutations e schema |
| Prisma | Ajuda a entender persistência e modelos |
| Docker | Reduz variação de ambiente local |

## Troubleshooting

| Problema | Possível causa | Ação sugerida |
| --- | --- | --- |
| API não sobe | Banco indisponível ou dependências ausentes | Rodar `npm install` e `npm run docker:db` |
| Prisma falha | Client não gerado ou migration pendente | Rodar `npm run prisma:generate` e `npm run db:init` |
| Testes falham por dados | Seed não executado | Recriar banco e rodar scripts de inicialização |
| Porta ocupada | Outro processo usando a porta da API | Encerrar processo ou ajustar configuração |

## Resultado técnico

Este repositório mostra uma visão além da automação de tela: qualidade também depende de API estável, dados previsíveis, setup reprodutível e testes na camada certa. A combinação de NestJS, Prisma, Jest e Supertest fortalece a leitura de arquitetura e aumenta a capacidade de diagnosticar falhas mais cedo.

## Competências evidenciadas

- Testes de backend/API.
- NestJS e TypeScript.
- Prisma e modelagem de dados.
- Docker para ambiente local.
- Jest/Supertest.
- GraphQL/Apollo.
- Setup reprodutível.
- Pensamento em testes por camada.

## Possíveis evoluções

- Publicar documentação de endpoints principais.
- Adicionar testes de contrato GraphQL.
- Criar pipeline com banco de teste.
- Separar testes unitários, integração e contrato.
- Gerar relatório de coverage.
- Criar massa sintética controlada para QA.

## Conclusão

Este projeto é uma boa peça de portfólio técnico porque mostra visão sistêmica: backend, banco, API e testes trabalhando juntos. Para QA/SDET, isso é valioso porque amplia a atuação para além da UI e fortalece diagnóstico, prevenção e qualidade em camadas.
