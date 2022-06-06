const mongoose = require('mongoose')

const conn = async()=>{
    var atlas = await mongoose.connect('mongodb+srv://useradmin:Dodge1313@fiaptecnico.hsj9v.mongodb.net/todo_list')
}
module.exports = conn
