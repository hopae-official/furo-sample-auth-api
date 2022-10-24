require('dotenv').config();
if(!process.env.PRIVATE_KEY) throw 'must insert PRIVATE_KEY to .env file'

module.exports = {
  PRIVATE_KEY: process.env.PRIVATE_KEY
}