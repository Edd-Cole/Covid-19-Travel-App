const { fetchUser: selectUser } = require('../models/users.models.ts');

export const grabUser = (req: any, res: any, next: any) => {
    //destructure email and password from the request body, then send into models
    const { email, password } = req.body;
    return selectUser(email, password)
        .then((user: object) => {
            console.log(user)
        })
        .catch((err: any) => {
            next(err)
        })
}