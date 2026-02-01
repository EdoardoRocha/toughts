# Toughts 💡

O **Toughts** é uma aplicação web desenvolvida para permitir que utilizadores registados partilhem os seus pensamentos e visualizem publicações de outros membros. O sistema conta com autenticação completa, gestão de sessões e operações CRUD (Criar, Ler, Atualizar e Eliminar) de pensamentos.

## 🚀 Funcionalidades

* **Autenticação de Utilizadores**: Registo e login com encriptação de palavras-passe via `bcryptjs`.
* **Gestão de Pensamentos**:
* Criar novos pensamentos.
* Editar e remover pensamentos próprios através de um Dashboard exclusivo.
* Visualização pública de todos os pensamentos na página inicial.


* **Filtros e Ordenação**:
* Procura de pensamentos por palavras-chave.
* Ordenação de resultados por data (mais recentes ou mais antigos).


* **Sessões Persistentes**: Utilização de `session-file-store` para manter o utilizador ligado mesmo após reiniciar o servidor.

## 🛠️ Tecnologias Utilizadas

* **Backend**: [Node.js](https://nodejs.org/) com [Express](https://expressjs.com/).
* **Base de Dados**: [MySQL](https://www.mysql.com/) gerido pelo ORM [Sequelize](https://sequelize.org/).
* **Template Engine**: [Handlebars](https://handlebarsjs.com/) para renderização dinâmica das páginas.
* **Segurança**: `bcryptjs` para hashing de passwords e `express-session` para controlo de acesso.
* **Estilização**: CSS puro e [Bootstrap Icons](https://icons.getbootstrap.com/).

## 📦 Estrutura do Projeto

O projeto segue o padrão MVC (Model-View-Controller):

* `/controllers`: Lógica de negócio (Autenticação e Pensamentos).
* `/models`: Definição das tabelas `User` e `Tought` e as suas relações.
* `/routes`: Definição dos caminhos e permissões da aplicação.
* `/views`: Interface do utilizador construída em Handlebars.
* `/public`: Ficheiros estáticos (CSS, imagens).

## 🔧 Instalação e Configuração

1. **Clonar o repositório:**
```bash
git clone <url-do-repositorio>

```


2. **Instalar as dependências:**
```bash
npm install

```


3. **Configurar Variáveis de Ambiente:**
Crie um ficheiro `.env` na raiz do projeto com as seguintes chaves:
```env
DB_NAME=toughts
DB_USER=seu_utilizador
DB_PASSWORD=sua_senha
DB_HOST=localhost
AUTH_TOKEN=seu_segredo_de_sessao

```


4. **Executar a aplicação:**
```bash
npm start

```


O servidor será iniciado na porta `3000`.