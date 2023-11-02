# Conexa Challenge

Este proyecto es una aplicación web desarrollada como parte del desafío de Full Stack (Nest/NextJS). La aplicación consume datos de la API pública de Star Wars y los presenta de manera amigable para el usuario. El backend está desarrollado en Node.js utilizando Nest.js, y el frontend se implementa con Next.js. Los detalles de la consigna las pueden leer desde el archivo [CHALLENGE.md](/CHALLENGE.md)

## Características

**Backend:**

El servidor se ha construido utilizando Node.js y Nest.js, permitiendo la interacción con la API pública de Star Wars para obtener información sobre personajes, películas, naves y planetas. El sistema ofrece características como paginación, seguridad, configuración, almacenamiento en caché y control de cantidad de solicitudes para optimizar el rendimiento. Para asegurar la robustez de la aplicación, se ha incorporado un sistema de salud (health) que verifica su estado. Por último, se han realizado pruebas unitarias y se ha medido la cobertura del código, lo que contribuye a garantizar la calidad del proyecto.

**Frontend:**

La parte frontal de la aplicación hace uso de Next.js para proporcionar una interfaz de usuario interactiva. La aplicación consta de tres partes principales:

-   **Menu:** La página princila es un menú que sirve de puerta de entrada para los usuarios y les permite navegar de manera intuitiva a través de las opciones disponibles en la aplicación.
-   **Listado:** Los usuarios pueden explorar una lista de datos obtenidos de la API de Star Wars, lo que les permite acceder a información sobre personajes, películas, naves y planetas, de manera sencilla.
-   **Detalles:** Cada item cuenta con un detalle que permite a los usuarios obtener información precisa y detallada sobre elementos específicos de la saga de Star Wars, lo que brinda una experiencia enriquecedora para los amantes de la franquicia.

La interfaz de usuario ha sido diseñada pensando en la usabilidad y la estética al estilo scifi, ofreciendo una experiencia intuitiva y atractiva para los usuarios.

## Cómo ejecutar la aplicación

1. Clona este repositorio en tu máquina local.

2. Configura el entorno:

    - Asegúrate de tener Node.js v18 instalados.
    - En la carpeta `backend` y ejecuta `npm install` para instalar las dependencias del backend.
    - En la carpeta `frontend` y ejecuta `npm install` para instalar las dependencias del frontend.

3. Ejecuta el Backend:

    - En la carpeta `backend`, crea un archivo `.env` y configura las variables de entorno necesarias. Puedes utilizar el archivo `.env.example` como ejemplo.
    - Ejecuta el servidor utilizando `npm run build` y despues `npm run start`.

4. Ejecuta el Frontend:

    - En la carpeta `frontend`, configura las variables de entorno necesarias en un archivo `.env`. Puedes utilizar el archivo `.env.example` como ejemplo.
    - Inicia la aplicación con `npm run start`.

5. Accede a la aplicación

    - Para el frontend se debe acceder desde un navegador web en la dirección `http://localhost:3000`.
    - Para el backend se puede importar el archivo `collection.json` en algun visualizador como Postman.

## Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de utilizar y modificar el código como desees.
