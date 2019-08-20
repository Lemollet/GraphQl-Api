const User = require('../models/User');
const Event = require('../models/Event');
const { storeUpload } = require('../utils');

const getUsers = () => {
    return User.find();
}

const createUser = async (user) => {
    if ( user.profile_img ) {  
        const { createReadStream } = await user.profile_img;
        const stream = createReadStream();
        const { url } = await storeUpload(stream);
        user.profile_img = url;
    }
    return new User(user).save();
}

const newEvent = (event) => {
    return new Event(event).save();
}

const getUserByEmail = (email) => User.findOne({ email }).exec();

module.exports = {
    getUsers,
    createUser,
    getUserByEmail,
    newEvent,
}