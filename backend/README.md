> Rota/Recurso

## Métodos HTTP:

**GET**: Busca informações do backe-end.
**POST**: Edita informações no back-end.
**PUT**: Altera informações do backe-end.
**DELETE**: Deleta informações do backe-end.

## Tipos de parâmetros

**Query Params**: Parâmetros nomeados enviados na rota, após "?" (Filtro, Páginação).

```
const query = req.query;
console.log(query);
```

**Route Params**: Parâmetros utilizados para indenficar recursos.

```
const params = req.params;
console.log(params);
```

**Request Body**: Corpo da requisição, utilizado para criar ou alterar recursos.

```
const body = req.body;
console.log(body);
```

## Banco de Dados

**SQL**: MySQL, SQLite, PostgreSQL, Oracle, Micrisoft SQL Server.
**NoSQL**: MongoDB, CouchDB, etc

### Modos de Instalação

**Driver**: SELECT _ FROM users;
**Query Builder**: table('users').select('_').where();

> Query utilizado: **knex.js**

#### Instalação do Knex

```
npm install knex --save || yarn add knex
npm install sqlite3 || yarn add sqlite3
```

> **sqlite3** por que será o banco SQL quer iremos utilizar.

**Configurando Banco de Dados**

```
npx knex init
```

> Cria arquivo _knexfile.js_

**Criar uma Migration**

```
$ knex migrate:make ${migration_name}
|| for .ts
$ knex migrate:make ${migration_name} -x ts
```

**Executando as Migrations**

```
$ npx knex migrate:latest
```

**Desfazendo ultimo comando**

```
npx knex migrate:rollback
```

# Testes

**Configurando tests**

```
    yarn add jest
```

post install

```
    npx jest --init
```

Questions {
- yes
- node
- no
- yes
}


**Tipos de Testes**
- Integration
>Testa o fluxo de um rota inteira da aplicação. 
- Unit
> Testa um pedaço da aplicação de forma muito isolada.

# Deploy


**Alternativas**
### Backend
- Heroku ( Pequenas ).
- DigitalOcean ( Médias).
- AWS, Google Platform, azuere ( Grandes ).

### FrontEnd
- netlify