const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const userId = '5b8c481d3b780b9487036b0d';
// const todoId = '5b8c5c863ef36cb08a64dbaddd';

if(!ObjectID.isValid(userId)) {
    console.log('ID not valid');
}

User.findById(userId).then((user) => {
    if(!user) {
        return console.log('user not found');
    }
    console.log('User By Id', user);
}).catch((e) => console.log(e));


/*
Todo.find({
   _id: todoId
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: todoId
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(todoId).then((todo) => {
    if(!todo) {
        return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));
*/
