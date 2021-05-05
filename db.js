const { Pool } = require('pg')




const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})


//first hipothesis of data POST: id = identification number of the sensor or device, measure = data to be stored on the database




pool.on('error', (err) => {
    console.error(`${Date()}: Error message!`, err.stack)
})

module.exports = {
    addMeasurement: async function (id, measure, timestamp) { //storing data
        return (async () => {
            const client = await pool.connect()
            try {
                const res = await client.query('$1, $2', [id, measure, timestamp]) // receiving data
            } finally {
                client.release()
            }
        })().catch(err => { throw err })
    },

    listMeasurement: async function (chatId) { // print data
        return (async () => {
            let res;
            const client = await pool.connect()
            try {
                res = await client.query('', []) // decide how to show-print the stored data
            } finally {
                client.release()
            }
            return res.rows
        })().catch(err => { 
            throw err 
        })
    },

    delMeasurement: async function (id, timestamp) {
        return (async () => {
            const client = await pool.connect()
            try {
                const res = await client.query('Delete the measurement of id=$1 at time=$2', [id, timestamp])
            } finally {
                client.release()
            }
        })().catch(err => { throw err })
    },
}