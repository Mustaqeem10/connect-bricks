const pool = require("../connections/postgre");
const userTableQueries = require("../utils/queries");

const { signUpQuery } = userTableQueries

const createNewUser = async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      role,
      isDisabled
    } = req.body
  
    try {
      await pool.query(signUpQuery, [
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        role,
        isDisabled
      ])
      res.status(200).json({ success: true, message: 'User created successfully'})
    }
    catch(err){
    console.log(err)
    res.status(500).json({ success: false, error: err });
    }
}

module.exports = createNewUser