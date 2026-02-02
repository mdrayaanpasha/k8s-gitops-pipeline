FROM node:20-alpine


WORKDIR /app/argoCD

COPY package*.json ./

RUN npm install --only=production
COPY . .

EXPOSE 3000

CMD ["node","index.js"]


