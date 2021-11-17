const express = require("express")
const app = express()

// panggil routers member
const member = require('./routers/member')
const paket = require('./routers/paket')
const transaksi = require('./routers/transaksi')
const users = require('./routers/users')
const {login} = require('./routers/{login}  ')

app.use('/api/member', member)
app.use('/api/paket', paket)
app.use('/api/transaksi', transaksi)
app.use('/api/users', users)
app.use('/api/login', login)

app.listen(8000, () => {
    console.log("server run on port 8000");
})