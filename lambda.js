const serverless = require('serverless-http')
const app = require('./src/index')

const handler = serverless(app)
exports.handler = async (event, context) => {
  const result = await handler(event, context)
  return result
}