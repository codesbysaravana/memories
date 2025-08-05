FROM node:18-alpine
        WORKDIR /app
        COPY package*.json ./
        RUN npm install
        COPY . .
        EXPOSE 3000
        CMD ["npm", "start"]

# AutoDock timestamp: 2025-08-05T04:32:09.209509Z