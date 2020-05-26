![GapCommerce](https://dev-assets.opencarwash.com/musalasoft/favicon.png "MusalaSoft")

# Artworks store (backend)

Artworks store (backend). A programming task from Pablo David Gago Ballester to MusalaSoft. May 2020.

## Table of contents

-   [Description](#description)
-   [Architecture](#architecture)
-   [Folders structure](#folders-structure)
    -   [Config](#config)
    -   [Controllers](#controllers)
    -   [Middlewares](#middlewares)
    -   [Models](#models)
    -   [Routes](#routes)
-   [Tools](#tools)
-   [Solution](#solution)
    -   [Authentication](#authentication)
    -   [Database](#database)
    -   [Endpoints](#endpoints)
-   [Build & deploy](#build-ddeploy)

## Description

This project is the backend of an Artworks store which is a solution of a MusalaSoft practical task. This solution is about an online store for selling artworks related to MusalaSoft. In this application the users can do purchases of artworks, see a specific artwork in detail, list all artworks availables and even to see all purchases that have been done by an user.

## Architecture

The selected architecture is **REST service** as a style of **client-server** architecture. For this project all data transferences between server and client will be in JSON format.

## Folders structure

### `config`

Contains configuration files for authentication and database.

### `controllers`

Responsible of handle the logic of the business. It handles the response to each request to endpoints.

### `middlewares`

Contains logic responsible of intercepting requests which needs authentication in order to validate it.

### `models`

Defines the **Schemas** of data model using Mongoose. For this project the data model is very simple:

    [CUSTOMER]-1---< >---*-[ORDER]-*---< >---*-[PRODUCT]

Each **Order** is made only by one **Customer**. Furthermore, each order can contains  multiple **Products**.

### `routes`

Defines the **endpoints** for this REST API. Please refer to [Endpoints](#endpoints) section for more details.

## Tools

This solution was implemented using:

-   Node.js(10.16.3)
-   Yarn as packages manager.

The libraries used are:

-   Express
-   Cors
-   Mongoose
-   Jsonwebtoken
-   Bcrypt

## Solution

### Authentication

This project support a basic authentication mechanism based on **JWT** (Json Web Token), a good way of securely transmitting information between parties. This mechanism needs a **secret key** which can be updated from `config` folder.

### Database

The database engine supported is MongoDB. For practical purposes the database was published on **Atlas Cloud** from https://cloud.mongodb.com. You can access to the database through this **connection string**: `mongodb+srv://musalasoft:Musalas0ft@cluster0-fiji7.mongodb.net/musala_db?retryWrites=true&w=majority`. As you can see, the credentials to login into the database are:

-   username: `musalasoft`
-   password: `Musalas0ft`

For get easy the work with MongoDB all schemas an operations are supported by **Mongoose** which is an elegant MongoDB object modeling for Nodejs.

### Endpoints

This is a very simple project. For this reason there are a bit of **Endpoints** to handle the frontend requests.

-   **Authentication** `POST: /api/signin`:
    Receives both username and password. The controller found the user in the database, and if the user exists then a authentication token is generated and send it in the response.

-   **Orders history** `GET: /api/orders`:
    Found all orders depending of the username. For this endpoint, the user must be authenticated. If not, a 401 error is the response.

-   **New order** `POST: /api/orders`:
    Creates a new order in the database and also stores it the **created date** (defined in schema).

-   **Products** `GET: /api/products`:
    Returns all products availables in the application. For this endpoint, the user could not be authenticated.

## Build & deploy

This project is available on github at https://github.com/pedegago/musala-ecommerce-backend. In order to deploy this application was configured an account on https://www.heroku.com. This account is configured to build and deploy automatically the branch master of the repository. The deployed Url is in https://musala-artworks-backend.herokuapp.com. For database information go to [Database](#database) section.
