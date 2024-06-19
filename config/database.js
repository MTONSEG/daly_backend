if (process.env.NODE_ENV === "production") {
  module.exports = ({ env }) => ({
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        user: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        schema: env("DATABASE_SCHEMA"),
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
        },
      },
      debug: false,
    },
  });
} else {
  module.exports = ({ env }) => ({
    connection: {
      client: "postgres",
      connection: {
        host: env("LOCAL_DATABASE_HOST"),
        port: env.int("LOCAL_DATABASE_PORT", 5432),
        database: env("LOCAL_DATABASE_NAME", 'shob_db'),
        user: env("LOCAL_DATABASE_USERNAME", 'mtonsiq'),
        password: env("LOCAL_DATABASE_PASSWORD", 'BL4EVY7hWTdI'),
        schema: env("LOCAL_DATABASE_SCHEMA"),
        ssl: {
          rejectUnauthorized: env.bool("LOCAL_DATABASE_SSL_SELF", false),
        },
      },
      debug: false,
    },
  });
}