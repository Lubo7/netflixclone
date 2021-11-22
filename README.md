# netflixclone

API deployed en Heroku: https://reto-api.herokuapp.com/

## TECNOLOGIAS IMPLEMENTADAS:

### Frontend
React JS with Context API

### Backend
  REST API with Node and Express JS<br>
  MongoDB<br>
  Firebase Storage for storing movies

## COMMANDS
<br>

```
1) Install libraries and dependencies for API --> npm install<br>
2) Prepare the cluster/database/collections in cloud.mongodb.com

```
## END-POINTS

### USERS

  #### Register
  POST - https://reto-api.herokuapp.com/api/signup- { "email": "-", "password": "-", "name": "-" } 

  #### Login User
  POST - https://reto-api.herokuapp.com/api/signin - { "email": "-",  "password": "-" }

  ### Find User
  GET - https://reto-api.herokuapp.com/api/61825fd68f7602ee2c27eedd

  ### Update User
  PATCH - https://reto-api.herokuapp.com/api/61914ff4dbc592c607f43833

  ### Delete User
  DELETE - https://reto-api.herokuapp.com/api/61914ff4dbc592c607f43833

#### Peliculas / Movies
  POST - https://reto-api.herokuapp.com/api/pelicula <br>
  GET - https://reto-api.herokuapp.com/api/all<br>
  GET by ID - https://reto-api.herokuapp.com/api/6181618a9612978c0450d1c8<br>
  Search GET by Titulo - https://reto-api.herokuapp.com/pelicula/titulo/Four Minutes (Vier Minuten)<br>
  Search GET by genre - https://reto-api.herokuapp.com/pelicula/genero/Comedy<br>
  Search GET by actor - https://reto-api.herokuapp.com/pelicula/actor/Manny Whatmough<br>

#### Pedido / Order
   POST - https://reto-api.herokuapp.com/api/pedido<br>
   GET - https://reto-api.herokuapp.com/pedido/user/61815ee085adb752e4a38292<br>

