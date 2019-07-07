const { Google } = require('../models')
const axios = require('axios')
const cheerio = require('cheerio')
module.exports = app => {
    app.get('/book', (req, res) => {
        axios.get('https://www.google.com/search?tbm=bks&ei=QkIhXfjnIpO9-gShlr_gDw&q=oliver+twist&oq=oliver+twis&gs_l=psy-ab.1.0.0l10.1563.3390.0.4864.11.9.0.2.2.0.103.651.8j1.9.0....0...1c.1.64.psy-ab..0.11.656....0.46t2JCKudgA')
            .then(({ data }) => {
                const $ = cheerio.load(data)
            })
            .catch(e => console.log(e))
    })
}