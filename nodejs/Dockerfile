FROM node:14
RUN apt update && apt install -y mysql-server postgresql postgresql-contrib expect
RUN service postgresql restart
WORKDIR /usr/src/app
RUN yarn
RUN npm install -g nodemon 
EXPOSE 3333
ENTRYPOINT [ "bash" ]