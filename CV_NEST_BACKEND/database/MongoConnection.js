const mongoose = require('mongoose');

const MongoConnection = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/cv_nest')
        .then(() => console.log('Database Connected Successfully!'));
}

module.exports = MongoConnection;
