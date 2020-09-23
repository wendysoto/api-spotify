#  Movie App
## Proyecto final de Tópicos Especiales
INTEGRANTES DE GRUPO  :woman::woman:
- Andrea Quishpe
- Wendy Soto


## Descripción #

Desarrollo una app que me permita buscar y revisar las reseñas de una determinada serie o película, la aplicación se encuentra dealizada en Ionic v5 y angular CLI:10.1.0


### Explicación ###
El repositorio contiene el proyecto **proyecto_finalTopicos


### Comandos
Ejecutaremos los siguientes comandos :
```
- Instalar ionic
npm install -g @ionic/cli

- Generar proyecto
ionic start nombreApp blank

- Ejecutar Ionnic
ionic serve
ionic serve -l

- Generar nueva página
ionic generate page nombrePage 

- Crear el servicio
ionic g service services/nombreservicio

- Instalar Firebase
npm install firebase @angular/fire --save

- Cordova geolocalización
ionic cordova plugin add cordova-plugin-geolocation
npm install --save @ionic-native/geolocation

- Generar Icono y SplashScreen (Nota: Tomar en cuenta las dimensiones de las imágenes, estas deben ser mínimo: 1024×1024px y splash min: 2732×2732px)
npm install sharp --save
npm uninstall -g cordova-res
npm i -g cordova-res
ionic cordova resources

- Instalar Cordova
npm install -g ionic cordova

- Generar APK (Nota: previo a la generación de la APK, agregar los paths correspondientes a SDK, JDK y Gradle en las variables de entorno > Variables del Sistema > PATH)
ionic cordova build --release android

```

## Credenciales 

- Firebase
![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/FirebaseCredenciales.jpeg)

- API

http://www.omdbapi.com/



## Funcionalidad del Proyecto :pencil2:

- Base de datos

| **Firebase Auth** :speech_balloon:| **Usuarios** :speech_balloon: | **Historial** :bust_in_silhouette: |
| ------------- | ------------- | ------------- | 
|![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/firebase%20auth.JPG) |![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/firebase_users.JPG) |![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/firebase_historial.JPG)  |![myimage-alt-tag]|
## Icon y SplashScreen
| **Icon** :speech_balloon: | **SplashScreen** :bust_in_silhouette: | 
| ------------- | ------------- | 
|![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/Icono.PNG) |![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/SplashScreen.PNG)|


## Interfaces

- Usuario

La aplicación nos permitirá iniciar sesión, en el caso de contar con una cuenta previamente creada. Caso contrario deberemos crear una.
Se podrá buscar (películas, series, episodios) por título, además de visualizar la información de las películas.


| **login** :speech_balloon: | **register** :bust_in_silhouette: | **movies** :clapper:|**movies details** :scroll:|
| ------------- | ------------- | ------------- | ------------- |
|![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/login.JPG) |![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/register.JPG)  |![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/movies.JPG)  |![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/movie_info.JPG) |

- Administrador

El administrador podrá ver el historial de usuarios, modificar y eliminar estos.

| **Users** :speech_balloon: | **Historial** :alarm_clock: |**Edit User** :black_nib:| **New User** :heavy_check_mark:|
| ------------- | ------------- | ------------- |------------- |
|![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/users.JPG) |![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/historial.JPG)  |![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/edit_user.JPG)  |![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/new_user.JPG)  |

## Código:

En la siguiente imagen se muestran las páginas creadas.

![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/paginas.JPG) 

En el siguiente código se puede observar la conexión con la API
![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/servicio%20pelis.JPG)


Esta imagen se puede apreciar la conexión con la Base de Datos.
![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/credenciales_fire.JPG)

A continuación se describen los métodos de Autenticación, Registro y Cierre de Sesión.
![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/firebase%20auth.JPG)


Esta fracción de código representa el método de búsqueda de películas.
![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/movie_page.JPG)




Este código representa los métodos de Geolocalización, e Historial de películas buscadas por usuario. Para este método es necesario el Id del usuario ya que de esta forma se podrá guardar su historial de búsquedas.
![myimage-alt-tag](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/movie_details.JPG)



## Video en Yotube :movie_camera:
 
 [![ScreenShot](https://github.com/wendysoto/proyecto_finalTopicos/blob/master/images/video.PNG)](https://youtu.be/XIPEvncjB04)


### Referencias ###

    1. https://ionicacademy.com/ionic-4-app-api-calls/
    2. https://www.youtube.com/watch?v=REgMMe2fYKA
    3. https://www.nigmacode.com/ionic/Exportar-y-firmar-APK-en-Ionic
 	4. https://gradle.org/install/
 	5. https://ionicacademy.com/ionic-4-app-api-calls/
 	6. http://www.omdbapi.com/
 	7. https://www.youtube.com/watch?v=REgMMe2fYKA&list=LLKsVFdvcs9Om9xIPBpIfVKw&index=93
    8. https://www.youtube.com/watch?v=tN3yH07vgJo
    9. https://www.nigmacode.com/ionic/Geolocalizacion-con-Ionic
