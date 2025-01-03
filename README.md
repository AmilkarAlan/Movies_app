# MovieApp

MovieApp es una aplicación de búsqueda de películas donde los usuarios pueden explorar una base de datos de películas, ver detalles de las películas seleccionadas y realizar búsquedas personalizadas. Esta aplicación utiliza una API gratuita de películas para obtener información detallada como títulos, descripciones, calificaciones y fechas de lanzamiento. El objetivo principal es crear una interfaz atractiva y fácil de usar, enfocada en mostrar información relevante sobre las películas.

### Características principales:
- Búsqueda de películas por nombre.
- Página de detalles para cada película.
- Visualización de calificaciones y descripción de la película.

## Índice

1. [Introducción](#introducción)
2. [API y Endpoints](#api-y-endpoints)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Plan de Desarrollo](#plan-de-desarrollo)
5. [Notas](#notas)


## API y Endpoints

La aplicación utilizará una API gratuita para obtener datos sobre películas y series. A continuación, se describen los endpoints clave que se utilizarán.

### Endpoint de Búsqueda de Películas y Series

- **URL**: `/search/movie` ó `/search/tv`
- **Método**: `GET`
- **Parámetros**:
  - `query`: El término de búsqueda (nombre de la película ó serie).
  - `page`: Número de la página de resultados (opcional).
  - `include_adult`: Booleano que exclulle peliculas para adultos (opcional).
  - `language`: Lenguaje de la busqueda, default en-US (opcional).

**Ejemplo de petición**: GET /search/movie?query=spiderman&page=1


**Ejemplo de respuesta**:
```json
{
  "results": [
    {
      "id": 123,
      "title": "Spider-Man: No Way Home",
      "overview": "Peter Parker's life and reputation are turned upside down...",
      "rating": 8.7,
      "release_date": "2021-12-17"
    }
  ]
}
```

### Endpoint de Búsqueda de MultiBusqueda

Usado para la busqueda de películas, series y personas en una sola respuesta. 
Realiza la busqueda encontrando coincidencias con lo ingresado por query.

- **URL**: `/search/multi`
- **Método**: `GET`
- **Parámetros**:
  - `query`: El término de búsqueda (nombre de la película ó serie, personas proximamente).
  - `page`: Número de la página de resultados (opcional).
  - `include_adult`: Booleano que exclulle peliculas para adultos (opcional).
  - `language`: Lenguaje de la busqueda, default en-US.

**Ejemplo de petición**: GET search/multi?query=s&include_adult=false&language=es-MX&page=1

**Ejemplo de respuesta**:
```json
{
  "page": 1,
  "results": [
    {
      "backdrop_path": "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
      "id": 939243,
      "title": "Sonic 3: La Película",
      "original_title": "Sonic the Hedgehog 3",
      "overview": "Sonic, Knuckles y Tails se reúnen para enfrentarse a un nuevo y poderoso adversario, Shadow, un misterioso villano con poderes nunca antes vistos. Con sus habilidades superadas en todos los sentidos, el Equipo Sonic debe buscar una alianza improbable con la esperanza de detener a Shadow y proteger el planeta.",
      "poster_path": "/rqvtiGmHubDElsKxlCWPuCTkwPI.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "en",
      "genre_ids": [
        28,
        878,
        35,
        10751
      ],
      "popularity": 3125.84,
      "release_date": "2024-12-19",
      "video": false,
      "vote_average": 7.685,
      "vote_count": 243
    },
    {
      "backdrop_path": "/aizbHLcKVWvJ7jxkflJzTu5Z8GE.jpg",
      "id": 81329,
      "name": "Un sol tan fuerte",
      "original_name": "Un si grand soleil",
      "overview": "De regreso a Montpellier con su hijo, Théo, después de diecisiete años de ausencia, Claire es acusada del asesinato de un amigo de la infancia. Para ser declarada inocente, deberá desentrañar los secretos del pasado, y enfrentarse a Manu, responsable de la investigación de este caso, y a Julien, su primer amor.",
      "poster_path": "/t6jVlbPMtZOJoAOfeoR4yQmnjXM.jpg",
      "media_type": "tv",
      "adult": false,
      "original_language": "fr",
      "genre_ids": [
        10766
      ],
      "popularity": 1835.078,
      "first_air_date": "2018-08-27",
      "vote_average": 6.867,
      "vote_count": 113,
      "origin_country": [
        "FR"
      ]
    }, ...
  ]
  "total_pages": 500,
  "total_results": 10000
  }
```
### URL y Endpoint para las imagenes

Para la visualizacion de imagenes se utiliza el path de los datos obtenidos por los endpoints anteriores, y se añade a la siguiente `url` *https://image.tmdb.org/t/p* añadiendo `/file_size` y `/file_path` ejemplo: *https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg*


## Estructura del Proyecto


- **src/app/**
  - **components/**: Componentes reutilizables.
  - **pages/**: Páginas principales de la app.
  - **hooks/**: Custom hooks.
  - **utils/**: Utilidades y funciones generales.
  - **api/**: Integración con la API.

- **.gitignore**: Archivos y carpetas a ignorar por git.
- **eslint.config.mjs**: Configuración de ESLint.
- **next.config.ts**: Configuración de Next.js.
- **package.json**: Dependencias y scripts.
- **postcss.config.mjs**: Configuración de PostCss.
- **README.md**: Documentación del proyecto.
- **tailwind.config.ts**: Configuración de TailwindCss.
- **public/**: Archivos estáticos (imágenes, fuentes).
- **tsconfig.json**: Configuración de TypeScript.


## Plan de Desarrollo

A continuación, se describen los pasos clave en el desarrollo de la aplicación.

### 1. Investigación de la API
- Analizar la API de películas para entender los endpoints disponibles.
- Decidir qué datos utilizar en la aplicación, como el título, la calificación, la descripción y las imágenes de las películas.

### 2. Configuración Inicial
- Configurar el entorno de desarrollo (Next.js, TypeScript, ESLint, Prettier).
- Crear la estructura básica de carpetas y archivos para el proyecto.
- Configurar el archivo `README.md` con detalles de la API y la estructura del proyecto.

### 3. Pantalla Principal
- Crear la página principal donde se mostrarán las películas.
- Implementar la funcionalidad para obtener una lista de películas desde la API.
- Mostrar una lista de películas con el título, la imagen y la calificación.
- Implementar la funcionalidad de búsqueda de películas.

### 4. Página de Detalles de la Película
- Crear una página de detalles para mostrar la información completa de la película seleccionada (título, descripción, calificación, etc.).
- Implementar la funcionalidad para obtener y mostrar los detalles de una película específica al hacer clic en su nombre.

### 5. Estilo y Diseño
- Definir un diseño básico utilizando componentes de UI (botones, tarjetas, etc.).
- Asegurarse de que la aplicación sea responsive y funcione bien en dispositivos móviles.
- Estilizar la página de detalles y la pantalla principal para mejorar la experiencia de usuario.

### 6. Optimización y Refinamiento
- Mejorar el rendimiento de la aplicación utilizando técnicas como lazy loading de imágenes y optimización de peticiones a la API.
- Revisar y mejorar el diseño según la retroalimentación.

### 7. Pruebas
- Realizar pruebas básicas para asegurar que la aplicación funciona correctamente.
- Corregir errores y mejorar la estabilidad.

### 8. Documentación y Despliegue
- Completar la documentación del proyecto en el `README.md`.
- Desplegar la aplicación en una plataforma como Vercel o Netlify.
