var mongoose     = require('mongoose');
mongoose.Promise = require('bluebird');

var mongoDB = 'mongodb://localhost/NodeProje';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
    if (err)
        console.error(err);
    else
        console.log("Bağlantı Sağlantı");
}); 