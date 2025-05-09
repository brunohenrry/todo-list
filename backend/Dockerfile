FROM node:22.15.0-bookworm-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3001
EXPOSE 3001

CMD ["npm", "run", "dev"]