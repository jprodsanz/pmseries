const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/pm',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => {
        console.log('You have successfully connected to your database')
    })

    .catch(err => {
        console.log("Oops, you've failed to connect to the database")
        console.log(err)

    })