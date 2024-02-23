# Autenticador com NodeJS

### Discrição

A aplicação em Node foi feita em utilizando express e bcrypt.

## Construção da API

Nó iniciamos o o projeto em Node.

nota: o "-y" usamos para fazer a confirmação automatica dos questionamentos da inicialização do nosso prejeto. 

 ```shell
npm init -y
```

Agora nós baichamos o as nossa depencias do projeto.
   
```shell 
npm install express bcrypt nodemon
```
Obs: Eu utilizo a versão do Node.js acima da 20, me possibilitando o uso de um recurso do que esta em beta do Node, que deixarei a seguir pra quem quiser usar.

Depois de instalado as dependencias, você podes configurar os scripts do `package.json` .

```package.json
  "scripts": {
    "dev": "nodemon src/server.js"
  },
```

ou como eu uso

```package.json
  "scripts": {
    "dev": "node --watch src/server.js"
  },
```
