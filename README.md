# ToDo List

Este projeto é uma aplicação de lista de tarefas (ToDo List) desenvolvida como teste técnico. O sistema é composto por frontend (Vue.js), backend (Node.js + Express + Sequelize) e banco de dados PostgreSQL.

## Tecnologias Utilizadas

- **Frontend:** Vue.js 2, Axios, Vue Router
- **Backend:** Node.js, Express, Sequelize
- **Banco de Dados:** PostgreSQL 16
- **Containerização:** Docker, Docker Compose (opcional)

---

## Como rodar o projeto SEM Docker

### Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM (geralmente já incluso com o Node.js)
- PostgreSQL (versão 12 ou superior)

### Passos

#### 1. Banco de Dados

- Crie um banco chamado `todo_app` no seu PostgreSQL local.
- Configure o usuário e senha conforme o arquivo `backend/.env.example`.

#### 2. Backend

```sh
cd backend
npm install
cp .env.example .env   # ou crie o arquivo .env manualmente
# Edite o .env com os dados do seu banco, se necessário
npm start
```
O backend estará disponível em [http://localhost:3001](http://localhost:3001).

#### 3. Frontend

```sh
cd frontend
npm install
npm run serve
```
O frontend estará disponível em [http://localhost:8080](http://localhost:8080).

---

## Como rodar o projeto COM Docker

### Pré-requisitos

- Docker e Docker Compose instalados

### Passos

1. Na raiz do projeto, execute:
   ```sh
   docker-compose up --build
   ```
2. O frontend estará em [http://localhost:8080](http://localhost:8080)  
   O backend estará em [http://localhost:3001](http://localhost:3001)

---

## Funcionalidades

- Criar, listar, editar e remover tarefas
- Marcar tarefas como concluídas
- Persistência dos dados no banco PostgreSQL

## Estrutura do Projeto

```
todo-list/
├── backend/      # Código do backend (Node.js/Express)
├── frontend/     # Código do frontend (Vue.js)
```

## Variáveis de Ambiente

- O arquivo `backend/.env.example` serve como modelo para configuração das variáveis do backend.
- Não envie o arquivo `.env` real para o repositório.

---

**Desenvolvido por:** Bruno D.