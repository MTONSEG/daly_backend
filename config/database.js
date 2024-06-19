if (process.env.NODE_ENV === "production") {
  module.exports = ({ env }) => ({
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", 'ep-small-grass-a2gcqwg0.eu-central-1.aws.neon.tech'),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", 'shob_db'),
        user: env("DATABASE_USERNAME", 'mtonsiq'),
        password: env("DATABASE_PASSWORD", 'BL4EVY7hWTdI'),
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
        host: env('DATABASE_HOST'),
        port: env.int("LOCAL_DATABASE_PORT"),
        database: env("LOCAL_DATABASE_NAME"),
        user: env("LOCAL_DATABASE_USERNAME"),
        password: env("LOCAL_DATABASE_PASSWORD"),
        schema: env("LOCAL_DATABASE_SCHEMA"),
        ssl: {
          rejectUnauthorized: env.bool("LOCAL_DATABASE_SSL_SELF", false),
        },
      },
      debug: false,
    },
  });
}