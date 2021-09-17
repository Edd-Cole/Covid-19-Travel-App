const {
  fetchUser: selectUser,
  buildUser: addUser,
  killUser: wipeUser,
  repairUser: fixUser
} = require('../models/users.models.ts');

export const setUser = (req: any, res: any, next: any) => {
  //destructure email and password from the request body, then send into models
  const { email, password } = req.body;
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
  const { email } = req.params;
  return wipeUser(email)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err: object) => {
      next(err);
    });
};

export const updateUser = (req: any, res: any, next: any) => {
  const { email } = req.params;
  const { name, email: updateEmail, password, trip, deleteTrip, archiveTrip } = req.body;
  return fixUser(email, name, updateEmail, password, trip, deleteTrip, archiveTrip)
    .then((user: object) => {
      res.status(200).send({ user });
    })
    .catch((err: object) => {
      next(err);
    });
};
