# Resumen\
Este código es una aplicación web que muestra chistes aleatorios de Chuck Norris y permite al usuario seleccionar la categoría de chistes que desea ver. Utiliza la API pública de Chuck Norris Jokes para obtener los datos necesarios.

La aplicación tiene tres componentes principales:

Una barra de navegación con el logotipo de la aplicación.
Una sección central que muestra el chiste aleatorio y un botón para generar uno nuevo.
Un menú desplegable que permite al usuario seleccionar la categoría de chiste que desea ver.

# Funcionamiento
El código utiliza React, una biblioteca de JavaScript para construir interfaces de usuario. Utiliza dos hooks de React: useState y useEffect.

El estado de la aplicación se define con dos variables de estado, isLoading y value. isLoading se utiliza para mostrar una pantalla de carga mientras se obtienen los datos necesarios de la API. value almacena el chiste actual que se muestra en la aplicación.

La aplicación utiliza dos URLs de la API de Chuck Norris Jokes: CHUCK_NORRIS_RANDOM_JOKE y categories. CHUCK_NORRIS_RANDOM_JOKE devuelve un chiste aleatorio, mientras que categories devuelve una lista de categorías de chistes disponibles.

El menú desplegable utiliza la lista de categorías de chistes para mostrar las opciones disponibles. Cuando el usuario selecciona una categoría, se actualiza el estado de la aplicación con la nueva categoría.

Cuando se carga la aplicación, se llama a la función useEffect. useEffect se utiliza para ejecutar un efecto secundario cuando cambia el estado de la aplicación. En este caso, useEffect se utiliza para llamar a la API y obtener un chiste aleatorio y la lista de categorías de chistes disponibles. Cuando se completa la llamada a la API, se actualiza el estado de la aplicación con los datos recibidos.

Cuando el usuario hace clic en el botón "Generate joke", se llama a la función hacerclick. hacerclick llama a la API para obtener un chiste aleatorio de la categoría seleccionada por el usuario. Cuando se completa la llamada a la API, se actualiza el estado de la aplicación con el nuevo chiste.

# Como utilizar la aplicacion
Para utilizar la aplicación, primeramente debes clonar el repositorio en tu maquina utilizando el siguiente comando: 
``` sh
git clone <URL_DEL_REPOSITORIO>
```

Instalar las dependecias del proyecto
``` sh
npm install
```

ya que la aplicacion trabaja con vite + react deberas iniciar el proyecto con el siguiente comando
``` sh
npm run dev 
```
El comando anterior deberia proporcionar la url donde se alojara la aplicacion 

Una vez que la aplicación se carga, puedes hacer clic en el botón "Generate joke" para ver un chiste aleatorio de la categoría predeterminada. También puedes seleccionar una categoría diferente en el menú desplegable y hacer clic en el botón "Generate joke" para ver un chiste de esa categoría.

#Tecnologias utilizadas

[![My Skills](https://skills.thijs.gg/icons?i=html,css,react,vite)](https://skills.thijs.gg)


# Contribucion
Si deseas contribuir a este proyecto, sigue los pasos a continuación:

1- Crea un fork del repositorio en GitHub.

2- Clona tu repositorio bifurcado en tu máquina local.

``` sh
git clone <URL_DEL_REPOSITORIO_BIFURCADO>
```

3- Crea una nueva rama para tu contribución.
``` sh
git checkout -b <NOMBRE_DE_LA_RAMIFICACIÓN>
```

4- Realiza los cambios y mejoras en el código.

5- Asegúrate de que las pruebas pasen correctamente.

6- Realiza un commit de tus cambios.
``` sh
git commit -m "Descripción del cambio"
```
7- Empuja tus cambios a tu repositorio bifurcado en GitHub.
``` sh
git push origin <NOMBRE_DE_LA_RAMIFICACIÓN>
```
