FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
CMD ["npx", "serverless", "offline", "--stage", "local", "--host", "0.0.0.0"]
