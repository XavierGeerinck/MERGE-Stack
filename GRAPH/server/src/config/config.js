module.exports = {
  // Port: 5432
  development: {
    url: "postgres://postgres:postgres@localhost:5432/test"
  },
  production: {
    url: process.env.DATABASE_URL
  },
  staging: {
    url: process.env.DATABASE_URL
  },
  test: {
    url: process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/bookmark_test'
  }
};
