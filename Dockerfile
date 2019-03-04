FROM node:10-stretch

# Update packages and install dependency packages for services
RUN apt-get -y update
#    && apt-get -y upgrade \
#    && apt-get -y dist-upgrade \
#    && apt-get clean

RUN apt-get -y install vim

# Change working directory
WORKDIR /app

ENV NODE_ENV dev
ENV PORT 3000
EXPOSE 3000

COPY package.json /app/

RUN npm i

COPY . /app

# Initial build
RUN npm run ts-compile
RUN npm run copy-static

#CMD ./dev.sh
CMD npm start
