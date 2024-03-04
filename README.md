# Aspirant's Challenge

## index

* [Introduction](#introduction)
* [Installation](#installation)

## Introduction

This challenge presents us with the context of a human resources company, which is in charge of inserting candidates into high-demand industries.
The objective is to create an API with the applicants' data and then display it in a front-end made with React.

## Installation

![Node js Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/1024px-Node.js_logo_2015.svg.png)

The project was built in Nodejs, so the `npm install` command is necessary before preparing the project.

The first thing will be to create a database with the name `recruiting` following the configuration of `config.js` either through [phpMyAdmin](https://www.phpmyadmin.net/) or [MySQL Workbench](https://www.mysql.com/products/workbench/), when executing the entry point in the backend the tables will automatically be created in the database , these are empty, fortunately we prepared a seeder for the user's convenience, you can use it with the console located in the "database" folder with the command:

```bash
npx sequelize-cli db:seed:all
```

With that done, we already have an API with candidate data, now we can execute the frontend entry point.

We use the Vite template to work with React, to start its port we will have the command in the console:

```bash
vite dev
```

# Desafio de los Aspirantes

## índice

* [Introducción](#introducción)
* [Instalacion](#instalacion)

## Introducción

Este desafío nos presenta el contexto de una empresa de recursos humanos, que se encarga de insertar candidatos en las industrias de alta demanda.
El objetivo es crear una API con los datos de los postulantes para luego mostrarla en un frontend hecho con React.

## Instalacion

El proyecto se creó en Nodejs, por lo que sera necesario el comando `npm install` antes de encender el proyecto.

Lo primero será crear una base de datos con el nombre `recruiting` siguiendo la configuración de `config.js` ya sea a través de [phpMyAdmin](https://www.phpmyadmin.net/) o [MySQL Workbench](https://www.mysql.com/products/workbench/), al ejecutar el punto de entrada en el backend automáticamente se crearán las tablas en la base de datos, estas se encuentran vacías, afortunadamente preparamos un seeder para la comodidad del usuario, puedes usarla con la consola ubicada en la carpeta "database" con el comando:

```bash
npx sequelize-cli db:seed:all
```

Una vez hecho esto, ya tenemos una API con los datos del candidato, ahora podemos ejecutar el punto de entrada del frontend.

![Vite-logo](https://scrimba.com/articles/content/images/2022/08/Create-a-new-React-app-with-Vite---socials.png)

Utilizamos la plantilla de Vite para trabajar con React, para iniciar su puerto dispondremos del comando en consola:

```bash
vite dev
```
