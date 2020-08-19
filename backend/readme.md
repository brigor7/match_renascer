# MATCH RENASCER

## Backend

Para baixar as dependencias da pasta node_modules:
`yarn`

Para executar o projeto acesse a pasta backend e execute:
`yarn dev:server`

## Endpoints

[get](http:\localhost:3333\appointments) e
[post](http:\localhost:3333\appointments).

## Migrations

Informe o nome da base de dados em `ormconfig.json`
Criando uma nova migration: `yarn typeorm migration:create -n <Nome_Migration>`

Alteração da migrations execute:
`yarn typeorm migration:revert` Para desfazer as alterações implantadas

`yarn typeorm migration:run` Para subir as novas alterações implantadas

## Codes

```tsconfig.json
"experimentalDecorators": true
"strictPropertyInitialization": false,
"emitDecoratorMetadata": true,
```

## Docker

- Ver lista de containers: `docker ps -a`
- start container: `docker start <nome_container> | <id_container>`
- stop container: `docker start <nome_container> | <id_container>`
- parametros <nome_container> e <id_container> são visto na execução do comando: `docker ps -a`
