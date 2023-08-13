const MindsDB = require("mindsdb-js-sdk").default;

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const message = req.body.message
        try {
            await MindsDB.connect({
                user: process.env.MINDSDB_USER,
                password: process.env.MINDSDB_PWD,
            });
            const query = `SELECT response from mindsdb.marx_v7_chat WHERE text= '${message};'` 
            const queryResult = await MindsDB.SQL.runQuery(query);
            const results = queryResult.rows.map( element => element.response)
            res.status(200).json({ results })

        } catch (error) {
            res.status(500).json({ error})
        }

    } else {
        res.status(405).send('Method Not Allowed')
    }
}