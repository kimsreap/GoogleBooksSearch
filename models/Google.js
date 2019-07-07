module.exports = (Schema, model) => model('Google', new Schema({
    title:'String',
    author:'String',
    description:'String',
    //image:'String',
    link:'String'
}))