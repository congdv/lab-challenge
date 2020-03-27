require('dotenv').config();

let PORT = process.env.PORT;
switch (process.env.NODE_ENV) {
    case 'production':
        MONGODB_URI = process.env.MONGODB_URI_PROD;
        break;
    case 'development':
        MONGODB_URI = process.env.MONGODB_URI_DEV;
        break;
    case 'test':
        MONGODB_URI = process.env.MONGODB_URI_TEST;
        break;
    default:
        MONGODB_URI = process.env.MONGODB_URI_DEV;
        break;
}

module.exports = { PORT, MONGODB_URI };
