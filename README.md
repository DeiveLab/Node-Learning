# Node-Learning
## Objetivo: 
Aprender e utilizar ferramentas e técnicas de desenvolvimento backend com NodeJS, através da criação de pequenas aplicações
## Aplicações:
**notes-app** - Aplicação para escrever, ler e apagar notas. Nesse app usei o *Yargs* para pegar informações da linha de comando do terminal, pratiquei a manipulação do sistema de arquivos (*file system*), o uso e transformações de arquivos *JSON* e o conhecimento de *Node Modules*

**weather-app** - Aplicação para pesquisar a temperatura atual na sua localidade. Nesse app usei as *APIs* geocoding e weatherstack para obter latitude e longitude e temperatura do local pesquisado, respectivamente. Esse pequeno projeto foi importante na aprendizagem prátrica de *callbacks* e manipulação de objetos em JS

**web-server** - O web-server torna o weather-app acessível pelo navegador. Para isso combinei o HTML e CSS com o *handlebars*, já que ainda irei aprender React, e usei o framework *Express.js* para criar a arquitetura da aplicação web

## Como usar:
**notes-app** - com a pasta aberta no terminal, execute app.js, da seguinte forma:
```
node app.js <comando> --<argumento>=""
```
Comandos possíveis:
* add     -> adicionar uma nota, requer os argumentos *title* para título e *body* para o corpo da nota
* remove  -> remove uma nota existente, requer o argumento "title" com o título da nota a ser excluída
* read    -> expõe uma nota existente para ser lida, requer o argumento "title" com o nome da nota que deseja ler
* list    -> exibe todos os títulos de notas existentes, não requer argumentos

Exemplo:
Adicionar nota de compras
```
node app.js add --title="Lista de compras" --body="PS5, joystick, The Last of Us"
```
---
**weather-app** - com a pasta aberta no terminal, execute app.js seguido do endereço desejado entre aspas, da seguinte forma:
```
node app.js "Copacabana"
```
---
**web-server** - com a pasta aberta no terminal, execute app.js da seguinte forma:
```
node src/app.js
```
Feito isso, abra seu navegador e insira o link *localhost:3000*








### Curso usado:
Udemy - The Complete Node.js Developer Course
