const { model, modelNames } = require('mongoose')

require ('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URL = process.env.NODE_ENV === 'test' 
  ? process.env.TEST_MONGODB_URL
  : process.env.MONGODB_URL
const SECRET = process.env.SECRET
const AWS_ACCESS_ID = process.env.AWS_ACCESS_ID
const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME
const AWS_REGION = process.env.AWS_REGION
const AWS_BUCKET_BASE_URL = process.env.AWS_BUCKET_BASE_URL

const EMAIL = process.env.EMAIL
const WORD = process.env.WORD
const OAUTH_CLIENTID = process.env.OAUTH_CLIENTID
const OAUTH_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET
const OAUTH_REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN
const SERVER_URI = 'https://aktiivinen-keppari.herokuapp.com/'

const RDS_HOSTNAME = process.env.RDS_HOSTNAME
const RDS_USERNAME = process.env.RDS_USERNAME
const RDS_PASSWORD = process.env.RDS_PASSWORD
const RDS_PORT = process.env.RDS_PORT

module.exports = {
  PORT,
  MONGODB_URL,
  SECRET,
  AWS_ACCESS_ID,
  AWS_ACCESS_KEY,
  AWS_BUCKET_NAME,
  AWS_REGION,
  AWS_BUCKET_BASE_URL,
  SERVER_URI,
  RDS_HOSTNAME,
  RDS_USERNAME,
  RDS_PASSWORD,
  RDS_PORT
}