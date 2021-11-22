# netflixclone

API deployed en Heroku: https://reto-api.herokuapp.com/

## TECNOLOGIAS IMPLEMENTADAS:
![image](https://user-images.githubusercontent.com/16636086/138780246-dc69ba86-c111-42e6-8079-35ffeba723f9.png)

## COMMANDS
<br>

```
1) Install libraries and dependencies for API --> npm install
2) Prepare the cluster/database/collections in cloud.mongodb.com

## END-POINTS

```
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
  POST - https://reto-api.herokuapp.com/api/pelicula
  GET - https://reto-api.herokuapp.com/api/all
  GET by ID - https://reto-api.herokuapp.com/api/6181618a9612978c0450d1c8
  Search GET by Titulo - https://reto-api.herokuapp.com/pelicula/titulo/Four Minutes (Vier Minuten)
  Search GET by genre - https://reto-api.herokuapp.com/pelicula/genero/Comedy
  Search GET by actor - https://reto-api.herokuapp.com/pelicula/actor/Manny Whatmough

```
#### Pedido / Order
   POST - https://reto-api.herokuapp.com/api/pedido
   GET - https://reto-api.herokuapp.com/pedido/user/61815ee085adb752e4a38292

```
