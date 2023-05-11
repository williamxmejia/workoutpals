import express from 'express'
import connection from './mysql.mjs'

const app = express()

app.listen(5000, () => {
	console.log('connected')
      }
)
