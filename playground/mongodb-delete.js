const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    /*db.collection('Todos').deleteMany({text: 'Drink coffee'}).then((result) => {
        console.log(result);
    });*/
    // deleteOne
    /*db.collection('Todos').deleteOne({text: 'Drink coffee'}).then((result) => {
        console.log(result);
    });*/
    //findOneAndDelete
    /* db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });*/
    // deleteMany
    /*db.collection('Users').deleteMany({name: 'Gerry'}).then((result) => {
        console.log(result);
    });*/
    //findOneAndDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b85c2fe0004ba3cd7379543')}).then((result) => {
        console.log(result);
    });

    // db.close();
});