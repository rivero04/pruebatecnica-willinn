# Etapa de construcción
FROM node:18 AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./

RUN npm run build

# Etapa de producción
FROM node:18 AS production
WORKDIR /app
COPY --from=builder /app ./

# Dependencias de producción
RUN npm install --production

EXPOSE 3000
CMD ["npm", "start"]
