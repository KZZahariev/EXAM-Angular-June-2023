const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb://127.0.0.1:27017/EXAM-Angular',
        origin: ['http://localhost:5555', 'http://localhost:4200']
    },
    production: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb+srv://KZZahariev:Paris9602@cluster0.uz1syes.mongodb.net/?retryWrites=true&w=majority', //process.env.DB_URL_CREDENTIALS, //
        origin: ['http://localhost:5555', 'http://localhost:4200', 'https://exam-angular-june-2023.vercel.app/error']
    }
};

module.exports = config[env];
