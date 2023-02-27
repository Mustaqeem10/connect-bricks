const userTableQueries = {
    signUpQuery: `call insertUser($1, $2, $3, $4, $5, $6, $7)`,

    getUserQuery: `call getUserData($1, $2)`,

    loginQuery: `select * from users where email = $1 and password = $2`
}

module.exports = userTableQueries