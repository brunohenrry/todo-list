# ToDo List

Este projeto é uma aplicação de lista de tarefas (ToDo List) desenvolvida como teste técnico. O sistema é composto por frontend (Vue.js), backend (Node.js + Express + Sequelize) e banco de dados PostgreSQL, todos orquestrados via Docker Compose.

## Tecnologias Utilizadas

- **Frontend:** Vue.js 2, Axios, Vue Router
- **Backend:** Node.js, Express, Sequelize
- **Banco de Dados:** PostgreSQL 16
- **Containerização:** Docker, Docker Compose

## Como rodar o projeto

### Pré-requisitos

- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) instalados

### Passos

1. Clone este repositório:
   ```sh
   git clone https://github.com/brunohenrry/todo-list.git
   cd todo-list
   ```

2. Suba os containers:
   ```sh
   docker-compose up --build
   ```

3. Acesse a aplicação:
   - **Frontend:** [http://localhost:8080](http://localhost:8080)
   - **Backend (API):** [http://localhost:3001/tasks](http://localhost:3001/tasks)

## Funcionalidades

- Criar, listar, editar e remover tarefas
- Marcar tarefas como concluídas
- Persistência dos dados no banco PostgreSQL

## Estrutura do Projeto

```
todo-list/
├── backend/      # Código do backend (Node.js/Express)
├── frontend/     # Código do frontend (Vue.js)
├── docker-compose.yml
```

## Variáveis de Ambiente

As principais variáveis já estão configuradas no `docker-compose.yml`.  
Se necessário, ajuste as credenciais do banco ou portas conforme sua necessidade.

## Observações

- O backend já está configurado para aceitar requisições CORS do frontend.
- Para garantir que as variáveis de ambiente sejam aplicadas corretamente, sempre rode o frontend e backend via Docker Compose.
- Caso queira rodar localmente sem Docker, configure as variáveis de ambiente manualmente em cada serviço.

---

**Desenvolvido por:** Bruno D.