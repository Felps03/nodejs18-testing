# Estudo de Teste Unitário e E2E com NodeJS Nativo

Este repositório serve como um exemplo para a criação de testes unitários e E2E (End-to-End) utilizando NodeJS Nativo. Este projeto é para fins de estudo e ilustra como testar uma API REST básica de usuários.

## Pré-requisitos

- Node.js v18 ou superior
- Navegador com suporte a fetch API para rodar os testes E2E

## Estrutura do Projeto

- `src/` - Código-fonte da aplicação
  - `utils.js` - Função para gerar um novo ID para um usuário
  - `index.js` - API REST de usuários
- `__test__/` - Testes
  - `unit/` - Testes unitários
  - `e2e/` - Testes E2E

## Como rodar o projeto

1. Instale as dependências

   ```bash
   npm install
   ```

2. Para rodar a aplicação:

    ```bash
    npm run start
    ```

## Rodando os Testes

### Testes Unitários

Para rodar os testes unitários:

```bash
npm run test:unit
```

### Testes E2E

**Nota: Antes de rodar os testes E2E, certifique-se de que a aplicação está rodando.**

Para rodar os testes E2E:

```bash
npm run test:e2e
```

### Cobertura de Testes

Para gerar o relatório de cobertura de testes:

```bash
npm run test:coverage
```

## Scripts NPM

Aqui estão os scripts que você pode usar:

- `npm run test` - Rodar todos os testes
- `npm run test:unit` - Rodar apenas os testes unitários
- `npm run test:e2e` - Rodar apenas os testes E2E
- `npm run test:coverage` - Rodar os testes e gerar relatório de cobertura
- `npm run start` - Iniciar a aplicação

## Tecnologias Utilizadas

- Node.js 18
- Testes nativos do Node.js
- Fetch API para testes E2E

## Contribuição

Este projeto é para fins de estudo, então sinta-se à vontade para clonar, modificar e enviar Pull Requests.# nodejs18-testing
