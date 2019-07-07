const { Schema, model } = require('mongoose')

const db = {
    Google:require('./Google.js')(Schema, model)
}

module.exports = db