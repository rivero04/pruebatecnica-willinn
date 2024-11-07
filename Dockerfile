# Usa la imagen oficial de Node.js como base
FROM node:18 AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación Next.js
RUN npm run build

# Usa una imagen más ligera para servir la aplicación
FROM node:18-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia las dependencias y la build del contenedor anterior
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./

# Instala las dependencias necesarias solo para la producción
RUN npm install --production

# Expone el puerto 3000, que es donde Next.js sirve la app
EXPOSE 3000

# Comando para ejecutar la aplicación Next.js en producción
CMD ["npm", "start"]
