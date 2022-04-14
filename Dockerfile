FROM node:16.14-buster-slim as builder
LABEL stage=builder
RUN apt-get -y update
WORKDIR /app/booking-manager-api
COPY package*.json ./
COPY ./src ./src
COPY tsconfig.json .
RUN npm i -s && npm run build

FROM node:16.14-alpine
RUN mkdir -p /home/node/booking-manager-api/node_modules && chown -R node:node /home/node/booking-manager-api
WORKDIR /home/node/booking-manager-api
COPY package*.json ./
COPY --from=builder /app/booking-manager-api/dist ./dist
USER node
RUN npm ci -s
EXPOSE 5451
CMD ["node","./dist/index.js"]