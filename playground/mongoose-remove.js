const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*Todo.remove({}).then((result) => {
    console.log(result);
});*/

Todo.findOneAndRemove({_id: '5b8d9e629d2f169d545878a5'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5b8d9e629d2f169d545878a5').then((todo) => {
    console.log(todo);
});