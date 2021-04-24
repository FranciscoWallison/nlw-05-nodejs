# [NLW#5] Start Project NodeJs e ...Docker, Docker-Compose, Jenkins, SonarQube Heroku, Sqlit, Mysql, Porstgres, Mongodb,  Testing e CI/CD

<img src="https://github.com/FranciscoWallison/nlw-05-nodejs/blob/master/nodejs/public/images/nlw5-1.jpg" width="900" />



  <h1 align="center">  NPS-API Net Promoter Score  </h1>

  <p align="center">Projeto desenvolvido durante a 4° edição da NLW <a href"https://rocketseat.com.br/">na trilha de NODE JS</a> Da <a href"https://rocketseat.com.br/"> Rocketseat</a> . </p>

<p align="center">


  <img alt="GitHub contagem de linguagens" src="https://img.shields.io/github/languages/count/FranciscoWallison/nlw-05-nodejs?color=%2304D361&style=plastic">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/languages/code-size/FranciscoWallison/nlw-05-nodejs?style=plastic">

  
  
  <img alt="licensa" src="https://img.shields.io/github/license/FranciscoWallison/nlw-05-nodejs?style=plastic">

  <img src="https://img.shields.io/github/forks/FranciscoWallison/nlw-05-nodejs?style=plastic">

<a href="https://github.com/FranciscoWallison/nlw-05-nodejs/commits/master">
    <img alt="GitHub último commit" src="https://img.shields.io/github/last-commit/FranciscoWallison/nlw-05-nodejs?style=plastic">
  </a>

  <p align="center" ><a href="https://github.com/FranciscoWallison" > <img alt="Wallison" src="https://img.shields.io/badge/Desenvolvido%20por-Wallison%20-brightgreen"></a></p>

  ## 📕 Indice


* [📋 Sobre](#-sobre-o-projeto)
* [🚀 Milhas Extras:](#-milhas-extras)
* [:cyclone: CI/CD](#cicd)
*  -[:artificial_satellite: Pipeline Jenkis](#pipeline)
*  -[:white_check_mark: Testing sqlite, mysql , postgres, mongoDB](#testing-sqlite-mysql-e-postgres)
*  -[:shopping_cart: Deliveri](#repo)
* [🦸 Observações e dicas para esta utilizando projeto.](#obs)

  
  
 ## 📋 Sobre o projeto

O <strong>NPS-API</strong> é uma Chat utilizando socket.io.

Aplicação web construída na trilha <strong>NodeJS</strong> da <strong>Next Level Week</strong> distribuída pela [Rocketseat](https://rocketseat.com.br/).


## 🚀 Milhas Extras
Esse projeto foi desenvolvido com as seguintes tecnologias:
- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [NPM](https://www.npmjs.com/)
- [Typeorm](https://typeorm.io/)
- [Jestjs](https://jestjs.io/)
- [Sqlite](https://www.sqlite.org/)
- [MySql](https://www.mysql.com/)
- [Postgres](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)
- [Heroku](https://dashboard.heroku.com/)
- [Jenkins](https://www.jenkins.io/)
- [SonarQube](https://www.sonarqube.org/)

## CI/CD
#### Pipeline
[Link do Artigo Jenkins](https://github.com/FranciscoWallison/Desenvolvimento-de-aplicacoes-com-Microsservicos/tree/master/Devops/JENKINS)
![jenkis](https://github.com/FranciscoWallison/nlw-04-nodejs/blob/master/inforFiles/jenkis.png)
[Link do Artigo SonarQube](https://github.com/FranciscoWallison/Desenvolvimento-de-aplicacoes-com-Microsservicos/tree/master/Devops/SonarQube)
![SonarQube](https://github.com/FranciscoWallison/Desenvolvimento-de-aplicacoes-com-Microsservicos/blob/master/Devops/SonarQube/fotos/sonar_dashboard.pngg)


### Deploy
[Link Heroku](https://nlw-05-nodejs.herokuapp.com/pages/client)

## OBS: 
#### 1 Lembrar de abrir o bash e instalar o "npm install".
#### 2 Para estar selecionando os [DRIVES](https://github.com/FranciscoWallison/nlw-05-nodejs/blob/main/docker-compose.yml#L21).
#### 3 O comando [yarn dev-mr](https://github.com/FranciscoWallison/nlw-05-nodejs/blob/main/nodejs/package.json#L10) ajudará a startar o projeto com as migrações.
#### 4 O comando [yarn typeorm-mc](https://github.com/FranciscoWallison/nlw-05-nodejs/blob/main/nodejs/package.json#L11) ajudará a criar a migração na database selecionada. exemplo  ```typeorm-mc <DescriptionMigration>```.
#### 5 Referencia utilizada para criar webhook com jenkins, github e dockerhub [aqui](https://medium.com/@naistangz/building-a-ci-cd-pipeline-for-a-node-js-app-with-docker-and-jenkins-ee6db6e70d25).
#### 6 Possiveis erros e suas soluções [aqui](https://github.com/FranciscoWallison/nlw-05-nodejs#table-database_nlw_testsurveys-doesnt-exist).

_______
## Comandos básicos Docker e DOCKER-COMPOSE
#### Executando docker-compose 
- docker-compose -f "docker-compose.yml" down
- docker container exec -u 0 -it 14802ce72cc4 bash
## Comandos básicos MIGRATIONS
#### Executando migrations
 - yarn typeorm migration:run
#### Revertendo migrations
 - yarn typeorm migration:revert
#### Criando migrations
 - yarn typeorm migration:create -n CreateUsers
## Comandos básicos SQLITE
#### Install sqlite3 LINUX
- sudo apt install sqlite3
#### Acessando banco 
-  sqlite3 database.sql
#### Lista todos as tabelas
- .tables

## Comandos básicos POSTGRES
-  psql -U postgres
#### Lista todos os bancos
- \l
#### Selecionar o banco 
- \c database_nlw postgres
#### Lista todos as tabelas
- \d

## Comandos básicos MYSQL
- mysql -uroot -proot
#### lista todos os bancos
- show databases;
#### Selecionar o banco 
- USE database_nlw;
#### Lista todos as tabelas
- show tables;

# Testing continuous integration
## Comandos básicos jenkins
#### Primeiro acesso
- cat /var/jenkins_home/secrets/initialAdminPassword

# Erros
## Table 'database_nlw_test.surveys' doesn't exist
#### Solução 
    - yarn typeorm schema:drop -c "$CONNECTION_DRIVE"_test
