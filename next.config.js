const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: process.env.DB_DEV_USERNAME,
                mongodb_password: process.env.DB_DEV_PASSWORD,
                mongodb_clustername: process.env.DB_DEV_CLUSTER,
                mongodb_database: process.env.DB_DEV_DBNAME
            },
        };
    }
    return {
        env: {
            mongodb_username: process.env.DB_USERNAME,
            mongodb_password: process.env.DB_PASSWORD,
            mongodb_clustername: process.env.DB_CLUSTER,
            mongodb_database: process.env.DB_DBNAME
        },
    };
};

// Use process.env.KEY to call the variable