FROM node:alpine
WORKDIR /app
COPY . .
EXPOSE 9098
CMD node index.js
