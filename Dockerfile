FROM node:12-alpine

# Change working directory
WORKDIR /app

ENV NODE_ENV prod
ENV PORT 3000
EXPOSE 3000

COPY package*.json ./
RUN npm i --production
COPY . .

CMD [ "npm", "start" ]
