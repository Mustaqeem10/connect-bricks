const pool = require("../connections/postgre");
const userTableQueries = require("../utils/queries");

const getUserData = async(req, res) => {
    const id = Number(req.params.id)
    try {
      const result = await pool.query(getUserQuery, [id, 'user'])
      res.status(200).json(result.rows[0].result)
    }
    catch(err){
    res.status(500).json({ success: false, error: err });
    console.log(err)
    }
}

module.exports = {getUserData}