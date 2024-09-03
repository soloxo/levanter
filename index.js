const { Client, logger } = require('./lib/client')
const { DATABASE, VERSION } = require('./config')
const { stopInstance } = require('./lib/pm2')

const start = async () => {
  logger.info(`levanter ${VERSION}`)
  try {
    const bot = new Client()
    await bot.init()
    await bot.connect()
  } catch (error) {
    logger.error(error)
  }
}
start()
