const connect = require('./dbConfig')

const db = connect('accounts')

exports.all = db

exports.account = (name) => db.where({name})


exports.addAccount = (account) => db.insert(account)

exports.removeAccount = (name) => db.del(name)