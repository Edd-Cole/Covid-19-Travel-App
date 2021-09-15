const { main: mongoCl } = require('../db/seeds/connection');

const fetchUser = (email: string, password: string) => {
	///connect to database
	return mongoCl().then((db: any) => {
		//connect to the relevant collection and find the user given their email address
		return db
			.collection('users')
			.findOne({ email: email })
			.then((user: any) => {
				if (!user) {
					return Promise.reject({ code: 404, msg: 'User not found' });
				} else if (password !== user.password) {
					// check if passwords match, if not then refuse access
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
        pastTrips: [],
    };

    //connect to database
    await mongoCl()
    .then(async (db: any) => {
        const user = await db.collection('users').findOne({email: email})
        //If user already exists within the database, reject the post request
        if(user) {
            return Promise.reject({code: 400, msg: "Email already exists"})
        }
        //insert the new user into the database 
        return db.collection('users').insert(newUser);    
    })

    //returns the new user using fetchUser from above, see fetchUser for details of implementation
    return fetchUser(email, password);
}

module.exports = { fetchUser, buildUser };
