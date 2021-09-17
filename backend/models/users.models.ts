const { main: mongoCl } = require('../db/seeds/connection');

const fetchUser = (email: string, password: string) => {
  //connect to database
  return mongoCl().then((db: any) => {
    //connect to the relevant collection and find the user given their email address
    return db
      .collection('users')
      .findOne({ email })
      .then((user: any) => {
        //if user doesn't exist, reject promise
        if (!user) {
          return Promise.reject({ code: 404, msg: 'User not found' });
          //check if passwords match, if not then refuse access
        } else if (password !== user.password) {
          return Promise.reject({ code: 401, msg: 'Incorrect password' });
        }
        //before returning, remove password to keep user secure
        delete user._id;
        delete user.password;
        return user;
      });
  });
};

const buildUser = async (name: string, email: string, password: string) => {
  //create new user object using info they have inputted from form
  const newUser = {
    name: name,
    email: email,
    password: password,
    trips: [],
    pastTrips: []
  };

  //connect to database
  await mongoCl().then(async (db: any) => {
    //If user already exists within the database, reject the post request
    const user = await db.collection('users').findOne({ email });
    if (user) {
      return Promise.reject({ code: 400, msg: 'Email already exists' });
    }
    //insert the new user into the database
    return db.collection('users').insertOne(newUser);
  });

  //returns the new user using fetchUser from above, see fetchUser for details of implementation
  return fetchUser(email, password);
};

const killUser = (email: string) => {
  //if email is only numbers, reject promise
  if (/^\d+$/.test(email)) {
    return Promise.reject({ code: 400, msg: 'Not a valid email' });
  }

  //connect to database
  return mongoCl().then(async (db: any) => {
    //Check if user does not exist, if so, reject promise
    const user = await db.collection('users').findOne({ email });
    if (!user) {
      return Promise.reject({ code: 404, msg: 'User does not exist' });
    }
    //Remove user given their email
    return db.collection('users').deleteOne({ email });
  });
};

const repairUser = async (email: string, name: string, updateEmail: string, password: any, trip: object, deleteTrip: number, archiveTrip: number) => {
  // Get the user from the db
  const oldUser = await mongoCl().then((db: any) => {
    return db.collection('users').findOne({ email });
  });

  // Set any undefined values from the request to current values in the db,
  // otherwise set to new values
  const newName = name || oldUser.name;
  const newEmail = updateEmail || oldUser.email;
  const newPassword = password || oldUser.password;
  let newTrips = trip ? (oldUser.trips.concat([trip])) : oldUser.trips;
  let newPastTrips = archiveTrip !== undefined ? oldUser.pastTrips.concat(oldUser.trips[archiveTrip]) : oldUser.pastTrips;

  //Sort the trips by the date going
  newTrips.sort((a: any,b: any) => {
    const date1: any = new Date(a.dateGoing);
    const date2: any = new Date(b.dateGoing);
    return date1 - date2;
  })

  //if deleteTrip has been defined, remove it from the array of newTrips
  if(deleteTrip) {
    newTrips = newTrips.slice(0, deleteTrip).concat(newTrips.slice(deleteTrip + 1))
  }

  //if archiveTrip has been defined, remove it from trips, and add it back into pastTrips with keys deleted
  if(archiveTrip !== undefined) {
    newTrips = newTrips.slice(0, archiveTrip).concat(newTrips.slice(archiveTrip + 1))
    const tripAddedIn = newPastTrips.pop();
    delete tripAddedIn.acceptingTourists
    delete tripAddedIn.extraDocsRequired
    delete tripAddedIn.newInfo
    delete tripAddedIn.testRequired
    delete tripAddedIn.trafficLight
    delete tripAddedIn.vaccineRequired
    newPastTrips.push(tripAddedIn)
  }

  // Find and update user in the db by email
  await mongoCl().then((db: any) => {
    return db
      .collection('users')
      .updateOne({ email }, { $set: { name: newName, email: newEmail, password: newPassword, trips: newTrips, pastTrips: newPastTrips } });
  });

  // Get the updated user from the db
  return mongoCl().then(async (db: any) => {
    const user = await db.collection('users').findOne({ email: newEmail });
    //check that new password is not old password
    if(password && oldUser.password === user.password) return Promise.reject({code: 400, msg: "Cannot use current password"})
    // deleting password and id for security
    delete user._id;
    delete user.password;
    return user;
  });
};

module.exports = { fetchUser, buildUser, killUser, repairUser };
