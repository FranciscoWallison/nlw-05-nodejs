/**
 * Configurações de bancos sqlite, mysql, postgres e mongodb
 */
module.exports =
[
    {
        "name": "sqlite",
        "type": "sqlite", 
        "database": "./src/database/database.sqlite",
        "migrations": [process.env.TYPE_ORM_MIGRATIONS],
        "cli" : {
            "migrationsDir": process.env.TYPE_ORM_MIGRATIONS_DIR,
        },
        "entities": [
            process.env.TYPE_ORM_ENTITIES_DIR, 
        ],
        "synchronize": true
    }, {
        "name": "sqlite_test",
        "type": "sqlite",
        "database": "./src/database/database.test.sqlite",
        "migrations": [process.env.TYPE_ORM_MIGRATIONS],
        "cli" : {
            "migrationsDir": process.env.TYPE_ORM_MIGRATIONS_DIR,
        },
        "entities": [
            process.env.TYPE_ORM_ENTITIES_DIR, 
        ],
        "synchronize": true
    },
    {
        "name": "mysql",
        "type": "mysql",
        "host": "db_mysql",
        "port": 3306,
        "username": "root",
        "password": "root",
        "database": "database_nlw",
        "migrations": [process.env.TYPE_ORM_MIGRATIONS],
        "cli" : {
            "migrationsDir": process.env.TYPE_ORM_MIGRATIONS_DIR,
        },
        "entities": [
            process.env.TYPE_ORM_ENTITIES_DIR, 
        ],
        "synchronize": true
    },
    {
        "name": "mysql_test",
        "type": "mysql",
        "host": "db_mysql",
        "port": 3306,
        "username": "root",
        "password": "root",
        "database": "database_nlw_test",
        "migrations": [process.env.TYPE_ORM_MIGRATIONS],
        "cli" : {
            "migrationsDir": process.env.TYPE_ORM_MIGRATIONS_DIR,
        },
        "entities": [
            process.env.TYPE_ORM_ENTITIES_DIR, 
        ],
        "synchronize": true
    },
    {
        "name": "postgres",
        "type": "postgres",
        "host": "db_pg",
        "port": 5432,
        "username": "postgres",
        "password": "postgres",
        "database": "database_nlw",
        "migrations": [process.env.TYPE_ORM_MIGRATIONS],
        "cli" : {
        "migrationsDir": process.env.TYPE_ORM_MIGRATIONS_DIR,
        },
        "entities": [
            process.env.TYPE_ORM_ENTITIES_DIR, 
        ],
        "synchronize": true
    },
    {
        "name": "postgres_test",
        "type": "postgres",
        "host": "db_pg",
        "port": 5432,
        "username": "postgres",
        "password": "postgres",
        "database": "database_nlw_test",
        "migrations": [process.env.TYPE_ORM_MIGRATIONS],
        "cli" : {
        "migrationsDir": process.env.TYPE_ORM_MIGRATIONS_DIR,
        },
        "entities": [
            process.env.TYPE_ORM_ENTITIES_DIR, 
        ],
        "synchronize": true
    },
    {
        "name": "mongodb",
        "type": "mongodb",
        // "url": "mongodb://root:root@db_mongodb/database_nlw?retryWrites=true&w=majority",
        "host": "db_mongodb",
        "port": 27017,
        "username": "root",
        "password": "root",
        "database": "database_nlw",
        "entities": [
            process.env.MONGODB_TYPE_ORM_ENTITIES_DIR, 
        ],
        "synchronize": true,
        "logging": true,
        "useUnifiedTopology": true,
        "useNewUrlParser": true,
        "extra": {
            "authSource": "admin"
        }
    },
    {
        "name": "mongodb_test",
        "type": "mongodb",
        // "url": "mongodb://root:root@db_mongodb/database_nlw?retryWrites=true&w=majority",
        "host": "db_mongodb",
        "port": 27017,
        "username": "root",
        "password": "root",
        "database": "database_nlw_test",
        "entities": [
            process.env.MONGODB_TYPE_ORM_ENTITIES_DIR, 
        ],
        "synchronize": true,
        "logging": true,
        "useUnifiedTopology": true,
        "useNewUrlParser": true,
        "extra": {
            "authSource": "admin"
        }
    },
]