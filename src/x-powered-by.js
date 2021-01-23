

const app = require('express')()
const {remove, manage} = require('@f0c1s/x-powered-by')

app.get('/has', (req, res) => {
    const data = res.getHeader('x-powered-by')
    console.log(data)
    res.send(data)
})

app.use(remove())
app.get('/nope', (req, res) => {
    const data = res.getHeader('x-powered-by')
    console.log(data)
    res.send(data)
})

app.use(manage('a-new-value'))
app.get('/managed', (req, res) => {
    const data = res.getHeader('x-powered-by')
    console.log(data)
    res.send(data)
})

app.listen(9001)

