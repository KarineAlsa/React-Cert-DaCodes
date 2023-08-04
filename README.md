# Movie Database App
Este proyecto es una asignación para obtener la certificación de React Fundamentales de Dacodes. Movie Database App es una aplicación que utiliza *The Movie Database API (TMDB)* para mostrar un listado de películas. Consta de dos vistas:
- Login 
- Listado de películas
### Url de la aplicación
[react-cert-dacodes-karine.vercel.app](https://react-cert-dacodes-karine.vercel.app/)
## Tecnologías
- React.js + Vite

## Login
En la vista **Login** los usuarios deben completar un formulario con tres requisitos que requieren ser validados:
- Correo electrónico
- Contraseña
- Aceptar los términos y condiciones

Una vez que los datos sean válidos, el botón Crear Cuenta se habilitará para dejar pasar a la segunda vista.

## Listado de películas
La vista **Listado de películas** es privada y solo es accesible después de haber pasado por la vista **Login**. Los usuarios pueden seleccionar entre diferentes páginas:
- Now Playing
- Popular
- Top Rated
- Upcoming

