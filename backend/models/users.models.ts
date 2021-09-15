const { main: mongoCl} = require('../db/seeds/connection');

const fetchUser = (email: string, password: string) => {
    return mongoCl()
    .then((db: any) => {
        return db.collection("users")
        .findOne({email: email})
        .then((user: object) => {
            console.log(user)
    })
  })
}

module.exports = { fetchUser }