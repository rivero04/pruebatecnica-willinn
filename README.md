## Prueba Técnica - Willinn

Este proyecto es una prueba técnica para la posición de trainee en Willinn. Incluye una aplicación para la administración de usuarios, donde se pueden realizar operaciones de creación, eliminación, y visualización de usuarios.

## Características Implementadas

- Visualización de Usuarios: Muestra una lista de usuarios en una tabla con sus detalles (nombre, apellido, correo).
- Creación de Usuarios: Permite agregar un nuevo usuario a la lista mediante un formulario que incluye campos para nombre, apellido, correo electrónico, contraseña y un toggle de activación.

## Funcionalidades Pendientes

- Eliminación de Usuarios: La funcionalidad de eliminación de usuarios está parcialmente implementada. Aunque se realiza la solicitud a la API para eliminar el usuario, la lista de usuarios en la tabla no se actualiza automáticamente después de la eliminación.
- Edición de Usuarios: La funcionalidad para editar usuarios no está implementada.

## Cómo Ejecutar el Proyecto

## Clona este repositorio.

```bash

git clone https://github.com/rivero04/pruebatecnica-willinn
```
## Cambia al directorio del proyecto:
```bash

cd pruebatecnica-willinn
```
## Instala las dependencias:

```bash

npm install
```

## Inicia la aplicación en modo de desarrollo:

```bash

npm run dev
```

## La aplicación estará disponible en http://localhost:3000.

## Configuración con Docker y Docker Compose
Si prefieres ejecutar el proyecto usando Docker, sigue los siguientes pasos:

# Construir y levantar el contenedor con Docker Compose:
Asegúrate de tener Docker y Docker Compose instalados en tu sistema.
En la raíz del proyecto, se encuentra un archivo docker-compose.yml. Para construir y ejecutar el contenedor, usa el siguiente comando:
```bash
docker-compose up --build
```
Esto construirá y levantará el contenedor para el frontend, configurando el puerto 3000 para que puedas acceder a la aplicación en http://localhost:3000.

Descripción del archivo docker-compose.yml:
Este archivo contiene la configuración para levantar el contenedor del frontend de forma independiente, sin necesidad de levantar el backend o la base de datos. Utiliza un archivo Dockerfile para construir la imagen del contenedor.

# Tecnologías Utilizadas

Next.js

React

TypeScript

Docker

Docker Compose
