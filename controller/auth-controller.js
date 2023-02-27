const pool = require("../connections/postgre");
const userTableQueries = require("../utils/queries");
const fs = require('fs')

const { signUpQuery, getUserQuery, loginQuery } = userTableQueries

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
      writeFile(req.body)
      res.status(200).json({ success: true, message: 'User created successfully'})
    }
    catch(err){
    res.status(500).json({ success: false, error: err });
    }
}

const login = async(req, res) => {
  const {email, password} = req.body
  try {
    const result = await pool.query(loginQuery, [email, password])
    if (result.rowCount > 0){
      res.status(200).json({success: true, message: 'login successfull'})
    }
    res.status(401).json({success: false, message: 'invalid credentials'})
  }
  catch(err) {
    res.status(500).json({error: err})
  }
}


function writeFile(data) {
  fs.appendFile('d:/Connect Bricks/data/user.txt', JSON.stringify(data, null, 2) + "\n", function(err) {
    if (err) {
      console.log("error occurred " + err);
    }
    else {
      console.log("Succesfully written ");
    }
  })
}

function readFile() {
  fs.readFile('d:/Connect Bricks/data/user.txt', 'utf8', function(err, data) {
    if (err) {
      console.log("error reading file " + err)
    }
    else {
      console.log(data)
    }
  })
}

module.exports = { createNewUser, login }
