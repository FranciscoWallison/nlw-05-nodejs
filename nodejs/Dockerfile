FROM node:14
ENV CONNECTION_DRIVE=sqlite
ENV TYPE_ORM_LOGGING=true     
ENV TYPE_ORM_MIGRATIONS=./src/database/migrations/**.ts
ENV TYPE_ORM_MIGRATIONS_DIR=./src/database/migrations
ENV TYPE_ORM_ENTITIES=./src/entities/sqlite_mysql_postgre/*.ts
ENV TYPE_ORM_ENTITIES_DIR=./src/entities/sqlite_mysql_postgre/**.ts
ENV MONGODB_TYPE_ORM_ENTITIES=./src/entities/mongodb/*.ts
ENV MONGODB_TYPE_ORM_ENTITIES_DIR=./src/entities/mongodb/**.ts

RUN apt update && apt install -y mysql-server postgresql postgresql-contrib expect
RUN service postgresql restart
WORKDIR /src/app
RUN npm install -g nodemon 
ADD . /src/app
RUN yarn install
EXPOSE $PORT

ENTRYPOINT ["yarn", "prod"]