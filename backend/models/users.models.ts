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
				}
				//before returning, remove password to keep user secure
				delete user._id;
				delete user.password;
				return user;
			});
	});
};

module.exports = { fetchUser };
