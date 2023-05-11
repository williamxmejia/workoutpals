import mysql2 from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const connection = mysql2.createPool({

	host:'localhost',
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
	connectionLimit: 100,
	multipleStatements: true,
})

export default connection
