const { fetchUser: selectUser } = require('../models/users.models.ts');

export const setUser = (req: any, res: any, next: any) => {
    //destructure email and password from the request body, then send into models
    const { email, password } = req.body;
    return selectUser(email, password)
        .then((user: object) => {
            //Send user back in an object with key of user
            res.status(200).send({user})
        })
        .catch((err: any) => {
            next(err)
        })
}