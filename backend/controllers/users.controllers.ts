const {
  fetchUser: selectUser,
  buildUser: addUser,
  killUser: wipeUser,
  repairUser: fixUser,
  fetchUsers: selectUsers
} = require('../models/users.models.ts');

export const setUser = (req: any, res: any, next: any) => {
  //destructure email and password from the request body, then send into models
  const { email } = req.params
  const { password } = req.body;
  return selectUser(email, password)
    .then((user: object) => {
      //Send user back in an object with key of user
      res.status(200).send({ user });
    })
    .catch((err: any) => {
      next(err);
    });
};

export const postUser = (req: any, res: any, next: any) => {
  //Extract name, email and password from request body
  const { name, email, password } = req.body;
  //invoke model using name email and password
  return addUser(name, email, password)
    .then((user: object) => {
      //If successful send back success status!
      res.status(201).send({ user });
    })
    .catch((err: object) => {
      next(err);
    });
};

export const deleteUser = (req: any, res: any, next: any) => {
  //Extract email from params
  const { email } = req.params;
  //if succesful send success - no content
  return wipeUser(email)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err: object) => {
      next(err);
    });
};

export const updateUser = (req: any, res: any, next: any) => {
//extract email from params and potential info to update from the body
  const { email } = req.params;
  const { name, email: updateEmail, password, trip, deleteTrip, archiveTrip } = req.body;
  //if successful, send back the new user with updates
  return fixUser(email, name, updateEmail, password, trip, deleteTrip, archiveTrip)
    .then((user: object) => {
      res.status(200).send({ user });
    })
    .catch((err: object) => {
      next(err);
    });
};;

export const getUsers = (req: any, res: any, next: any) => {
    return selectUsers()    
        .then((users: object[]) => {
            res.status(200).send({users});
        })
        .catch((err: object) => {
            console.log(err);
            next(err)
        })
}
