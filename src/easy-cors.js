const {middleware, easyCors} = require('@f0c1s/easy-cors')
const red = require('@f0c1s/color-red')
const yellow = require('@f0c1s/color-yellow')
console.log(red(middleware.toString()), yellow(easyCors.toString()))

/*
middleware: function middleware(req, res, next) {
    assert.equal(typeof next, 'function', 'next should be a function')
    assert.ok(res.send, 'Response should have a send function')
    assert.ok(res.header, 'Response should have a header function')
    assert.ok(req.headers, 'Request should have a headers object')
    assert.notEqual(req.headers.origin, undefined, 'Request should have a headers.origin value')
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Origin", req.headers.origin)
    res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) || "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name")
    res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) || "POST, GET, PUT, DELETE, OPTIONS")
    if ('OPTIONS' == req.method) {
        res.send(200)
    }
    else {
        next()
    }
}
easyCors: function easyCors(app) {
    assert.ok(app.all, 'app should have all function')
    app.all('*', middleware)
}

 */
