'use strict'

const port = process.env.PORT || 8000
const logLevel = process.env.LOG_LEVEL || 'trace'

const Hapi = require('hapi')
const log = require('bunyan').createLogger({
  name: 'canary-build',
  streams: [{ level: process.env.LOG_LEVEL, stream: process.stdout }]
})

var requestCount = 0

const server = new Hapi.Server()
server.connection({ port: port })
server.route({
  method: 'GET',
  path: '/',
  handler: (request, respond) => {
    log.info('GET /')
    respond({ count: ++requestCount })
  }
})
server.start()
  .then(() => { log.info(`canary-build listening on port ${port}`) })
