# Desafío para Software Engineers

Nombre postulante: Felipe Vivanco

Link a la app en producción: https://kimche-country-search-flp.netlify.app/

# Pregunta

"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

R: Analizando la pregunta y viendo la cantidad de datos que contiene esa bdd. Mi propuesta o idea es realizar una migración a MongoDB si la idea es reducir la velocidad del select y darle una mejor experiencia al usuario. Por otra parte, si se hace imposible migrar, sería elegir un motor de almacenamiento mas apropiado que optimice la velocidad de los select, como por ejemplo MyISAM.

********************************************************************************************************************

## Como iniciar la app

1. Instala Yarn con `npm install --global yarn`.
2. Inicia el servidor local con `yarn start` // localhost:3000.
3. Ve a http://localhost:3000/ y busca el pais que quieras.

## Como instalar apollo y graphql
1. Instala Apollo junto con Graphql `npm install @apollo/client graphql`

## Como buscar un país
1. Haz click en el buscador
2. Escribe en el buscador el nombre de un país
3. Se mostrará la información dentro de una tarjeta
4. Presiona el botón `View More` para ser redirigido a la información del país.

## Dependencias
- Reactjs
- Apollo
- Google Fonts

## Deployment

https://kimche-country-search-flp.netlify.app/
