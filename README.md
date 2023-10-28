# Conexa Challenge

Este proyecto es una aplicación web full-stack desarrollada como parte del desafío de Full Stack (Nest/NextJS). La aplicación consume datos de la API pública de Star Wars y los presenta de manera amigable para el usuario. El backend está desarrollado en Node.js utilizando Nest.js, y el frontend se implementa con Next.js.

## Características

**Backend:**

-   El servidor está construido con Node.js y Nest.js.
-   Se utilizan rutas para interactuar con la API pública de Star Wars y obtener datos relacionados con personajes, películas, naves espaciales, planetas, etc.
-   Se aplica una lógica para procesar los datos de la API antes de enviarlos al cliente, si es necesario.

**Frontend:**

-   El frontend utiliza Next.js para crear una interfaz de usuario interactiva.
-   La aplicación tiene dos páginas principales:
    -   **Página de Lista**: Muestra una lista de datos obtenidos de la API y permite a los usuarios explorarlos.
    -   **Página de Detalles**: Permite a los usuarios ver información detallada sobre un elemento específico.
-   La interfaz de usuario es intuitiva y atractiva.

**Comunicación Backend-Frontend:**

-   Se establece una comunicación adecuada entre el backend y el frontend para obtener y mostrar los datos de Star Wars.

## Cómo ejecutar la aplicación

1. Clona este repositorio en tu máquina local.

2. Configura el entorno:

    - Asegúrate de tener Node.js y npm instalados en tu sistema.
    - Navega a la carpeta `backend` y ejecuta `npm install` para instalar las dependencias del backend.
    - Navega a la carpeta `frontend` y ejecuta `npm install` para instalar las dependencias del frontend.

3. Ejecuta el Backend:

    - En la carpeta `backend`, crea un archivo `.env` y configura las variables de entorno necesarias (por ejemplo, la URL de la API de Star Wars).
    - Ejecuta el servidor utilizando `npm start`.

4. Ejecuta el Frontend:

    - En la carpeta `frontend`, configura las variables de entorno necesarias en un archivo `.env` (por ejemplo, el puerto en el que se ejecutará el frontend).
    - Inicia la aplicación con `npm run dev`.

5. Accede a la aplicación en tu navegador web en la dirección `http://localhost:PUERTO`, donde `PUERTO` es el puerto configurado en el archivo `.env` del frontend.

## Funcionalidades Adicionales

Este proyecto incluye algunas características adicionales como:

-   Limitante por cantidad de requests para evitar abusos de uso.
-   Almacenamiento en memoria para agilizar las respuestas.
-   Capacidades de búsqueda y filtrado de datos.
-   Pruebas unitarias e integración.

## Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de utilizar y modificar el código como desees.

Esperamos que disfrutes explorando el mundo de Star Wars con esta aplicación. ¡Que la Fuerza te acompañe!
